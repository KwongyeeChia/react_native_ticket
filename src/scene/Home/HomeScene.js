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
} from 'react-native';

import CustomStatusBar from '../../widget/CustomStatusBar';
import Loading from '../../widget/Loading';

class HomeScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingVisible: false,
      isClick: true,
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
    return (
      <SafeAreaView>
        <CustomStatusBar />
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
      </SafeAreaView>
    );
  }
}
export default HomeScene;
