import React, { Component } from 'react';
import { Button, Text } from 'native-base';
import { connector } from '../common/Connector';
import { Validator } from '../common/Validator';
import { BasicStyle } from "../styles/BasicStyle";
import { loginAction } from '../actions/LoginAction';

export default connector(
  class Login extends Component {
    render() {
      const { dispatch } = this.props;
      const { phoneNumber, password } = this.props.state.user;
      return (
        <Button
          block
          style={BasicStyle.blockButton}
          onPress={() => {
            if (Validator.validatePhoneNumberFormat(phoneNumber) &&
              Validator.validatePasswordFormat(password)) {
              dispatch(loginAction({
                phone_number: phoneNumber,
                password: password
              }));
            }
          }}
        >
          <Text>登录</Text>
        </Button>
      )
    }
  }
)
