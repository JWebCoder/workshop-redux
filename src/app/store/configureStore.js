import {createStore} from 'redux';
import createReducer from '../reducers/index';

let store;

export default function configureStore(initialState) {
  store = createStore(() => {}, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  store.asyncReducers = {};
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = createReducer();
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}

export function injectAsyncReducer(name, asyncReducer) {
  if (!store.asyncReducers[name]) {
    store.asyncReducers[name] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  }
}
