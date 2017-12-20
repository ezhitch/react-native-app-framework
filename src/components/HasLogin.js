import React, { Component } from "react";
import { connector } from '../common/Connector';
import { Container, Content, Button, Text, Thumbnail, View, Card, Left, Body } from 'native-base';
import { BasicStyle } from '../styles/BasicStyle';
import Nav from './Nav';

export default connector(
  class HasLogin extends Component {
    render() {
      const { phoneNumber } = this.props.state.user;
      return (
        <Container>
          <Content>
            <View style={BasicStyle.iconLayout}>
              <Nav properties={{
                routeName: 'SettingsScreen',
                icon: 'settings'
              }}/>
            </View>

            <View style={BasicStyle.center}>
              <Card>
                <Left>
                  <Thumbnail
                    style={BasicStyle.userLogo}
                    source={require('../images/icons/UserLogo.jpg')}
                  />
                </Left>
                <Body>
                  <Text>{phoneNumber}</Text>
                  <Button transparent iconRight>
                    <Text note>普通用户</Text>
                  </Button>
                </Body>
              </Card>
            </View>
          </Content>
        </Container>
      );
    }
  }
)
