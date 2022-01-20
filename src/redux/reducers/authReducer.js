import * as actionTypes from '../actions/actionTypes';

const initialState = {
  authenticated: false,
  aabb: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case actionTypes.SET_UNAUTHENTICATED:
      return initialState;

    default:
      return state;
  }
};
