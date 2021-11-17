import "./FilteredExpense.css";

function FilteredExpense(props) {
  const years = ["All", "2019", "2020", "2021", "2022"];

  function yearSelected(event) {
    props.userSelectedYear(event.target.value);
  }

  return (
    <div className="filtered-expense">
      <h3>Filtered by year</h3>
      <select value={props.value} name="year" onChange={yearSelected}>
        {years.map((year, ind) => (
          <option key={ind}>{year}</option>
        ))}
      </select>
    </div>
  );
}

export default FilteredExpense;
