import {
  FETCH_JEWELS_PENDING,
  FETCH_JEWELS_REJECTED,
  FETCH_JEWELS_FULFILLED,

  FETCH_JEWEL_PENDING,
  FETCH_JEWEL_REJECTED,
  FETCH_JEWEL_FULFILLED,

  REMOVE_JEWEL_PENDING,
  REMOVE_JEWEL_FULFILLED,
  REMOVE_JEWEL_REJECTED,

  CREATE_JEWEL_PENDING,
  CREATE_JEWEL_FULFILLED,
  CREATE_JEWEL_REJECTED,

  EDIT_JEWEL_PENDING,
  EDIT_JEWEL_FULFILLED,
  EDIT_JEWEL_REJECTED
} from '../constants';

const initialState = {
  data: [],
  jewel: {},
  error: null,
  fetching: false,
  fetched: false,

  removing: false,
  removed: false,

  editing: false,
  edited: false,

  creating: false,
  created: false
};

const filterData = (data, id) => {
  return data.filter(item => item._id !== id);
}

const editJewelById = (data, jewel) => {
  return data.map(item => {
    if (item._id === jewel._id) {
      return {...item, ...jewel};
    } else return item;
  });
}

export default function jewels(state = initialState, action) {
  switch (action.type) {
    case FETCH_JEWELS_PENDING: return {...state, fetching: true};
    case FETCH_JEWELS_REJECTED: return {...state, error: action.payload, fetching: false};
    case FETCH_JEWELS_FULFILLED: return {...state, data: action.payload.data, fetched: true, fetching: false};

    case FETCH_JEWEL_PENDING: return {...state, fetching: true};
    case FETCH_JEWEL_REJECTED: return {...state, error: action.payload, fetching: false};
    case FETCH_JEWEL_FULFILLED: return {...state, jewel: action.payload.data, fetched: true, fetching: false};

    case REMOVE_JEWEL_PENDING: return {...state, removing: true};
    case REMOVE_JEWEL_FULFILLED: return {
      ...state,
      removed: true,
      removing: false,
      data: filterData(state.data, action.payload.config.id)
    };
    case REMOVE_JEWEL_REJECTED: return {...state, error: action.payload, removing: false};

    case EDIT_JEWEL_PENDING: return {...state, editing: true};
    case EDIT_JEWEL_FULFILLED: return {
      ...state,
      edited: true,
      data: editJewelById(state.data, action.payload.data)
    };
    case EDIT_JEWEL_REJECTED: return {...state, error: action.payload, editing: false};

    case CREATE_JEWEL_PENDING: return {...state, creating: true};
    case CREATE_JEWEL_FULFILLED: return {
      ...state,
      created: true,
      data: state.data.concat(action.payload.data.jewel)
    };
    case CREATE_JEWEL_REJECTED: return {...state, error: action.payload, creating: false};
    default: return state;
  }
}
