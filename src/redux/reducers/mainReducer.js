import { combineReducers } from "@reduxjs/toolkit";
import vapersReducer from "./vapersReducer";
import eliquidsReducer from "./eliquidsReducer";
import userReducer from "./userReducer";
import shopReducer from "./shopReducer";

const mainReducer = combineReducers({
    vapersReducer,
    eliquidsReducer,
    userReducer,
    shopReducer,
})

export default mainReducer