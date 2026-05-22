import Result from "./Result.jsx";
import "./styles.css";

function ResultBox({ results, onReset }) {
  const { totalTip, grandTotal, perPerson } = results;
  const fmt = (n) =>
    n === null
      ? "$0.00"
      : n.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
  return (
    <div className="panel panel-right">
      <div className="results-stack">
        <Result label="Total Tip" sub="overall" value={fmt(totalTip)} />
        <Result label="Grand Total" sub="bill + tip" value={fmt(grandTotal)} />
        <div className="divider" />
        <Result
          label="Per Person"
          sub="what you owe"
          value={fmt(perPerson)}
          large
        />
      </div>
      <button
        type="button"
        className="reset-btn"
        onClick={onReset}
        aria-label="Reset the calculator"
      >
        Reset App
      </button>
    </div>
  );
}

export default ResultBox;
