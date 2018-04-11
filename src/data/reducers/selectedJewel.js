import { SELECT_JEWEL } from '../constants';

const selectedJewel = (state = -1, action) => {
  switch (action.type) {
    case SELECT_JEWEL: return action.id;
    default: return state;
  }
}

export default selectedJewel;
