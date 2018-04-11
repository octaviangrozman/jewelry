import axios from 'axios';

import { FETCH_JEWELS, FETCH_JEWEL, CREATE_JEWEL, REMOVE_JEWEL, EDIT_JEWEL, SELECT_JEWEL } from '../constants';

export function fetchJewels() {
  return {
    type: FETCH_JEWELS,
    payload: axios.get('http://localhost:8080/api/jewels')
  }
}

export function fetchJewel(id) {
  return {
    type: FETCH_JEWEL,
    payload: axios.get(`http://localhost:8080/api/jewels/${id}`)
  }
}

export function removeJewel(id) {
  return {
    type: REMOVE_JEWEL,
    payload: axios.delete(`http://localhost:8080/api/jewels/${id}`, { id })
  }
}

export function createJewel(jewel) {
  return {
    type: CREATE_JEWEL,
    payload: axios.post('http://localhost:8080/api/jewels', {...jewel})
  }
}

export function editJewel(jewel) {
  return {
    type: EDIT_JEWEL,
    payload: axios.put(`http://localhost:8080/api/jewels/${jewel.id}/edit`, { ...jewel })
  }
}

export function selectJewel(id) {
  return {
    type: SELECT_JEWEL,
    id
  }
}
