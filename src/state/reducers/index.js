import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

export default combineReducers({
  amount: amountReducer,
});
