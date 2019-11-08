import React, {Component} from 'react';
import {
  Button,
  SafeAreaView,
  Platform,
  BackHandler,
  ToastAndroid,
  DeviceEventEmitter,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import Swiper from 'react-native-swiper';
import CustomStatusBar from '../../widget/CustomStatusBar';
import Loading from '../../widget/Loading';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view-forked';
import {screen} from '../../common';
import HomeArticleView from './HomeArticleView';

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
    return (
      <SafeAreaView style={{flex: 1}}>
        {/* <ScrollView style={{flex: 1}}> */}
        <CustomStatusBar />
        <View style={{width: screen.width, height: 200}}>
          <Swiper showsPagination={false}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#9DD6EB',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 30,
                  fontWeight: 'bold',
                }}>
                Hello Swiper
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#9DD6EB',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 30,
                  fontWeight: 'bold',
                }}>
                Beautiful
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#9DD6EB',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 30,
                  fontWeight: 'bold',
                }}>
                And simple
              </Text>
            </View>
          </Swiper>
        </View>
        {this.state.loadingVisible && (
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
        />
        <ScrollableTabView
          tabBarPosition="top"
          renderTabBar={() => (
            <ScrollableTabBar
              style={styles.scrollStyle}
              tabStyle={styles.tabStyle}
            />
          )}
          tabBarTextStyle={styles.tabBarTextStyle}
          tabBarInactiveTextColor={'black'}
          tabBarActiveTextColor={'red'}
          tabBarUnderlineStyle={styles.underlineStyle}
          initialPage={0}>
          <HomeArticleView
            infos={[{key: 'a'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}]}
            key={1}
            tabLabel={'关注'}
          />
          <HomeArticleView
            infos={[{key: 'a'}, {key: 'b'}]}
            key={2}
            tabLabel={'推荐'}
          />
          <HomeArticleView key={3} tabLabel={'预告片'} />
          <HomeArticleView key={4} tabLabel={'热文榜'} />
          <HomeArticleView key={5} tabLabel={'热文榜'} />
          <HomeArticleView key={6} tabLabel={'热文榜'} />
          <HomeArticleView key={7} tabLabel={'热文榜'} />
          <HomeArticleView key={8} tabLabel={'受益人'} />
        </ScrollableTabView>
        {/* </ScrollView> */}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  tabStyle: {},
  scrollStyle: {
    borderWidth: 0,
    backgroundColor: 'white',
  },
  tabBarTextStyle: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  underlineStyle: {
    height: 4,
    backgroundColor: 'red',
    borderRadius: 4,
    width: 20,
  },
});
export default HomeScene;
