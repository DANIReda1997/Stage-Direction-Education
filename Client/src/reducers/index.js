import { combineReducers } from "redux";
import userReducer from "./userReducer";
import adminReducer from "./adminReducer";
import strickReducer from "./strickReducer";
export default combineReducers({
  user: userReducer,
  admin: adminReducer,
  strick: strickReducer
});
