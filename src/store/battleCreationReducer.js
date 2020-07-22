import { ADD_GROUP, ADD_THEME, ADD_RULES, ADD_DEADLINE, REMOVE_ALL } from './action-types'

const initialState = {
  groupId: null,
  theme: null,
  rules: [],
  deadline: ''
}

const battleCreationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROUP: {
      const { groupId } = action
      return { ...state, groupId }
    }
    case ADD_THEME: {
      const { selectedTheme } = action
      return { ...state, theme: selectedTheme }
    }
    case ADD_RULES: {
      const { rules } = action
      return { ...state, rules }
    }
    case ADD_DEADLINE: {
      const { selectedDeadline } = action
      return { ...state, deadline: selectedDeadline }
    }
    case REMOVE_ALL:
      return initialState
    default:
      return state
  }
}

export default battleCreationReducer
