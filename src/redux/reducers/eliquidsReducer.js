import { createReducer } from "@reduxjs/toolkit";
import eliquidsActions from "../actions/eliquidsAction";



const initialState = {
  eliquids: [],
  category: [],
};

const eliquidsReducer = createReducer(initialState, (builder) => {
  builder.addCase(eliquidsActions.getEliquids.fulfilled, (state, action) => {
    return {
      ...state,
      eliquids: action.payload.eliquids,
    };
  });
  builder.addCase(eliquidsActions.getCategories.fulfilled, (state, action) => {
    return {
      ...state,
      category: action.payload.category,
    };
  });
  builder.addCase(eliquidsActions.deleteEliquids.fulfilled, (state, action) => {
    return {
      ...state,
      eliquids: state.eliquids.filter(e => e._id != action.payload.eliquids._id),
    };
  });
  builder.addCase(eliquidsActions.updateEliquids.fulfilled, (state, action) => {
    return {
      ...state,
      eliquids: state.eliquids.map(e => {
        if (e._id === action.payload.eliquids._id) {
          return action.payload.eliquids
        }
        else{
          return e
        }
      }),
    };
  });
});



export default eliquidsReducer;