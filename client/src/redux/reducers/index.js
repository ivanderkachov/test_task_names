import { combineReducers } from "redux";

import reducer from "./reducer";
import users from './users'

const createRootReducer = () => {
  return combineReducers({
    reducer,
    users
  });
};

export default createRootReducer;
