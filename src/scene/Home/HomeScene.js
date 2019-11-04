import React, {Component} from 'react';
import {Button, View, Text, StatusBar} from 'react-native';

class HomeScene extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: <Text>HomeScene</Text>,
      headerStyle: {
        backgroundColor: '#01af63',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };
  UNSAFE_componentWillMount() {
    // console.log('Home props:', this.props.navigation.state.params);
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>hello</Text>
        <Button title="HomeScene" onPress={() => navigate('Web')} />
      </View>
    );
  }
}
export default HomeScene;
