import * as api from '../../api/index';
import * as actionTypes from './actionTypes';

export const fetchText = () => async (dispatch) => {
  try {
    dispatch({type: actionTypes.FETCH, payload: ''})
    const {data} = await api.getText();

    dispatch({type: actionTypes.FETCH, payload: data})
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
