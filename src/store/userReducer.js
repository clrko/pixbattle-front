import jwtDecode from 'jwt-decode'
import { LOGIN, LOGOUT } from './action-types'

const token = localStorage.getItem('token')
const userData = token ? jwtDecode(token) : null
const userReducer = (state = userData, action) => {
  switch (action.type) {
    case LOGIN: {
      const { userId, avatar, username, userEmail } = action
      return { userId, avatar, username, userEmail }
    }
    case LOGOUT:
      return null
    default:
      return state
  }
}

export default userReducer
