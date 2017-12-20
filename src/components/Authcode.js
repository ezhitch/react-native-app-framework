import React, { Component } from 'react';
import { Item, Icon, Input } from 'native-base';
import { connector } from '../common/Connector';
import { CONSTANT } from '../constants/Constant';
import { authcodeAction } from '../actions/AuthcodeAction';

export default connector(
  class Authcode extends Component {
    render() {
      const { dispatch } = this.props;
      return (
        <Item>
          <Icon active name={'text'}/>
          <Input
            placeholder={'验证码'}
            placeholderTextColor={CONSTANT.PLACEHOLDER_COLOR}
            keyboardType={'numeric'}
            maxLength={4}
            returnKeyType={'next'}
            onChangeText={(authcode) => {
              dispatch(authcodeAction(authcode));
            }}
          />
        </Item>
      )
    }
  }
)
