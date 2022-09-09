import {
  LOGOUT, SET_AUTH,
} from '../types/types';
import { setStorage, getStorage, removeStorage } from './AsyncStorageFunc';

export const login = (data) => ({ type: SET_AUTH, payload: data });
export const logout = () => ({ type: LOGOUT });

export const SET_SESSION_THUNK = (data) => (dispatch) => {
  const cookie = { email: data.email, name: data.name };
  setStorage(cookie);
  dispatch(login(cookie));
};

export const GET_SESSION_THUNK = () => (dispatch) => {
  const cookie = getStorage();
  dispatch(login(cookie));
}

export const LOGOUT_SESSION_THUNK = () => (dispatch) => {
  const cookie = removeStorage();
  dispatch(cookie);
}

