import React, {PureComponent} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {screen} from '../../common';
import HomeArticleItem from './HomeArticleItem';

class HomeArticleView extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.infos}
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
