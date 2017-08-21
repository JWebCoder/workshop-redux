import {NAVIGATION_OPEN, NAVIGATION_CLOSE, NAVIGATION_TOGGLE} from './ActionTypes';

const initialState = {
  isOpen: false,
  page: 'Home'
};

const navigation = (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATION_OPEN: {
      return {
        ...state,
        isOpen: true
      };
    }
    case NAVIGATION_CLOSE: {
      return {
        ...state,
        isOpen: false
      };
    }
    case NAVIGATION_TOGGLE: {
      return {
        ...state,
        isOpen: !state.isOpen
      };
    }
    default:
      return state;
  }
};

export default navigation;
