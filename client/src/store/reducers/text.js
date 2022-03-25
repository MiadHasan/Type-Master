import * as actionTypes from '../actions/actionTypes';

const initialState = {
  text: '',
  value: '',
  incorrect: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH:
      return {...state, text: action.payload, incorrect: 0};
    case actionTypes.UPDATE_INPUT: 
      return {...state, value: action.payload};
    case actionTypes.INCREMENT_MISTAKE:
      return {...state, incorrect: state.incorrect + 1}
    default: 
      return state;
  }
}

export default reducer;