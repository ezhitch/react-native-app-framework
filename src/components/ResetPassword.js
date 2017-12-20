import React, { Component } from 'react';
import { Button, Text } from 'native-base';
import { connector } from '../common/Connector';
import { Validator } from '../common/Validator';
import { BasicStyle } from "../styles/BasicStyle";
import { resetPasswordAction } from '../actions/ResetPasswordAction';

export default connector(
  class ResetPassword extends Component {
    render() {
      const { dispatch } = this.props;
      const { phoneNumber, authcode, password, token } = this.props.state.user;
      return (
        <Button
          block
          style={BasicStyle.blockButton}
          onPress={() => {
            if (Validator.validatePhoneNumberFormat(phoneNumber) &&
              Validator.validateAuthcodeFormat(authcode) &&
              Validator.validatePasswordFormat(password)) {
              dispatch(resetPasswordAction({
                phone_number: phoneNumber,
                authcode: authcode,
                password: password
              }, token));
            }
          }}
        >
          <Text>重置密码</Text>
        </Button>
      )
    }
  }
)
