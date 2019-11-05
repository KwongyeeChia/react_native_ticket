import React, {Component} from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {screen} from '../../common';

class MineScene extends Component {
  UNSAFE_componentWillMount() {
    // console.log('Home props:', this.props.navigation.state.params);
  }
  _renderTitle = title => (
    <View
      style={{
        paddingHorizontal: 22,
      }}>
      <Text
        style={{
          paddingVertical: 15,
          fontSize: 18,
          fontWeight: '700',
          color: '#333',
          borderBottomWidth: 0.5,
          borderBottomColor: '#f1f1f1',
        }}>
        {title}
      </Text>
    </View>
  );
  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#f1f1f1'}}>
        <LinearGradient
          style={{
            width: screen.width,
            height: 300,
            paddingHorizontal: 22,
            borderBottomLeftRadius: 22,
            borderBottomRightRadius: 22,
            marginBottom: -80,
          }}
          colors={['#fe408a', '#ff306a']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}>
          <View>
            <Text>头</Text>
          </View>
          <View>
            <Text>入口</Text>
          </View>
        </LinearGradient>
        <View style={{flex: 1, flexDirection: 'column', paddingHorizontal: 22}}>
          <View
            style={{
              flex: 1,
              borderRadius: 10,
              marginBottom: 16,
              backgroundColor: '#fff',
            }}>
            {this._renderTitle('我的优惠')}
          </View>
          <View
            style={{
              flex: 1,
              borderRadius: 10,
              marginBottom: 16,
              backgroundColor: '#fff',
            }}>
            {this._renderTitle('我的记录')}
          </View>
          <View
            style={{
              flex: 1,
              borderRadius: 10,
              marginBottom: 16,
              backgroundColor: '#fff',
            }}>
            {this._renderTitle('我的服务')}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default MineScene;
