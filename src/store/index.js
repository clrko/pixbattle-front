import { combineReducers } from 'redux'
import userReducer from './userReducer'
import registrationUserReducer from './registrationUserReducer'

export default combineReducers({
  userReducer,
  registrationUserReducer
})
