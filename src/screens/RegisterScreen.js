import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { Container, Content, View } from 'native-base';
import { BasicStyle } from '../styles/BasicStyle';
import PhoneNumber from '../components/PhoneNumber';
import Authcode from '../components/Authcode';
import Password from '../components/Password';
import FetchAuthcode from '../components/FetchAuthcode';
import Register from '../components/Register';
import { connector } from '../common/Connector';

export default connector(
  class RegisterScreen extends Component {
    static navigationOptions = {
      title: '注册',
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
                    <FetchAuthcode/>
                  </View>
                  <Password/>
                </View>
                <Register/>
              </View>
            </ImageBackground>
          </Content>
        </Container>
      )
    }
  }
)
