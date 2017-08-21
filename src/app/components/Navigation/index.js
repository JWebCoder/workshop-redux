import React from 'react';
import Drawer from 'app/components/Drawer';
import TopBar from 'app/components/TopBar';
import {Route} from 'react-router';
import {injectAsyncReducer} from 'app/store/configureStore';
import NavigationReducer from 'app/reducers/navigation';
import * as NavigationActions from 'app/reducers/navigation/actions';

const navigationReducer = {
  reducer: NavigationReducer,
  name: 'navigation',
  actions: NavigationActions
}

const Navigation = props => (
  <div className="main-navigation">
    <TopBar storeInjector={injectAsyncReducer} reducerObj={navigationReducer} showMobileBurger/>
    <Drawer storeInjector={injectAsyncReducer} reducerObj={navigationReducer}/>
  </div>
);

export default Navigation;
