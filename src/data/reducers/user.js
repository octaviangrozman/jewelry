import {
  LOGIN_PENDING,
  LOGIN_REJECTED,
  LOGIN_FULFILLED
} from '../constants';

const initialState = {
  data: {},
  error: null,
  fetching: false,
  fetched: false,
  isAuthenticated: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING: return { ...state, fetching: true };

    case LOGIN_FULFILLED:
      return {
        ...state,
        data: action.payload.data,
        error: null,
        fetched: true,
        fetching: false,
        isAuthenticated: Object.keys(action.payload.data).length > 0 ? true : false
      };

    case LOGIN_REJECTED: return { ...state, error: action.payload.response.data, fetching: false };

    default: return state;
  }
}

export default user;
