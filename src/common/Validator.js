import { Alert } from 'react-native';
import { CONSTANT } from '../constants/Constant';

export class Validator {
  static validatePhoneNumberFormat(phoneNumber) {
    if (!(/^1[0-9]{10}$/).test(phoneNumber)) {
      Alert.alert(CONSTANT.ALERT_TITLE, '请输入11位手机号');
      return false;
    }
    return true;
  }

  static validateAuthcodeFormat(authcode) {
    if (!(/^[0-9]{4}$/).test(authcode)) {
      Alert.alert(CONSTANT.ALERT_TITLE, '请输入4位验证码');
      return false;
    }
    return true;
  }

  static validatePasswordFormat(password) {
    if (!(/^[0-9a-zA-Z]{6,16}$/).test(password)) {
      Alert.alert(CONSTANT.ALERT_TITLE, '请输入6-16位密码');
      return false;
    }
    return true;
  }
}
