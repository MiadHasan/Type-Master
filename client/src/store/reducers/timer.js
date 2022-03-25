import * as actionTypes from '../actions/actionTypes';

const initialState = {
  reset: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET:
      return {...state, reset: action.payload}
    default: 
      return state;
  }
}

export default reducer;