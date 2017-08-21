import {combineReducers} from 'redux';

export default function createReducer(asyncReducers) {
  if (asyncReducers) {
    return combineReducers({
      ...asyncReducers
    });
  }
  return
}
