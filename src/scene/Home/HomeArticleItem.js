import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
// import {screen} from '../../common';
// import HomeGridItem from './HomeGridItem';

class HomeArticleItem extends PureComponent {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{paddingVertical: 10}}>
          <Text>神作重启</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
          }}>
          <Image
            source=""
            style={{
              width: 150,
              height: 100,
              backgroundColor: '#f1f1f1',
            }}
          />
          <Image
            source=""
            style={{
              width: 150,
              height: 100,
              backgroundColor: '#f1f1f1',
            }}
          />
          <Image
            source=""
            style={{
              width: 150,
              height: 100,
              backgroundColor: '#f1f1f1',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
          }}>
          <View
            style={{
              flexBasis: 100,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text>远方</Text>
            <Text>6分钟前</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text>···</Text>
          </View>
        </View>
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

export default HomeArticleItem;
