import * as actionTypes from './actionTypes';

export const resetTimer = (isReset) => {
  return {
    type: actionTypes.RESET,
    payload: isReset
  };
};