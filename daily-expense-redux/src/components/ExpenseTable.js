import React from "react";

const Table = ({ expenseList, categories }) => {
  debugger;
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Item</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {expenseList.map((exp) => (
          <tr key={exp.id}>
            <td>{exp.date}</td>
            <td>{exp.item}</td>
            <td>{exp.amount}</td>
            <td>{categories.filter((c) => c.id === exp.categoryId)[0].name}</td>
            <td>{exp.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
