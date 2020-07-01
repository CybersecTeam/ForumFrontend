import { combineReducers } from "redux";
import forum from "./forumReducer";
import system from "./systemReducer";

const reducer = combineReducers({
  forum,
  system,
});
export default reducer;
