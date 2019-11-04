import React, {Component} from 'react';
import {StatusBar} from 'react-native';

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

// 配置高亮的场景
const lightContentScenes = ['Home', 'Mine'];
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
  someEvent(someRouteName) {
    console.log('someRouteName:', someRouteName);
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
          this.navigator = nav;
        }}
        // 路由状态监听
        onNavigationStateChange={(prevState, currentState) => {
          console.log('prevState:', prevState, 'currentState', currentState);
          const currentScene = getCurrentRouteName(currentState);
          const previousScene = getCurrentRouteName(prevState);
          if (previousScene !== currentScene) {
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
      screen: createStackNavigator({Home: HomeScene}),
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '首页',
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            // normalImage={require('./img/tabbar/tabbar_homepage.png')}
            // selectedImage={require('./img/tabbar/tabbar_homepage_selected.png')}
          />
        ),
      }),
    },
    Movie: {
      screen: createStackNavigator({Home: MovieScene}),
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '电影',
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            // normalImage={require('./img/tabbar/tabbar_homepage.png')}
            // selectedImage={require('./img/tabbar/tabbar_homepage_selected.png')}
          />
        ),
      }),
    },
    Discovery: {
      screen: createStackNavigator({Nearby: DiscoveryScene}),
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '发现',
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            // normalImage={require('./img/tabbar/tabbar_merchant.png')}
            // selectedImage={require('./img/tabbar/tabbar_merchant_selected.png')}
          />
        ),
      }),
    },
    Show: {
      screen: createStackNavigator({Order: ShowScene}),
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '演出',
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            // normalImage={require('./img/tabbar/tabbar_order.png')}
            // selectedImage={require('./img/tabbar/tabbar_order_selected.png')}
          />
        ),
      }),
    },
    Mine: {
      screen: createStackNavigator({Mine: MineScene}),
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '我的',
        tabBarIcon: ({focused, tintColor}) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            // normalImage={require('./img/tabbar/tabbar_mine.png')}
            // selectedImage={require('./img/tabbar/tabbar_mine_selected.png')}
          />
        ),
      }),
    },
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: true,
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: color.primary,
      inactiveTintColor: color.gray,
      style: {backgroundColor: '#ffffff'},
    },
  },
);

AppBottomTab.navigationOptions = {
  header: null,
};
// 根路由
const AppRootStack = createStackNavigator(
  {
    Tab: {screen: AppBottomTab},
    Web: {screen: WebScene},
    Per: {screen: PermissionScene},
  },
  {
    mode: 'card',
    headerMode: 'none',
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
