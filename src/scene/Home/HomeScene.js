import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

class HomeScene extends Component {
  UNSAFE_componentWillMount() {
    console.log('run Home =>');
    // console.log('Home props:', this.props.navigation.state.params);
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button
          title="H5"
          onPress={() => navigate('Web', {url: 'https://www.baidu.com'})}
        />
        <Button title="用户许可" onPress={() => navigate('Per')} />
      </View>
    );
  }
}
export default HomeScene;
