import React from "react";
import AddExpense from "./containers/AddExpense";
import DeleteExpense from "./components/DeleteExpense";
import ExpenseList from "./containers/ExpenseList";
import "./App.css";

const App = () => (
  <div className="App">
    <AddExpense />
    <ExpenseList />
    <DeleteExpense />
  </div>
);

export default App;
