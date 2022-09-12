import { AsyncStorage } from 'react-native';
import {
  LOGOUT, SET_AUTH,
} from '../types/types';
import { setStorage, getStorage, removeStorage } from './AsyncStorageFunc';

export const login = (data) => ({ type: SET_AUTH, payload: data });
export const logout = () => ({ type: LOGOUT });

export const SET_SESSION_THUNK = (data) => async (dispatch) => {
  const cookie = { email: data.email, name: data.name };
  await AsyncStorage.setItem('session', JSON.stringify(cookie));
  dispatch(login(cookie));
};

export const GET_SESSION_THUNK = () => async (dispatch) => {
  const cookie = await AsyncStorage.getItem('session');
  dispatch(login(cookie));
};

export const LOGOUT_SESSION_THUNK = () => async (dispatch) => {
  const cookie = await removeStorage();
  dispatch(logout());
};
