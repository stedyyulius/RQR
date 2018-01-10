import React, { Component } from 'react'
import { connect } from 'react-redux'
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Dimensions } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Restaurants from './containers/Restaurants'
import Friends from './containers/Friends'
import Menus from './containers/Menus'
import Transactions from './containers/Transactions'
import Profile from './containers/Profile'
import Notifications from './containers/Notifications'
import Order from './containers/Order'
import Checkout from './containers/Checkout'
import Assign from './containers/Assign'

import Login from './containers/Login'
import Signup from './containers/Signup'

const deviceW = Dimensions.get('window').width
const basePx = 375
function px2dp(px) {
  return px *  deviceW / basePx
}

const Auth = StackNavigator({
  Login : { screen: Login },
  Signup: { screen: Signup }
})

const screens = {
  Restaurants : { screen: Restaurants },
  Menus       : { screen: Menus },
  Order       : { screen: Order },
  Checkout    : { screen: Checkout },
  Assign      : { screen: Assign },
  Profile     : { screen: Profile }
}

const Navigator = StackNavigator(screens);

let menuScreens = {
  Menus       : { screen: Menus },
  Restaurants : { screen: Restaurants },
  Order       : { screen: Order },
  Checkout    : { screen: Checkout },
  Assign      : { screen: Assign },
  Profile     : { screen: Profile }
}
const MenuNavigator = StackNavigator(menuScreens)

class Tabs extends Component{
  constructor(props){
    super(props)
    this.state={
      selectedTab: 'restaurants'
    }
  }

  render(){
    return(
      (this.props.login)
      ? <TabNavigator
            tabBarStyle={{ height: this.props.activeTab, overflow: 'hidden' }}
            sceneStyle={{ paddingBottom: 0 }}
            hideTabTouch={true}
          >
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
              <MenuNavigator />
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'notifications'}
              title="Notifications"
              renderIcon={() => <Icon name="bell" size={px2dp(22)} color="#666" />}
              renderSelectedIcon={() => <Icon name="bell" size={px2dp(22)} color="#3496f0" />}
              // badgeText="1"
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
      :   <Auth />

    )
  }
}

const mapStateToProps = (state) =>{
  return{
    activeTab: state.activeTab,
    login: state.login
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Tabs)
