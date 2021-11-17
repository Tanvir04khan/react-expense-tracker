import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div className="expense-content">
      <ExpenseDate date={props.date} />

      <h2 className="expense-title">{props.title}</h2>
      <div className="expense-amount">${props.amount}</div>
    </div>
  );
};

export default ExpenseItem;
