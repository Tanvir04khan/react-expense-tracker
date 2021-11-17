import "./ProgressBar.css";

function ProgressBar(props) {
  let height = "0";

  if (props.maxValue > 0) {
    height = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="outest">
      <div className="outer">
        <div className="out">
          <div
            className="inner"
            style={{
              height,
              backgroundColor: "violet",
            }}
          ></div>
        </div>
        <div className="month">{props.month}</div>
      </div>
    </div>
  );
}

export default ProgressBar;
