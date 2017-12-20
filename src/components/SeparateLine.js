import React, { Component } from 'react';
import { Item } from 'native-base';
import { BasicStyle } from "../styles/BasicStyle";

export class SeparateLine extends Component {
  render() {
    return (
      <Item style={BasicStyle.line}/>
    )
  }
}
