import * as actionTypes from './actionTypes';
import * as api from '../../api/index';

export const getStates = (email) => async (dispatch) => {
  try {
    const {data} = await api.getStates({email});

    dispatch({type: actionTypes.GET_STATES, payload: data});
  } catch (error) {
    console.log(error);
  }
};