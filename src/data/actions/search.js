import {
  SET_SEARCH_VALUE
} from '../constants';

export const setSearchValue = searchValue => ({
  type: SET_SEARCH_VALUE,
  searchValue
});
