import { combineReducers } from 'redux'
import { firebaseStateReducer as firebase } from 'react-redux-firebase'

import menus from './menu-reducer'
import order from './order-reducer'
import participants from './participants-reducer'
import activeTab from './activeTab-reducer'

export default combineReducers({
  menus: menus,
  order: order,
  participants: participants,
  activeTab: activeTab,
})
