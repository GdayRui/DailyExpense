import React from "react";
import Form from "../src/expenses/Form";
import DeleteExpense from "../src/expenses/DeleteExpense";
import ShowExpenseList from "./containers/ShowExpenseList";

import "./App.css";

const App = () => (
  <div className="App">
    <Form />
    <ShowExpenseList />
    <DeleteExpense />
  </div>
);

export default App;
