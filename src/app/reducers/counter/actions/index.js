import * as types from '../ActionTypes'

export function addToCounter() {
  return {type: types.COUNTER_ADD}
}

export function removeFromCounter() {
  return {type: types.COUNTER_REMOVE}
}
