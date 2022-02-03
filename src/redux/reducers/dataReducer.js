import * as actionTypes from '../actions/actionTypes';
import data from '../data.json';



const initialState = {
  isLoaded: null,
  data: data,
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
