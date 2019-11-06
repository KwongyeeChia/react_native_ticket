import React, {Component} from 'react';
import {StatusBar, View, Text} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  TabBarBottom,
  NavigationActions,
} from 'react-navigation';
import {ModalManager} from 'react-native-root-modal';

import color from './widget/color';
// import {screen, system} from './common';
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
    this.navigator = '';
  }
  componentDidMount() {}
  componentWillUnmount() {}
  // call navigate for AppNavigator here:
  someEvent(someRouteName) {
    this.navigator &&
      this.navigator.dispatch(
        NavigationActions.navigate({routeName: someRouteName}),
      );
  }
  render() {
    return (
      <AppContainer
        ref={nav => {
          this.navigator = nav;
        }}
        // 路由状态监听
        onNavigationStateChange={(prevState, currentState) => {
          const currentScene = getCurrentRouteName(currentState);
          const previousScene = getCurrentRouteName(prevState);
          if (previousScene !== currentScene) {
            StatusBar.setTranslucent(true); // 控制scene是否显示在系统状态栏下方
            StatusBar.setBackgroundColor('transparent'); // 状态栏背景色
            if (lightContentScenes.indexOf(currentScene) >= 0) {
              StatusBar.setBarStyle('light-content');
            } else {
              StatusBar.setBarStyle('dark-content');
            }
          }
        }}
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
      screen: createStackNavigator({Movie: MovieScene}, {headerMode: 'none'}),
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
        {Discovery: DiscoveryScene},
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
      screen: createStackNavigator({Show: ShowScene}, {headerMode: 'none'}),
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
// 注册scene之前创建
// let modal = new ModalManager(
//   (
//     <View style={{width: screen.width, height: screen.height}}>
//       <Text>hello</Text>
//     </View>
//   ),
// );
// 创建App根容器
const AppContainer = createAppContainer(AppRootStack);

export default RootScene;
