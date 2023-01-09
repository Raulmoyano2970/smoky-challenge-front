import { createReducer } from "@reduxjs/toolkit";
import shopActions from "../actions/shopAction";



const initialState = {
  shop: [],
};

const shopReducer = createReducer(initialState, (builder) => {
  builder.addCase(shopActions.addShops.fulfilled, (state, action) => {
    return {
      ...state,
      shop: action.payload.shop,
    };
  });
  builder.addCase(shopActions.deleteShops.fulfilled, (state, action) => {
    return {
        ...state,
        shop: action.payload.shop,
      };
  });
  builder.addCase(shopActions.getShops.fulfilled, (state, action) => {
    return {
        ...state,
        shop: action.payload.shop,
      };
  });
 
 
});



export default shopReducer;