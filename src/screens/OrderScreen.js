import React, { Component } from 'react';
import { Icon, View, Text } from 'native-base';
import { connector } from '../common/Connector';
import { CONSTANT } from '../constants/Constant';
import { BasicStyle } from '../styles/BasicStyle';

export default connector(
  class OrderScreen extends Component {
    static navigationOptions = {
      tabBarLabel: '订单',
      tabBarIcon: ({tintColor}) => (
        <Icon
          name='ios-list-box'
          active
          fontSize={CONSTANT.ICON_SIZE}
          style={{color: tintColor}}
        />
      ),
      header: null
    };

    render() {
      return (
        <View style={BasicStyle.container}>
          <Text>OrderScreen</Text>
        </View>
      );
    }
  }
)
