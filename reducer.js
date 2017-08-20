const defaultState = {
  comments: []
}

const appReducer = (state = defaultState, action) => {
  switch(action.type) {
    case "RECEIVE_COMMENT":
      return {
        ...state,
        comments: [
          ...state.comments,
          action.comment
        ]
      }
    default:
      return state
  }
}

export default appReducer
