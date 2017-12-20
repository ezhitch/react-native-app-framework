import React, { Component } from 'react';
import { Container, Content, View } from 'native-base';
import { connector } from '../common/Connector';
import { BasicStyle } from "../styles/BasicStyle";
import { AppLogo } from './AppLogo';
import PhoneNumber from './PhoneNumber';
import Password from './Password';
import Login from './Login';
import Nav from './Nav';

export default connector(
  class NotLogin extends Component {
    render() {
      return (
        <Container>
          <Content>
            <AppLogo/>
            <View>
              <PhoneNumber/>
              <Password/>
            </View>
            <View style={BasicStyle.buttonJustify}>
              <Nav properties={{
                routeName: 'ResetPasswordScreen',
                name: '重置密码'
              }}/>
              <Nav properties={{
                routeName: 'RegisterScreen',
                name: '注册'
              }}/>
            </View>
            <Login/>
          </Content>
        </Container>
      );
    }
  }
)
