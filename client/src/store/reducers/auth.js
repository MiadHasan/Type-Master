import * as actionTypes from '../actions/actionTypes';

const initialState = {
  userName: '',
  isAuthinticated: false,
  email: '',
  error: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_USER:
      return {...state, userName: action.payload.userName, isAuthinticated: true, email: action.payload.email, error: null}
    case actionTypes.LOGIN:
      return {...state, userName: action.payload.userName, isAuthinticated: true, email: action.payload.email, error: null}
    case actionTypes.LOGOUT:
      return {...state, userName: '', email: '', isAuthinticated: false};
    case actionTypes.ERROR:
      return {...state, error: action.payload}
    case actionTypes.UPDATE_STATES:
      return state;
    default:
      return state;
  }
};

export default reducer;