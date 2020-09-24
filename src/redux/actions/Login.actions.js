import axios from 'axios';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function setLogin(){
    return {
        type: LOGIN,
    }
}

export function setLogout(){
    return {
        type : LOGOUT,
    }
}

export const loginAction = (values,e) =>{
    e.preventDefault();
    return axios
    .get
}