// action types
export const ADD_EXPENSE = "ADD_EXPENSE";
export const TOGGLE_SELECTION = "TOGGLE_SELECTION";
export const DELETE_EXPENSE = "DELETE_EXPENSE";

// action creators
export function addExpense(expense) {
  return {
    type: ADD_EXPENSE,
    payload: {
      date: expense.date,
      item: expense.item,
      amount: expense.amount,
      categoryId: expense.categoryId,
      notes: expense.notes,
    },
  };
}

export function toggleSelection(id) {
  return {
    type: TOGGLE_SELECTION,
    payload: id,
  };
}

export function deleteExpense(id) {
  return {
    type: DELETE_EXPENSE,
    payload: id,
  };
}
