import React, { Component } from 'react';
import { Button, Text } from 'native-base';
import { connector } from '../common/Connector';
import { Validator } from '../common/Validator';
import { BasicStyle } from "../styles/BasicStyle";
import { logoutAction } from '../actions/LogoutAction';

export default connector(
  class Logout extends Component {
    render() {
      const { dispatch } = this.props;
      const { phoneNumber, token } = this.props.state.user;
      return (
        <Button
          block
          style={BasicStyle.blockButton}
          onPress={() => {
            if (Validator.validatePhoneNumberFormat(phoneNumber)) {
              dispatch(logoutAction({
                phone_number: phoneNumber
              }, token));
            }
          }}
        >
          <Text>注销</Text>
        </Button>
      )
    }
  }
)
