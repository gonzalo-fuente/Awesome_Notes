import { combineReducers } from "redux";
import { notesReducer } from "../reducers/notesReducer";

const rootReducer = combineReducers({
  notesReducer,
});

export default rootReducer;
