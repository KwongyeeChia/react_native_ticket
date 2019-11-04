import React, {Component} from 'react';
import {Button, View, Text, StatusBar} from 'react-native';

class ShowScene extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: <Text>ShowScene</Text>,
      // headerStyle: {
      //   backgroundColor: '#01af63',
      // },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };
  UNSAFE_componentWillMount() {
    console.log('run Show =>');
    // console.log('Home props:', this.props.navigation.state.params);
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button title="ShowScene" onPress={() => navigate('MyModal')} />
      </View>
    );
  }
}
export default ShowScene;
