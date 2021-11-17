import ExpenseItem from "./ExpenseItem";
import FilteredExpense from "../New Expense/FilteredExpense";
import Chart from "../Chart/chart";

import "./Expenses.css";

const Expenses = ({ data, getSelectedYear }) => {
  function userSelectedYear(newYear) {
    getSelectedYear(newYear);
  }

  if (!data.length) {
    return (
      <div className="main-content">
        <FilteredExpense value="2022" userSelectedYear={userSelectedYear} />
        <p className="no-expenses">No expenses in this year.</p>
      </div>
    );
  } else {
    return (
      <div>
        <Chart data={data} />
        <div className="main-content">
          <FilteredExpense userSelectedYear={userSelectedYear} />
          {data.map((item) => (
            <ExpenseItem {...item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
};

export default Expenses;
