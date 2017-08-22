import {createStore} from 'redux';
import createReducer from '../reducers/index';

export default function configureStore(initialState) {
  const store = createStore(createReducer(), initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = createReducer();
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
