import { SEND } from './action-types'

const postPictureReducer = (state = [], action) => {
  switch (action.type) {
    case SEND: {
      return
    }
    default:
      return state
  }
}

export default postPictureReducer
