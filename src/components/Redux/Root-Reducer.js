import { combineReducers } from "redux";
import userReducers from "./Reducer";

const rootReducer = combineReducers({ users: userReducers });

export default rootReducer;
