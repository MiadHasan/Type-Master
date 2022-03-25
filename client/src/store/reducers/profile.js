import * as actionTypes from '../actions/actionTypes';

const initialState = {
  states: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_STATES:
      return {...state, states: action.payload}
    default: 
      return state;
  }
}

export default reducer;