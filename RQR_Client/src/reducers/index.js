import { combineReducers } from 'redux'

import menus from './menu-reducer'
import order from './order-reducer'
import participants from './participants-reducer'

export default combineReducers({
  menus: menus,
  order: order,
  participants: participants
})
