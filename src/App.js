import React, { useState } from "react";

import Expenses from "./components/Expenses";
import NewExpenses from "./New Expense/NewExpenses";

const expenses = [
  {
    id: 1,
    title: "A Story Book",
    amount: 40,
    date: new Date(2020, 0, 28),
  },
  {
    id: 2,
    title: "Car Insurace",
    amount: 290,
    date: new Date(2021, 9, 28),
  },
  {
    id: 3,
    title: "New TV",
    amount: 799,
    date: new Date(2021, 2, 28),
  },
  {
    id: 4,
    title: "New Desk (Wooden)",
    amount: 400,
    date: new Date(2019, 2, 28),
  },
];

function App() {
  const [newExpenses, setNewExpenses] = useState(expenses);
  const [filteredExpense, setFilteredExpenses] = useState(newExpenses);

  function NewInputData(newData) {
    setNewExpenses((prevExpenses) => {
      return [newData, ...prevExpenses];
    });
    setFilteredExpenses((prevData) => {
      return [newData, ...prevData];
    });
  }

  function getSelectedYear(newYear) {
    if (newYear === "All") {
      setFilteredExpenses(newExpenses);
    } else {
      setFilteredExpenses(
        newExpenses.filter(({ date }) => date.getFullYear() === +newYear)
      );
    }
  }

  return (
    <div className="App">
      <NewExpenses newInputData={NewInputData} />
      <Expenses data={filteredExpense} getSelectedYear={getSelectedYear} />
    </div>
  );
}

export default App;
