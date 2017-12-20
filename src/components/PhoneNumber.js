import React, { Component } from 'react';
import { Item, Icon, Input } from 'native-base';
import { connector } from '../common/Connector';
import { CONSTANT } from '../constants/Constant';
import { phoneNumberAction } from '../actions/PhoneNumberAction';

export default connector(
  class PhoneNumber extends Component {
    render() {
      const { dispatch } = this.props;
      return (
        <Item>
          <Icon active name={'call'}/>
          <Input
            placeholder={'手机号'}
            placeholderTextColor={CONSTANT.PLACEHOLDER_COLOR}
            keyboardType={'numeric'}
            maxLength={11}
            returnKeyType={'next'}
            autoFocus={true}
            onChangeText={(phoneNumber) => {
              dispatch(phoneNumberAction(phoneNumber));
            }}
          />
        </Item>
      )
    }
  }
)
