import { UPLOADED, MODIFY, DELETE, SEND } from './action-types'

const postPictureReducer = (state = [], action) => {
  switch (action.type) {
    case UPLOADED: {
      return
    }
    case MODIFY: {
      return
    }
    case DELETE: {
      return
    }
    case SEND: {
      return
    }
    default:
      return state
  }
}

export default postPictureReducer
