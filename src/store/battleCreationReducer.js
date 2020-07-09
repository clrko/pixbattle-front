import { ADD_GROUP, ADD_THEME, ADD_RULES, ADD_DEADLINE, REMOVE_ALL } from './action-types'

const battleCreationReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_GROUP: {
      const { currentGroupId } = action
      return [...state, currentGroupId]
    }
    case ADD_THEME: {
      const { selectedTheme } = action
      return [...state, selectedTheme]
    }
    case ADD_RULES: {
      const { rules } = action
      return [...state, rules]
    }
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
