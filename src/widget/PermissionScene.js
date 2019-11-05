import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class ModalScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      // headerTitle: <Text>ShowScene</Text>,
      // headerStyle: {
      //   backgroundColor: '#01af63',
      // },
      // headerTintColor: '#fff',
      // headerTitleStyle: {
      //   fontWeight: 'bold',
      // },
    };
  };
  render() {
    return (
      <View style={styles.modalScreenPanel}>
        <View style={styles.modalBox}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>温馨提示</Text>
          </View>
          <View style={styles.modalContainer}>
            <View style={styles.modalContainerFloor}>
              <Text style={styles.modalDescription}>
                感谢您信任并使用淘票票！我们依据最新法律法规、监管政策要求及业务实际情况，更新了
                <Text style={styles.modalDescriptionBlue}>
                  《淘票票用户服务协议》、《淘票票隐私权政策》
                </Text>
                ,特此向您推送本提示。
              </Text>
            </View>
            <View style={styles.modalContainerFloor}>
              <Text style={styles.modalDescription}>
                请您务必仔细阅读并透彻理解相关条款内容，
                在确认充分理解并同意后使用淘票票相关产品或
                服务。点击同意即代表您已阅读并同意
                <Text style={styles.modalDescriptionBlue}>
                  《淘票票 用户服务协议》、《淘票票隐私权政策》
                </Text>
                ,如果您 不同意，将可能影响使用淘票票的产品和服务。
              </Text>
            </View>
            <View style={styles.modalContainerFloor}>
              <Text style={styles.modalDescription}>
                我们将按法律法规要求，采取相应安全保护措
                施，尽力保护您的个人信息安全可控。
              </Text>
            </View>
          </View>
          <View style={styles.modalFooter}>
            <TouchableOpacity
              style={[
                styles.modalTriggerBtn,
                styles.modalTriggerBtnMiddleLine,
              ]}>
              <Text
                style={styles.modalTriggerDisagree}
                onPress={() => this.props.navigation.goBack()}>
                不同意
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.modalTriggerBtn]}>
              <Text
                style={styles.modalTriggerAgree}
                onPress={() => this.props.navigation.goBack()}>
                同意
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalScreenPanel: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalBox: {
    marginHorizontal: 34,
    backgroundColor: '#ffffff',
    borderRadius: 12,
  },
  modalHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f7f7f7',
  },
  modalTitle: {
    fontSize: 20,
    color: '#333333',
    paddingVertical: 20,
  },
  modalContainer: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  modalContainerFloor: {
    marginBottom: 25,
  },
  modalDescription: {
    color: '#666666',
    fontSize: 14,
  },
  modalDescriptionBlue: {
    color: '#309aec',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  modalFooter: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#f7f7f7',
    borderRadius: 12,
  },
  modalTriggerBtn: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTriggerBtnMiddleLine: {
    borderRightWidth: 1,
    borderRightColor: '#f7f7f7',
  },
  modalTriggerDisagree: {
    color: '#999999',
    fontSize: 16,
  },
  modalTriggerAgree: {
    color: '#309aec',
    fontSize: 16,
  },
});
