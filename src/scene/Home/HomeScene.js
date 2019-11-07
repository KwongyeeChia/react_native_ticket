import React, {Component} from 'react';
import {
  Button,
  SafeAreaView,
  View,
  Text,
  Image,
  Platform,
  BackHandler,
  ToastAndroid,
  DeviceEventEmitter,
  SectionList,
  ScrollView,
} from 'react-native';

import CustomStatusBar from '../../widget/CustomStatusBar';
import CustomTabBar from '../../widget/CustomTabBar';
import Loading from '../../widget/Loading';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {screen} from '../../common/index';

class HomeScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingVisible: false,
      isClick: true,
      currentTabIndex: 0,
    };
  }
  UNSAFE_componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }
  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }
  onBackAndroid = () => {
    //禁用返回键
    if (this.props.navigation.isFocused()) {
      // 判断该页面是否处于聚焦状态
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        //最近2秒内按过back键，可以退出应用。
        BackHandler.exitApp(); //直接退出APP
      } else {
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', 1000); //提示
        return true;
      }
    }
  };
  showModal() {
    let {isClick} = this.state;
    if (isClick) {
      this.setState({
        isClick: false,
      });
      setTimeout(() => {
        DeviceEventEmitter.emit('openGlobalModalEmit');
        this.setState({
          isClick,
        });
      }, 1000);
    }
  }
  render() {
    const {navigate} = this.props.navigation;
    let {currentTabIndex} = this.state;
    // tabBarUnderlineStyle={{
    //   backgroundColor: '#ff7887',
    //   height: 4,
    //   width: 18,
    //   borderRadius: 2,
    // }}
    // tabBarTextStyle={{fontWeight: '700'}}
    // tabBarActiveTextColor="#333"
    // tabBarInactiveTextColor="#979797"
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomStatusBar />
        <ScrollableTabView
          initialPage={0}
          renderTabBar={() => (
            <CustomTabBar
              // backgroundColor={'#ffffff'}
              tabUnderlineDefaultWidth={20} // default containerWidth / (numberOfTabs * 4)
              tabUnderlineScaleX={3} // default 3
              activeColor={'#333333'}
              inactiveColor={'#979797'}
              activeLineColor={'#ff7887'}
              style={{flex: 1, overflow: 'hidden'}}
            />
          )}
          onChangeTab={e => {
            this.setState({currentTabIndex: e.i});
          }}>
          <View
            tabLabel="关注"
            style={{width: screen.width, height: screen.height}}>
            <Text>关注</Text>
            <Text>关注</Text>
            <Text>关注</Text>
            <Text>关注</Text>
          </View>
          <View
            tabLabel="推荐"
            style={{width: screen.width, height: screen.height}}>
            <Text>推荐</Text>
            <Text>推荐</Text>
            <Text>推荐</Text>
            <Text>推荐</Text>
            <Text>推荐</Text>
          </View>
          <View
            tabLabel="预告片"
            style={{width: screen.width, height: screen.height}}>
            <Text>预告片</Text>
          </View>
          <View
            tabLabel="关注"
            style={{width: screen.width, height: screen.height}}>
            <Text>关注</Text>
          </View>
          <View
            tabLabel="推荐"
            style={{width: screen.width, height: screen.height}}>
            <Text>推荐</Text>
          </View>
          <View
            tabLabel="关注"
            style={{width: screen.width, height: screen.height}}>
            <Text>关注</Text>
          </View>
          <View
            tabLabel="推荐"
            style={{width: screen.width, height: screen.height}}>
            <Text>推荐</Text>
          </View>
          <View
            tabLabel="预告片"
            style={{width: screen.width, height: screen.height}}>
            <Text>预告片</Text>
          </View>
          <View
            tabLabel="关注"
            style={{width: screen.width, height: screen.height}}>
            <Text>关注</Text>
          </View>
          <View
            tabLabel="推荐"
            style={{width: screen.width, height: screen.height}}>
            <Text>推荐</Text>
          </View>
          <View
            tabLabel="预告片"
            style={{width: screen.width, height: screen.height}}>
            <Text>预告片</Text>
          </View>
        </ScrollableTabView>
        {/* {this.state.loadingVisible && (
          <Loading loadingVisible={this.state.loadingVisible} />
        )}
        <Button
          title="H5"
          onPress={() => navigate('Web', {url: 'https://www.baidu.com'})}
        />
        <Button title="用户许可" onPress={() => navigate('Per')} />
        <Button
          title="打开模态窗口"
          onPress={() => {
            this.showModal();
          }}
        />
        <Button
          title="打开Loading"
          onPress={() => this.setState({loadingVisible: true})}
        /> */}
      </SafeAreaView>
    );
  }
}
export default HomeScene;
