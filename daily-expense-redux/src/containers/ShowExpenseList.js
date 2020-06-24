import { connect } from "react-redux";
import Table from "../expenses/ExpenseList";

const mapStateToProps = (state) => ({
  expenseList: state.expenseList,
  categories: state.categories,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
