import React, { useState } from "react";

import "./NewExpenseInput.css";

function NewExpenseInput(props) {
  const [titleVal, setTitleVal] = useState("");
  const [amaountVal, setAmountVal] = useState(0);
  const [dateVal, setDateVal] = useState("");

  function titleInputHandler(event) {
    setTitleVal(event.target.value);
  }

  function amountInputHandler(event) {
    setAmountVal(+event.target.value);
  }

  function dateInputHandler(event) {
    setDateVal(event.target.value);
  }

  const inputData = {
    id: Math.random(),
    title: titleVal,
    amount: +amaountVal,
    date: new Date(dateVal),
  };

  function dataSubmission(event) {
    event.preventDefault();
    props.userInputData(inputData);
    setTitleVal("");
    setAmountVal("");
    setDateVal("");
  }

  return (
    <div style={{ display: props.display }}>
      <form className="new-expense__form" onSubmit={dataSubmission}>
        <div className="new-expense__input">
          <label>Title</label>
          <input type="text" value={titleVal} onChange={titleInputHandler} />
        </div>
        <div className="new-expense__input">
          <label>Amount</label>
          <input
            type="number"
            value={amaountVal}
            onChange={amountInputHandler}
          />
        </div>
        <div className="new-expense__input">
          <label>Date</label>
          <input
            type="date"
            max="2022-12-31"
            min="2019-01-01"
            value={dateVal}
            onChange={dateInputHandler}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewExpenseInput;
