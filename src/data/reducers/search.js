import { combineReducers } from 'redux';

import {
  SET_SEARCH_VALUE
} from '../constants';


const searchValue = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_VALUE: return action.searchValue;
    default: return state;
  }
}

export default combineReducers({
  searchValue
});
