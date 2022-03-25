import * as actionTypes from './actionTypes';
import * as api from '../../api/index';
import { resetTimer } from './timer';
import { fetchText, updateInput } from './text';

export const createUser = (user) => async (dispatch) => {
  try {
    const {data} = await api.createUser(user);
    localStorage.setItem('userName', data.userName);
    localStorage.setItem('email', data.email);
    dispatch(resetTimer(true));
    dispatch(fetchText());
    dispatch(updateInput(''));
    dispatch({type: actionTypes.CREATE_USER, payload: data})
    console.log(data);
  } catch (error) {
    dispatch({type: actionTypes.ERROR, payload: 'Cannot signin!'});
  }
};

export const loginUser = (user) => async (dispatch) => {
  try {
    console.log('login');
    const {data} = await api.login(user);
    localStorage.setItem('userName', data.userName);
    localStorage.setItem('email', data.email);
    dispatch(resetTimer(true));
    dispatch(fetchText());
    dispatch(updateInput(''));
    dispatch({type: actionTypes.LOGIN, payload: data});
  } catch (error) {
    dispatch({type: actionTypes.ERROR, payload: 'Invalid email or password!'})
  }
};

export const logoutUser = () => (dispatch) =>  {
  localStorage.removeItem('email');
  localStorage.removeItem('userName');
  dispatch(resetTimer(true));
  dispatch(fetchText());
  dispatch(updateInput(''));
  dispatch({type: actionTypes.LOGOUT});
};

export const checkAuthState = () => (dispatch) => {
  const email = localStorage.getItem('email');
  if (!email) {
    dispatch(logoutUser());
  }
  else {
    const data = {
      userName: localStorage.getItem('userName'),
      email: localStorage.getItem('email'),
    };
    dispatch({type: actionTypes.LOGIN, payload: data});
  }
};

export const updateStates = (states) => async (dispatch) => {
  try {
    const {data} = await api.updateStates(states);

    dispatch({type: actionTypes.UPDATE_STATES});
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}