import React, {Component} from 'react';
import {Image} from 'react-native';

class TabBarItem extends Component {
  render() {
    let selectedImage = this.props.selectedImage
      ? this.props.selectedImage
      : this.props.normalImage;
    return (
      <Image
        source={this.props.focused ? selectedImage : this.props.normalImage}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{tintColor: this.props.tintColor, width: 22, height: 22}}
      />
    );
  }
}

export default TabBarItem;
