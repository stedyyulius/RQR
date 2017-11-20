import React, { Component } from 'react';
import { Provider } from 'react-redux'
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Dimensions } from 'react-native'

import store from './src/store'
import Home from './src/containers/Home'
import Menus from './src/containers/Menus'
import Transactions from './src/containers/Transactions'

const deviceW = Dimensions.get('window').width
const basePx = 375
function px2dp(px) {
  return px *  deviceW / basePx
}

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      selectedTab: 'home'
    }
  }
  render() {
    return (
      <Provider store={store}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Home"
            renderIcon={() => <Icon name="home" size={px2dp(22)} color="#666" />}
            renderSelectedIcon={() => <Icon name="home" size={px2dp(22)} color="#3496f0" />}
            // badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <Home />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'menus'}
            title="Menus"
            renderIcon={() => <Icon name="cutlery" size={px2dp(22)} color="#666" />}
            renderSelectedIcon={() => <Icon name="cutlery" size={px2dp(22)} color="#3496f0" />}
            onPress={() => this.setState({ selectedTab: 'menus' })}>
            <Menus />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'transaction'}
            title="Transaction History"
            renderIcon={() => <Icon name="history" size={px2dp(22)} color="#666"/>}
            renderSelectedIcon={() => <Icon name="history" size={px2dp(22)} color="#3496f0"/>}
            onPress={() => this.setState({ selectedTab: 'transaction' })}>
            <Transactions />
          </TabNavigator.Item>
        </TabNavigator>
      </Provider>
    );
  }
}
