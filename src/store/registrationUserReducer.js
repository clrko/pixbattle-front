import { REGISTERED, UNREGISTERED } from './action-types'

const registrationUserReducer = (state = null, action) => {
  switch (action.type) {
    case REGISTERED: {
      const { userId, username, email, password } = action
      return { userId, username, email, password }
    }
    case UNREGISTERED:
      return null
    default:
      return state
  }
}

export default registrationUserReducer
