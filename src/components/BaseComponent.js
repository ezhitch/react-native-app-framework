import React, { Component } from 'react';
import { connector } from '../common/Connector';
import { addNavigationHelpers } from 'react-navigation';
import { AppStackNavigator } from '../routers/AppStackNavigator';

export default connector(
  class BaseComponent extends Component {
    render() {
      const { dispatch } = this.props;
      const { nav } = this.props.state;
      return (
        <AppStackNavigator navigation={addNavigationHelpers({
          state: nav,
          dispatch
        })}/>
      )
    }
  }
)
