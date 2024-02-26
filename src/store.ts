import { createStore } from 'redux'

const initialState = {
  posts: []
}

const rootReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case 'SET_STATE':
      return { ...state, posts: action.payload }
    default:
      return state
  }
}

const store = createStore(rootReducer)

export default store
