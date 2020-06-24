import React from "react";
import { data } from "../data";
import NewRow from "./NewExpense";

//const { expenseList, categories } = data;

const Table = ({ expenseList, categories }) => {
  debugger;
  return (
    <table>
      <tr>
        <th>Date</th>
        <th>Item</th>
        <th>Amount</th>
        <th>Category</th>
        <th>Notes</th>
      </tr>
      {expenseList.map((exp) => (
        <tr>
          <td>{exp.date}</td>
          <td>{exp.item}</td>
          <td>{exp.amount}</td>
          <td>{categories.filter((c) => c.id === exp.categoryId)[0].name}</td>
          <td>{exp.notes}</td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
