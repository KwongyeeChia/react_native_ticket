import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import CustomStatusBar from '../../widget/CustomStatusBar';

class ShowScene extends Component {
  UNSAFE_componentWillMount() {
    // console.log('Home props:', this.props.navigation.state.params);
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <CustomStatusBar />
        <Button title="ShowScene" onPress={() => navigate('Per')} />
      </View>
    );
  }
}
export default ShowScene;
