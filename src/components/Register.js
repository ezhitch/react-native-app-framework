import React, { Component } from 'react';
import { Button, Text } from 'native-base';
import { connector } from '../common/Connector';
import { Validator } from '../common/Validator';
import { BasicStyle } from "../styles/BasicStyle";
import { registerAction } from '../actions/RegisterAction';

export default connector(
  class Register extends Component {
    render() {
      const { dispatch } = this.props;
      const { phoneNumber, authcode, password } = this.props.state.user;
      return (
        <Button
          block
          style={BasicStyle.blockButton}
          onPress={() => {
            if (Validator.validatePhoneNumberFormat(phoneNumber) &&
              Validator.validateAuthcodeFormat(authcode) &&
              Validator.validatePasswordFormat(password)) {
              dispatch(registerAction({
                phone_number: phoneNumber,
                authcode: authcode,
                password: password
              }));
            }
          }}
        >
          <Text>注册</Text>
        </Button>
      )
    }
  }
)
