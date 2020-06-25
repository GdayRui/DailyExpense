import React from "react";
import { addExpense } from "../actions";
import { connect } from "react-redux";

// const { categories } = data;

const Form = ({ categories, dispatch }) => {
  debugger;
  let inputDate, inputItem, inputAmount, inputCategory, inputNotes;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // why use the below condition?
        // if (!inputDate.value.trim()) {
        //   return;
        // }
        let expense = {
          date: inputDate.value,
          item: inputItem.value,
          amount: inputAmount.value,
          categoryId: inputCategory.value
            ? categories.filter((c) => c.name === inputCategory.value)[0].id
            : categories[0].id,
          // categoryId: 1,
          notes: inputNotes.value,
        };
        dispatch(addExpense(expense));
        // seems not useful :
        // expense.date = "";
        // expense.item = "";
        // expense.amount = "";
        // expense.categoryId = 0;
        // expense.notes = "";
      }}
    >
      <input
        type="date"
        ref={(node) => {
          inputDate = node;
        }}
      ></input>
      <input
        type="text"
        placeholder="Item name"
        ref={(node) => {
          inputItem = node;
        }}
      ></input>
      <input
        type="text"
        placeholder="Amount"
        ref={(node) => {
          inputAmount = node;
        }}
      ></input>
      <select
        ref={(node) => {
          inputCategory = node;
        }}
      >
        {categories.map((c) => (
          <option key={c.id}>{c.name}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Some notes"
        ref={(node) => {
          inputNotes = node;
        }}
      ></input>
      <input type="submit" value="Submit"></input>
    </form>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

// const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps)(Form);
