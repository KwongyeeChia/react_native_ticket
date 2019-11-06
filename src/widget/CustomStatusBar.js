import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import {screen} from '../common';

class CustomStatusBar extends Component {
  render() {
    return (
      <View
        style={{
          height: StatusBar.currentHeight,
          width: screen.width,
          backgroundColor: '#fff',
        }}
      />
    );
  }
}

export default CustomStatusBar;
