import { combineReducers } from "redux";
import alert from "./alert_reducer";
import auth from "./auth_reducer";
import { banner_reducer } from "./banner_reducer";



export default combineReducers({
  alert,
  auth,
  banner: banner_reducer,
});
