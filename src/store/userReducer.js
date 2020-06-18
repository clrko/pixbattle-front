import { LOGIN, LOGOUT } from './action-types'

const userReducer = (state = null, action) => {
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
