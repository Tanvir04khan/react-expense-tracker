import ProgressBar from "./ProgressBar";

import "./Chart.css";

function Chart(props) {
  const datas = props.data.map(({ amount, date }) => {
    return {
      amount,
      date,
    };
  });

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ].map((month) => {
    return { month, value: 0 };
  });

  for (const data of datas) {
    const index = data.date.getMonth();
    months[index].value += data.amount;
  }

  const valuesArray = months.map((month) => month.value);
  const maxValue = Math.max(...valuesArray);

  return (
    <div className="bars">
      {months.map((month, ind) => (
        <ProgressBar
          value={month.value}
          maxValue={maxValue}
          month={month.month}
          key={ind}
        />
      ))}
    </div>
  );
}

export default Chart;
