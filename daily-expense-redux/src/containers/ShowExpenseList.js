import { connect } from "react-redux";
import Table from "../expenses/ExpenseTable";

// pass the state to Table component from store.
const mapStateToProps = (state) => ({
  expenseList: state.expenseList,
  categories: state.categories,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
