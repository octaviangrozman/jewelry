import axios from 'axios';
import { 
    AUTH_USER, 
    DEAUTH_USER, 
    SIGNIN_USER,
    SIGNUP_USER,
    CLEAR_ERROR
} from '../types/auth';

export function signinUser(email, password) {
    return {
        type: SIGNIN_USER,
        payload: axios.post('api/signin', { email, password })
    }
};

export function signupUser(email, password) {
    return {
        type: SIGNUP_USER,
        payload: axios.post('api/signup', { email, password })
    }
};

export function signoutUser() {
    return {
        type: DEAUTH_USER
    }
};

export function clearError() {
    return {
        type: CLEAR_ERROR
    }
};