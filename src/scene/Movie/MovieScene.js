import React, {Component} from 'react';
import {Button, View, Text, RefreshControl, ScrollView} from 'react-native';
import CustomStatusBar from '../../widget/CustomStatusBar';

class MovieScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefresing: false,
    };
  }
  UNSAFE_componentWillMount() {
    // console.log('Home props:', this.props.navigation.state.params);
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={() => this._onRefresh()}
            colors={['#ff7887']}
          />
        }>
        <CustomStatusBar />
        <Button title="MovieScene" onPress={() => navigate('Per')} />
      </ScrollView>
    );
  }
  _onRefresh() {
    this.setState({isRefreshing: true});
    setTimeout(() => {
      this.setState({
        isRefreshing: false,
      });
    }, 2000);
  }
}
export default MovieScene;
