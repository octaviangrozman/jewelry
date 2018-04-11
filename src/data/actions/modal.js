import { SET_CURRENT_MODAL, HIDE_MODAL } from '../constants';

export const setCurrentModal = (modal) => {
  return {
    type: SET_CURRENT_MODAL,
    modal
  };
}

export const hideModal = () => {
  return {
    type: HIDE_MODAL
  }
}
