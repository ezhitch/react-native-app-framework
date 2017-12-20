import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { connector } from '../common/Connector';
import Logout from '../components/Logout';

export default connector(
  class SettingsScreen extends Component {
    static navigationOptions = {
      title: '设置',
      headerBackTitle: null
    };

    render() {
      return (
        <Container>
          <Content>
            <Logout/>
          </Content>
        </Container>
      );
    }
  }
)
