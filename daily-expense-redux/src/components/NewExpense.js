import React from "react";

const NewRow = ({ onClick, isSelected, expense, category }) => (
  <tr onClick={onClick} style={{ backgroundColor: isSelected ? "blue" : "" }}>
    <td>{expense.date}</td>
    <td>{expense.item}</td>
    <td>{expense.amount}</td>
    <td>{category.name}</td>
    <td>{expense.notes}</td>
  </tr>
);

export default NewRow;
