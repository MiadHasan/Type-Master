import axios from 'axios';

import * as actionTypes from './actionTypes';

export const fetchText = () => async (dispatch) => {
  try {
    dispatch({type: actionTypes.FETCH, payload: ''})
    const {data} = await axios.get('http://api.quotable.io/random?minLength=100')

    // dispatch({type: actionTypes.RESET, payload: false})
    dispatch({type: actionTypes.FETCH, payload: data.content})
  } catch (error) {
    console.log(error);
  }
};

export const updateInput = (value) => {
  return {
    type: actionTypes.UPDATE_INPUT,
    payload: value,
  };
};

export const incrementMistake = () => {
  return {
    type: actionTypes.INCREMENT_MISTAKE,
  };
};