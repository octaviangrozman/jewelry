// localhost:8080/api/user
import axios from 'axios';

export function login(username, password) {
  return {
    type: "LOGIN",
    payload: axios.post('http://localhost:8080/api/user', { username, password })
  }
}

export function authenticate(username, password) {
  return {
    type: "AUTHENTICATE",
    payload: axios.post('/authenticate', { username, password })
  }
}

