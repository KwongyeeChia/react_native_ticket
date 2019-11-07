import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {screen} from '../common';

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationOrder: 0,
      animationTimer: null,
    };
  }
  UNSAFE_componentWillMount() {
    let {animationOrder, animationTimer} = this.state;
    if (!this.props.loadingVisible) {
      animationTimer && clearInterval(animationTimer);
    } else {
      animationTimer = setInterval(() => {
        animationOrder++;
        if (animationOrder > 3) {
          animationOrder = 0;
        }
        this.setState({
          animationOrder,
        });
      }, 180);
    }
  }
  loadingPrepare = () => {
    return (
      <View>
        <Image
          style={styles.animationPicHide}
          source={require('../img/animation/movie_loading1.png')}
        />
        <Image
          style={styles.animationPicHide}
          source={require('../img/animation/movie_loading2.png')}
        />
        <Image
          style={styles.animationPicHide}
          source={require('../img/animation/movie_loading3.png')}
        />
        <Image
          style={styles.animationPicHide}
          source={require('../img/animation/movie_loading4.png')}
        />
      </View>
    );
  };
  render() {
    const animationPicArr = [
      require('../img/animation/movie_loading1.png'),
      require('../img/animation/movie_loading2.png'),
      require('../img/animation/movie_loading3.png'),
      require('../img/animation/movie_loading4.png'),
    ];
    return (
      <View style={styles.animationPanel}>
        {this.loadingPrepare()}
        <View style={styles.animationState}>
          <Image
            style={styles.animationPic}
            source={animationPicArr[this.state.animationOrder]}
          />
          <Text>正在加载，么么哒~</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationPanel: {
    width: screen.width,
    height: screen.height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animationState: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  animationPic: {
    width: 82.5,
    height: 121.5,
    marginBottom: 10,
  },
  animationPicHide: {
    width: 0,
    height: 0,
  },
});
