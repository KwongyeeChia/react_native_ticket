import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {screen} from '../common';

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationOrder: 1,
      loadingTimer: null,
    };
  }
  UNSAFE_componentWillMount() {
    let {animationOrder, loadingTimer} = this.state;
    if (this.props.visible) {
      loadingTimer = setInterval(() => {
        animationOrder++;
        if (animationOrder > 4) {
          animationOrder = 1;
        }
        this.setState({
          animationOrder,
        });
      }, 200);
    } else {
      loadingTimer && clearInterval(loadingTimer);
    }
  }
  loadingAnimate = order => {
    switch (order) {
      case 1:
        return require('../img/animation/movie_loading1.png');
      case 2:
        return require('../img/animation/movie_loading2.png');
      case 3:
        return require('../img/animation/movie_loading3.png');
      case 4:
        return require('../img/animation/movie_loading4.png');
      default:
        return require('../img/animation/movie_loading1.png');
    }
  };
  render() {
    return (
      <View
        style={{
          width: screen.width,
          height: screen.height,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <Image
            style={{width: 82.5, height: 121.5}}
            source={this.loadingAnimate(this.state.animationOrder)}
          />
          <Text>正在加载，么么哒~</Text>
        </View>
      </View>
    );
  }
}
