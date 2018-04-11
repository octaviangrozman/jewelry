import { combineReducers } from 'redux';

import jewels from './jewels';
import user from './user';
import modal from './modal';
import selectedJewel from './selectedJewel';
import search from './search';
import auth from './auth';

export default combineReducers({
  auth,
  jewels,
  selectedJewel,
  user,
  search,
  currentModal: modal
});
