import { SET_CURRENT_MODAL, HIDE_MODAL } from '../constants';

const modal = (state = null, action) => {
  switch (action.type) {
    case SET_CURRENT_MODAL: return action.modal;
    case HIDE_MODAL: return null;
    default: return state;
  }
}

export default modal;
