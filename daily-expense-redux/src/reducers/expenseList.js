import { ADD_EXPENSE, TOGGLE_SELECTION, DELETE_EXPENSE } from "../actions";
import { data } from "../data";

const { expenseDataList } = data;

const expenseList = (state = expenseDataList, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_EXPENSE:
      return [...state, { id: 0, ...payload, isSelected: false }];
    case TOGGLE_SELECTION:
      return state.map((expense) =>
        expense.id === payload
          ? { ...expense, isSelected: !expense.isSelected }
          : expense
      );
    case DELETE_EXPENSE:
      return state.filter((expense) => expense.id === !payload);
    default:
      return state;
  }
};

export default expenseList;

// export const isLoading = (state = false, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case ADD_EXPENSE:
//       return true;
//     case COMPLETED:
//       return false;
//     default:
//       return state;
//   }
// };

// export const rootReducer = (state = initialState, action) => {
//   return {
//     expenseList: recordList(state.expenseList, action),
//     isLoading: isLoading(state.isLoading, action),
//   };
// };
