import { LOGIN, LOGOUT } from './action-types'

const userReducer = (state = null, action) => {
  switch (action.type) {
    case LOGIN: {
      const { userId, avatar, username, victories, nbPhotos, nbGroups, nbBattle } = action
      return { userId, avatar, username, victories, nbPhotos, nbGroups, nbBattle }
    }
    case LOGOUT:
      return null
    default:
      return state
  }
}

export default userReducer
