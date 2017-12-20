import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/Store';
import BaseComponent from './src/components/BaseComponent';

export class App extends Component {
  render() {
    return (
      <Provider store={store()}>
        <BaseComponent/>
      </Provider>
    )
  }
}
