import React, {PureComponent} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {screen} from '../../common';
import HomeArticleItem from './HomeArticleItem';

class HomeArticleView extends PureComponent {
  constructor(props) {
    super(props);
  }
  doLoadMoreData() {
    console.log('doLoadMoreData =>');
    this.props.AddListData && this.props.AddListData();
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          nestedScrollEnabled={true}
          data={this.props.infos}
          onEndReachedThreshold={0.3}
          onEndReached={() => this.doLoadMoreData()}
          renderItem={({item}) => <HomeArticleItem />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default HomeArticleView;
