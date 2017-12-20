import React, { Component } from 'react';
import { View, Thumbnail, Text } from 'native-base';
import { BasicStyle } from '../styles/BasicStyle';

export class AppLogo extends Component {
  render() {
    return (
      <View style={BasicStyle.center}>
        <Thumbnail
          source={require('../images/icons/AppLogo.jpg')}
          style={BasicStyle.appLogo}/>
        <Text style={BasicStyle.appName}>APP名称</Text>
      </View>
    )
  }
}
