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
  FlatList,
  Image,
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
      flatData: [
        {key: 'a'},
        {key: 'b'},
        {key: 'a'},
        {key: 'b'},
        {key: 'a'},
        {key: 'b'},
        {key: 'a'},
        {key: 'b'},
        {key: 'a'},
        {key: 'b'},
        {key: 'a'},
        {key: 'b'},
      ],
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
  doLoadMoreData = () => {
    let {flatData} = this.state;
    console.log('before =>', flatData);
    flatData.push({key: 'b'});
    console.log('after =>', flatData);
    this.setState({flatData: flatData});
  };
  _renderSwiper = () => {
    return (
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
    );
  };
  onScroll(event) {
    console.log('event =>', event);
    // const { loading, status, data } = this.state;
    // const { onEndReachedThreshold, noMoreLoading } = this.props;
    // if (noMoreLoading) return;
    // const { contentSize, contentOffset, layoutMeasurement } = event.nativeEvent;
    // const loadMore = contentSize.height - contentOffset.y < layoutMeasurement.height + (contentSize.height * onEndReachedThreshold);
    // if (loadMore && !loading && status != 'end' && data.length) {
    // 	this.onLoading();
    // }
  }
  render() {
    const {navigate} = this.props.navigation;
    let {flatData} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomStatusBar />
        <ScrollView
          stickyHeaderIndices={[4]}
          style={{flex: 1, borderEndColor: 'red', borderWidth: 1}}>
          <View style={{height: 300, width: screen.width}}>
            {this._renderSwiper()}
          </View>
          <View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingVertical: 20,
              }}>
              <Text>热映影片</Text>
              <Text>周票房榜</Text>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              style={{flex: 1, paddingHorizontal: 20}}
              horizontal>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                return (
                  <View style={{marginRight: 10}}>
                    <Image
                      style={{
                        width: 100,
                        height: 120,
                        backgroundColor: '#f1f1f1',
                        marginBottom: 10,
                      }}
                    />
                    <View>
                      <Text>少年的你</Text>
                      <Text>票房榜No.1</Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingVertical: 20,
              }}>
              <Text>即将上映</Text>
              <Text>想看榜</Text>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              style={{flex: 1, paddingHorizontal: 20}}
              horizontal>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                return (
                  <View style={{marginRight: 10}}>
                    <Image
                      style={{
                        width: 100,
                        height: 120,
                        backgroundColor: '#f1f1f1',
                        marginBottom: 10,
                      }}
                    />
                    <View>
                      <Text>少年的你</Text>
                      <Text>票房榜No.1</Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingVertical: 20,
              }}>
              <Text>精彩演出</Text>
              <Text>演出日历</Text>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              style={{flex: 1, paddingHorizontal: 20}}
              horizontal>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                return (
                  <View style={{marginRight: 10}}>
                    <Image
                      style={{
                        width: 100,
                        height: 120,
                        backgroundColor: '#f1f1f1',
                        marginBottom: 10,
                      }}
                    />
                    <View>
                      <Text>少年的你</Text>
                      <Text>票房榜No.1</Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <ScrollableTabView
            style={{
              height: screen.height - 50,
              // borderWidth: 1,
              // borderColor: 'red',
            }}
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
              infos={flatData}
              key={1}
              tabLabel={'关注'}
              AddListData={this.doLoadMoreData}
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
        </ScrollView>
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
