import React, {Component} from 'react';
import {Button, View} from 'react-native';
import CustomStatusBar from '../../widget/CustomStatusBar';

class DiscoveryScene extends Component {
  UNSAFE_componentWillMount() {
    // console.log('Home props:', this.props.navigation.state.params);
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <CustomStatusBar />
        <Button title="DiscoveryScene" onPress={() => navigate('MyModal')} />
      </View>
    );
  }
}
export default DiscoveryScene;
