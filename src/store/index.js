import { combineReducers } from 'redux'
import user from './userReducer'
import battleCreation from './battleCreationReducer'
import profileInfos from './profileInfosReducer'

export default combineReducers({
  user,
  battleCreation,
  profileInfos
})
