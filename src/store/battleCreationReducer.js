import { ADD_GROUP, ADD_GROUP_ID, ADD_THEME, ADD_RULES, ADD_DEADLINE, REMOVE_THEME, REMOVE_RULES, REMOVE_DEADLINE, REMOVE_ALL } from './action-types'

const initialState = {
  groupId: undefined,
  groupName: '',
  emails: [],
  theme: null,
  rules: [],
  deadline: ''
}

const battleCreationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROUP: {
      const { emails, groupName } = action
      return { ...state, emails, groupName }
    }
    case ADD_GROUP_ID: {
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
    case REMOVE_THEME: {
      return { ...state, theme: null }
    }
    case REMOVE_RULES: {
      return { ...state, rules: [] }
    }
    case REMOVE_DEADLINE: {
      return { ...state, deadline: '' }
    }
    case REMOVE_ALL:
      return initialState
    default:
      return state
  }
}

export default battleCreationReducer
