import jwtDecode from 'jwt-decode'
import { LOGIN, LOGOUT } from './action-types'

const token = localStorage.getItem('token')
const userData = token ? jwtDecode(token) : null
const userReducer = (state = userData, action) => {
  switch (action.type) {
    case LOGIN: {
      const { userId, avatar, username } = action
      return { userId, avatar, username }
    }
    case LOGOUT:
      return null
    default:
      return state
  }
}

export default userReducer
