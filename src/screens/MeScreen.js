import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { Icon } from 'native-base';
import { connector } from '../common/Connector';
import { BasicStyle } from '../styles/BasicStyle';
import { CONSTANT } from '../constants/Constant';
import NotLogin from '../components/NotLogin';
import HasLogin from '../components/HasLogin';

export default connector(
  class MeScreen extends Component {
    static navigationOptions = {
      tabBarLabel: '我',
      tabBarIcon: ({tintColor}) => (
        <Icon
          name='ios-person'
          active
          fontSize={CONSTANT.ICON_SIZE}
          style={{color: tintColor}}
        />
      ),
      header: null
    };

    render() {
      const { isLogined } = this.props.state.user;
      return (
        <ImageBackground source={require('../images/BackgroundImage.jpg')} style={BasicStyle.backgroundImage}>
          {isLogined ? <HasLogin/> : <NotLogin/>}
        </ImageBackground>
      );
    }
  }
)
