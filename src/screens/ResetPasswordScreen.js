import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { Container, Content, View, Form, Item } from 'native-base';
import { connector } from '../common/Connector';
import { BasicStyle } from '../styles/BasicStyle';
import PhoneNumber from '../components/PhoneNumber';
import Authcode from '../components/Authcode';
import Password from '../components/Password';
import FetchAuthcodeForResetPassword from '../components/FetchAuthcodeForResetPassword';
import ResetPassword from '../components/ResetPassword';

export default connector(
  class ResetPasswordScreen extends Component {
    static navigationOptions = {
      title: '重置密码',
      headerBackTitle: null
    };

    render() {
      return (
        <Container>
          <Content>
            <ImageBackground
              source={require('../images/BackgroundImage.jpg')}
              style={BasicStyle.backgroundImage}>
              <View style={BasicStyle.screenView}>
                <View>
                  <PhoneNumber/>
                  <View style={BasicStyle.direction}>
                    <View style={BasicStyle.layout}>
                      <Authcode/>
                    </View>
                    <FetchAuthcodeForResetPassword/>
                  </View>
                  <Password/>
                </View>
                <ResetPassword/>
              </View>
            </ImageBackground>
          </Content>
        </Container>
      )
    }
  }
)
