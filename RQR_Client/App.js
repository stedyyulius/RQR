import React, { Component } from 'react';
import { Provider } from 'react-redux'

import store from './src/store'

import Tabs from './src'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={}
  }
  render() {
    return (
      <Provider store={store}>
        <Tabs />
      </Provider>
    );
  }
}
