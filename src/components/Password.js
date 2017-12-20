import React, { Component } from 'react';
import { Item, Icon, Input } from 'native-base';
import { connector } from '../common/Connector';
import { CONSTANT } from '../constants/Constant';
import { passwordAction } from '../actions/PasswordAction';

export default connector(
  class Password extends Component {
    render() {
      const { dispatch } = this.props;
      return (
        <Item>
          <Icon active name={'lock'}/>
          <Input
            placeholder={'密码'}
            placeholderTextColor={CONSTANT.PLACEHOLDER_COLOR}
            keyboardType={'default'}
            maxLength={16}
            returnKeyType={'next'}
            onChangeText={(password) => {
              dispatch(passwordAction(password));
            }}
          />
        </Item>
      )
    }
  }
)
