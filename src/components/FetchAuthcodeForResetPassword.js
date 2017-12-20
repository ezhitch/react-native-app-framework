import React, { Component } from 'react';
import { Item, Button, Text } from 'native-base';
import { connector } from '../common/Connector';
import { Validator } from '../common/Validator';
import { BasicStyle } from "../styles/BasicStyle";
import { fetchAuthcodeForResetPasswordAction } from '../actions/FetchAuthcodeForResetPasswordAction';

export default connector(
  class FetchAuthcodeForResetPassword extends Component {
    render() {
      const { dispatch } = this.props;
      const { phoneNumber } = this.props.state.user;
      return (
        <Button
          style={BasicStyle.buttonBasicColor}
          onPress={() => {
            if (Validator.validatePhoneNumberFormat(phoneNumber)) {
              dispatch(fetchAuthcodeForResetPasswordAction(phoneNumber));
            }
          }}
        >
          <Text>获取验证码</Text>
        </Button>
      )
    }
  }
)
