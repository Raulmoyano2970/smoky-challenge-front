import { createReducer } from "@reduxjs/toolkit";
import vapersActions from "../actions/vapersAction";



const initialState = {
  vapers: [],
  category: [],
};

const vapersReducer = createReducer(initialState, (builder) => {
  builder.addCase(vapersActions.getVapers.fulfilled, (state, action) => {
    return {
      ...state,
      vapers: action.payload.vapers,
    };
  });
  builder.addCase(vapersActions.getCategories.fulfilled, (state, action) => {
    return {
      ...state,
      category: action.payload.category,
    };
  });
  builder.addCase(vapersActions.deleteVapers.fulfilled, (state, action) => {
    console.log(action.payload)
    return {
      ...state,
      vapers: state.vapers.filter(e => e._id != action.payload.vapers._id),
    };
  });
  builder.addCase(vapersActions.updateVapers.fulfilled, (state, action) => {
    console.log(action.payload)
    return {
      ...state,
      vapers: state.vapers.map(e => {
        if (e._id === action.payload.vapers._id) {
          return action.payload.vapers
        }
        else{
          return e
        }
      }),
    };
  });

});



export default vapersReducer;