import { GET_INFOS, NO_INFOS } from './action-types'

const profileInfosReducer = (state = null, action) => {
  switch (action.type) {
    case GET_INFOS: {
      const { infos, nbPhotos, nbGroups, nbBattles } = action
      return { infos, nbPhotos, nbGroups, nbBattles }
    }
    case NO_INFOS:
      return null
    default:
      return state
  }
}

export default profileInfosReducer
