import React, { Component } from 'react';
import { Button, Text, Icon } from 'native-base';
import { connector } from '../common/Connector';
import { BasicStyle } from "../styles/BasicStyle";
import { navAction } from '../actions/NavAction';

export default connector(
  class Nav extends Component {
    render() {
      const { dispatch } = this.props;
      const { routeName, name, icon } = this.props.properties;
      return (
        <Button
          transparent
          onPress={() => {
            dispatch(navAction(routeName));
          }}
        >
          {name ? <Text style={BasicStyle.fontSize}>{name}</Text> : <Icon name={icon}/>}
        </Button>
      )
    }
  }
)
