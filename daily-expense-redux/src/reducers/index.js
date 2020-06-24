import { combineReducers } from "redux";
import expenseList from "./expenseList";
import categories from "./categories";

export default combineReducers({
  expenseList,
  categories,
});
