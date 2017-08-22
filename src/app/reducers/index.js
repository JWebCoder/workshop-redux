import {combineReducers} from 'redux'
import navigation from './navigation'
import counter from './counter'

export default function createReducer() {
  return combineReducers({
    navigation,
    counter
  })
}
