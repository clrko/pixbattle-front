import { ADD_GROUP, ADD_THEME, ADD_RULES, ADD_DEADLINE, REMOVE_ALL } from './action-types'

const battleCreationReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_GROUP: {
      return [...state, action.currentGroupId]
    }
    case ADD_THEME: {
      return [...state, action.selectedTheme]
    }
    case ADD_RULES:
      return [...state, action.rules]
    case ADD_DEADLINE: {
      const { selectedDeadline } = action
      return [...state, selectedDeadline]
    }
    case REMOVE_ALL:
      return []
    default:
      return state
  }
}

export default battleCreationReducer
