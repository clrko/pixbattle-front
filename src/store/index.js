import { combineReducers } from 'redux'
import user from './userReducer'
import battleCreation from './battleCreationReducer'

export default combineReducers({
  user,
  battleCreation
})
