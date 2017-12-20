import React, { Component } from 'react';
import { Icon, View, Text } from 'native-base';
import { connector } from '../common/Connector';
import { CONSTANT } from '../constants/Constant';
import { BasicStyle } from '../styles/BasicStyle';

export default connector(
  class StoryScreen extends Component {
    static navigationOptions = {
      tabBarLabel: '故事',
      tabBarIcon: ({tintColor}) => (
        <Icon
          name='ios-at'
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
          <Text>StoryScreen</Text>
        </View>
      );
    }
  }
)
