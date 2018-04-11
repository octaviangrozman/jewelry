import { combineReducers } from 'redux';
import axios from 'axios';
import {
    AUTH_USER,
    DEAUTH_USER,
    SIGNIN_USER_PENDING,
    SIGNIN_USER_FULFILLED,
    SIGNIN_USER_REJECTED,
    SIGNUP_USER_PENDING,
    SIGNUP_USER_FULFILLED,
    SIGNUP_USER_REJECTED,
    CLEAR_ERROR
} from '../types/auth';
import { isPendingReducer, errorReducer } from '../utils/reducerHelpers';

const authenticated = (state = false, action) => {
    switch (action.type) {
        case AUTH_USER: {
            // we suppose that there is a token in localStorage
            const token = localStorage.getItem('token');
            
            // set axios 'authorization' header for further API calls
            axios.defaults.headers.common['authorization'] = token;  

            return true;
        }
        case SIGNIN_USER_FULFILLED:
        case SIGNUP_USER_FULFILLED: {
            const token = action.payload.data.token;

            // save token in localStorage
            localStorage.setItem('token', token);
            
            // set axios 'authorization' header for further API calls
            axios.defaults.headers.common['authorization'] = token;  

            // update state
            return true;
        }
        case DEAUTH_USER: {
            // remove token from localStorage
            localStorage.removeItem('token');            
            
            return false;
        }
        default: return state;
    }
}


export default combineReducers({
    authenticated,
    isSigningIn: isPendingReducer([
        SIGNIN_USER_PENDING,
        SIGNIN_USER_FULFILLED,
        SIGNIN_USER_REJECTED
    ]),
    isSigningUp: isPendingReducer([
        SIGNUP_USER_PENDING,
        SIGNUP_USER_FULFILLED,
        SIGNUP_USER_REJECTED
    ]),
    error: errorReducer([SIGNIN_USER_REJECTED, SIGNUP_USER_REJECTED], CLEAR_ERROR)
});