import React, {Component} from 'react';
import {StatusBar, BackHandler, Platform, ToastAndroid} from 'react-native';

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  TabBarBottom,
} from 'react-navigation';

import color from './widget/color';
import {screen, system} from './common';
import TabBarItem from './widget/TabBarItem';

// TabScene
import HomeScene from './scene/Home/HomeScene';
import MovieScene from './scene/Movie/MovieScene';
import DiscoveryScene from './scene/Discovery/DiscoveryScene';
import ShowScene from './scene/Show/ShowScene';
import MineScene from './scene/Mine/MineScene';
// unTabScene
import PermissionScene from './widget/PermissionScene';
import WebScene from './widget/WebScene';

// 配置沉浸式状态栏及元素高亮
const lightContentScenes = ['Mine', 'Per'];
// 读取当前路由名称
function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}

class RootScene extends Component {
  constructor() {
    super();
    StatusBar.setBarStyle('light-content');
  }
  componentDidMount() {
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
    console.log('this =>', this.props);
    return;
    //禁用返回键
    if (this.props.navigation.isFocused()) {
      //判断   该页面是否处于聚焦状态
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        //最近2秒内按过back键，可以退出应用。
        // return false;
        BackHandler.exitApp(); //直接退出APP
      } else {
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', 1000); //提示
        return true;
      }
    }
  };
  someEvent(someRouteName) {
    // call navigate for AppNavigator here:
    // this.navigator &&
    //   this.navigator.dispatch(
    //     NavigationActions.navigate({routeName: someRouteName}),
    //   );
  }
  render() {
    return (
      <AppContainer
        ref={nav => {
          console.log('nav =>', nav);
          this.navigator = nav;
        }}
        // 路由状态监听
        // onNavigationStateChange={(prevState, currentState) => {
        //   const currentScene = getCurrentRouteName(currentState);
        //   const previousScene = getCurrentRouteName(prevState);
        //   if (previousScene !== currentScene) {
        //     StatusBar.setTranslucent(true); // 控制scene是否显示在系统状态栏下方
        //     StatusBar.setBackgroundColor('transparent'); // 状态栏背景色
        //     if (lightContentScenes.indexOf(currentScene) >= 0) {
        //       StatusBar.setBarStyle('light-content');
        //     } else {
        //       StatusBar.setBarStyle('dark-content');
        //     }
        //   }
        // }}
      />
    );
  }
}

// 创建AppTabBar
const AppBottomTab = createBottomTabNavigator(
  {
    Home: {
      screen: createStackNavigator({Home: HomeScene}, {headerMode: 'none'}),
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./img/tabbar/cinema_normal.png')}
            selectedImage={require('./img/tabbar/cinema_selected.png')}
          />
        ),
      },
    },
    Movie: {
      screen: createStackNavigator({Home: MovieScene}, {headerMode: 'none'}),
      navigationOptions: {
        tabBarLabel: '电影',
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./img/tabbar/film_normal.png')}
            selectedImage={require('./img/tabbar/film_selected.png')}
          />
        ),
      },
    },
    Discovery: {
      screen: createStackNavigator(
        {Nearby: DiscoveryScene},
        {headerMode: 'none'},
      ),
      navigationOptions: {
        tabBarLabel: '发现',
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./img/tabbar/discovery_normal.png')}
            selectedImage={require('./img/tabbar/discovery_selected.png')}
          />
        ),
      },
    },
    Show: {
      screen: createStackNavigator({Order: ShowScene}, {headerMode: 'none'}),
      navigationOptions: {
        tabBarLabel: '演出',
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./img/tabbar/damai_normal.png')}
            selectedImage={require('./img/tabbar/damai_selected.png')}
          />
        ),
      },
    },
    Mine: {
      screen: createStackNavigator({Mine: MineScene}, {headerMode: 'none'}),
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('./img/tabbar/mine_normal.png')}
            selectedImage={require('./img/tabbar/mine_selected.png')}
          />
        ),
      },
    },
  },
  {
    // tabBarComponent: () => null, 隐藏底部tabBar
    initialRouteName: 'Home', // 指定tabBar 默认显示页面
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: true,
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: color.primary,
      inactiveTintColor: color.gray,
      style: {
        backgroundColor: '#fff',
        // borderTopWidth: 0.5,
        // borderTopColor: color.gray,
      },
    },
    backBehavior: 'none',
  },
);

// AppBottomTab.navigationOptions = {
// header: null,
// };
// 根路由
const AppRootStack = createStackNavigator(
  {
    Tab: {screen: AppBottomTab},
    Web: {screen: WebScene},
    Per: {screen: PermissionScene},
  },
  {
    mode: 'modal',
    initialRouteName: 'Tab', //定义最外层得初始跳转页
    headerMode: 'none', // 控制是否显示系统header控件
    defaultNavigationOptions: {
      headerBackTitle: null,
      headerTintColor: '#333333',
      showIcon: true,
    },
  },
);

// 创建App根容器
const AppContainer = createAppContainer(AppRootStack);

export default RootScene;
