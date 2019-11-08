import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import {screen} from '../common/index';

export default class CustomTabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDefaultColor: '#333333',
      inactiveDefaultColor: '#979797',
    };
  }

  _renderTab(name, page, isTabActive, onPressHandler) {
    // const {textStyle} = this.props;
    const textColor = isTabActive
      ? this.props.activeColor
      : this.props.inactiveColor;

    const fontWeight = isTabActive ? 'bold' : 'normal';

    // const Button = Platform.OS === 'ios' ? ButtonIos : ButtonAndroid;

    return (
      <TouchableOpacity
        style={styles.tabItem}
        key={name}
        accessible={true}
        accessibilityLabel={name}
        accessibilityTraits="button"
        onPress={() => onPressHandler(page)}>
        <Text style={[{color: textColor, fontWeight}]}>{name}</Text>
      </TouchableOpacity>
    );
  }

  _renderUnderline() {
    const containerWidth = this.props.containerWidth + 20;
    const numberOfTabs = this.props.tabs.length;
    const underlineWidth = this.props.tabUnderlineDefaultWidth
      ? this.props.tabUnderlineDefaultWidth
      : containerWidth / (numberOfTabs * 2);
    const scale = this.props.tabUnderlineScaleX
      ? this.props.tabUnderlineScaleX
      : 3;
    const deLen = (containerWidth / numberOfTabs - underlineWidth) / 2;
    const tabUnderlineStyle = {
      position: 'absolute',
      width: underlineWidth,
      height: 2,
      borderRadius: 2,
      backgroundColor: this.props.activeColor,
      bottom: 0,
      left: deLen,
    };

    const translateX = this.props.scrollValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, containerWidth / numberOfTabs],
    });

    const scaleValue = defaultScale => {
      let arr = new Array(numberOfTabs * 2);
      return arr.fill(0).reduce(
        function(pre, cur, idx) {
          idx === 0
            ? pre.inputRange.push(cur)
            : pre.inputRange.push(pre.inputRange[idx - 1] + 0.5);
          idx % 2
            ? pre.outputRange.push(defaultScale)
            : pre.outputRange.push(1);
          return pre;
        },
        {inputRange: [], outputRange: []},
      );
    };

    const scaleX = this.props.scrollValue.interpolate(scaleValue(scale));

    return (
      <Animated.View
        style={[
          tabUnderlineStyle,
          {
            transform: [{translateX}, {scaleX}],
          },
          this.props.underlineStyle,
        ]}
      />
    );
  }

  render() {
    return (
      <View style={[styles.tabContainer]}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            // flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          {this.props.tabs.map((name, page) => {
            const isTabActive = this.props.activeTab === page;
            return this._renderTab(
              name,
              page,
              isTabActive,
              this.props.goToPage,
            );
          })}
          {this._renderUnderline()}
        </ScrollView>
      </View>
    );
  }
}

const ButtonAndroid = props => (
  <TouchableNativeFeedback
    delayPressIn={0}
    background={TouchableNativeFeedback.SelectableBackground()}
    {...props}>
    {props.children}
  </TouchableNativeFeedback>
);

const ButtonIos = props => (
  <TouchableOpacity {...props}>{props.children}</TouchableOpacity>
);

const styles = StyleSheet.create({
  tabContainer: {
    width: screen.width,
    height: 50,
    flexDirection: 'row',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#e0e0e0',
  },
  tabItem: {
    flex: 1,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
