import React, { Component } from 'react';
import { Provider } from 'react-redux'
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Dimensions } from 'react-native'
import { StackNavigator } from 'react-navigation'

import store from './src/store'
import Restaurants from './src/containers/Restaurants'
import Friends from './src/containers/Friends'
import Menus from './src/containers/Menus'
import Transactions from './src/containers/Transactions'
import Profile from './src/containers/Profile'
import Notifications from './src/containers/Notifications'
import Order from './src/containers/Order'
import Checkout from './src/containers/Checkout'

const deviceW = Dimensions.get('window').width
const basePx = 375
function px2dp(px) {
  return px *  deviceW / basePx
}

const Navigator = StackNavigator({
  Restaurants : { screen: Restaurants },
  Menus       : { screen: Menus},
  Order       : { screen: Order},
  Checkout    : { screen: Checkout}
});

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      selectedTab: 'restaurants'
    }
  }
  render() {
    return (
      <Provider store={store}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'restaurants'}
            title="Restaurants"
            renderIcon={() => <Icon name="home" size={px2dp(22)} color="#666" />}
            renderSelectedIcon={() => <Icon name="home" size={px2dp(22)} color="#3496f0" />}
            onPress={() => this.setState({ selectedTab: 'restaurants' })}>
            <Navigator />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'friends'}
            title="Friends"
            renderIcon={() => <Icon name="users" size={px2dp(22)} color="#666"/>}
            renderSelectedIcon={() => <Icon name="users" size={px2dp(22)} color="#3496f0"/>}
            onPress={() => this.setState({ selectedTab: 'friends' })}>
            <Friends />
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
            selected={this.state.selectedTab === 'notifications'}
            title="Notifications"
            renderIcon={() => <Icon name="bell" size={px2dp(22)} color="#666" />}
            renderSelectedIcon={() => <Icon name="bell" size={px2dp(22)} color="#3496f0" />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'notifications' })}>
            <Notifications />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="Profile"
            renderIcon={() => <Icon name="user" size={px2dp(22)} color="#666" />}
            renderSelectedIcon={() => <Icon name="user" size={px2dp(22)} color="#3496f0" />}
            onPress={() => this.setState({ selectedTab: 'profile' })}>
            <Profile />
          </TabNavigator.Item>
        </TabNavigator>
      </Provider>
    );
  }
}
