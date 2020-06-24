import React from "react";
import Form from "./components/Form";
import DeleteExpense from "./components/DeleteExpense";
import ExpenseList from "./containers/ExpenseList";

import "./App.css";

const App = () => (
  <div className="App">
    <Form />
    <ExpenseList />
    <DeleteExpense />
  </div>
);

export default App;
