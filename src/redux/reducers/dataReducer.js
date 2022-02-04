import * as actionTypes from '../actions/actionTypes';
import data from '../data.json';
import tourThemes from '../tourThemes.json';

const initialState = {
  isLoaded: null,
  data: data,
  tourThemes: tourThemes,
  //startPrice: data.price,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DEFAULT_DATA:
      return {
        ...state,
      };

    default:
      return state;
  }
};
