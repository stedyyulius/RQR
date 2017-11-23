import { combineReducers } from 'redux'

import menus from './menu-reducer'
import order from './order-reducer'

export default combineReducers({
  menus: menus,
  order: order
})
