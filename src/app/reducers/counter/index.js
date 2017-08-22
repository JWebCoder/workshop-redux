import {COUNTER_ADD, COUNTER_REMOVE} from './ActionTypes'

const initialState = {
  counter: 1
}

const counter = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_ADD: {
      return {
        counter: state.counter + 1
      }
    }
    case COUNTER_REMOVE: {
      let result = state.counter - 1
      return {
        counter: result < 1 ? 1 : result
      }
    }
    default:
      return state
  }
}

export default counter;
