import React, {Component} from 'react';
import {Button, View, Text, StatusBar} from 'react-native';

StatusBar.setBarStyle('default');
StatusBar.setTranslucent(true);
StatusBar.setBackgroundColor('transparent');

class HomeScene extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: <Text>DiscoveryScene</Text>,
      // headerLeft: <Text>返回</Text>,
      // headerTitle: <Text>HomeScene</Text>,
      // headerRight: (
      //   <View>
      //     <Text>去首页</Text>
      //   </View>
      // ),
      headerStyle: {
        backgroundColor: 'red',
        textAlign: 'center',
      },
      headerTintColor: '#333',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };
  UNSAFE_componentWillMount() {
    console.log('run Home =>');
    // console.log('Home props:', this.props.navigation.state.params);
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>hello</Text>
        <Button
          title="HomeScene"
          onPress={() => navigate('Web', {url: 'https://www.baidu.com'})}
        />
      </View>
    );
  }
}
export default HomeScene;
