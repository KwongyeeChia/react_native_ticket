import React, {Component} from 'react';
import {Button, View, Text, StatusBar} from 'react-native';

class MovieScene extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: <Text>MovieScene</Text>,
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
    console.log('run Movie =>');
    // console.log('Home props:', this.props.navigation.state.params);
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button title="MovieScene" onPress={() => navigate('MyModal')} />
      </View>
    );
  }
}
export default MovieScene;
