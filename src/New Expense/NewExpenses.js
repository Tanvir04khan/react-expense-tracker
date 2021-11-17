import React, { useState } from "react";
import NewExpenseInput from "./NewExpenseInput";

import "./NewExpenses.css";

function NewExpenses(props) {
  const [display, setDisplay] = useState("none");

  function NewExpenseBtnHandler() {
    display === "none" ? setDisplay("block") : setDisplay("none");
  }

  function inputDataLiftup(newExpense) {
    props.newInputData(newExpense);
  }

  return (
    <div className="new-expenses">
      <div>
        <NewExpenseInput display={display} userInputData={inputDataLiftup} />
      </div>
      <div>
        <button onClick={NewExpenseBtnHandler}>Add new expense</button>
      </div>
    </div>
  );
}

export default NewExpenses;
