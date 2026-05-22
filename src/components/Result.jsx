import "./styles.css";

function Result({ label, sub, value, large }) {
  return (
    <div className={`result-row ${large ? "result-row--large" : ""}`}>
      <div className="result-label-wrap">
        <span className="result-label">{label}</span>
        <span className="result-sub">{sub}</span>
      </div>
      <span className={`result-value ${large ? "result-value--large" : ""}`}>
        {value}
      </span>
    </div>
  );
}

export default Result;
