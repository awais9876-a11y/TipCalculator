import Error from "./Error.jsx";
import "./styles.css";

function BillInput({ value, error, onChange, onBlur }) {
  return (
    <div className="field-group">
      <label className="field-label" htmlFor="bill">
        Bill Amount
      </label>
      <div className={`input-wrap ${error ? "input-error" : ""}`}>
        <span className="input-prefix">$</span>
        <input
          id="bill"
          className="text-input"
          type="number"
          inputMode="decimal"
          placeholder="0.00"
          min="0.01"
          step="0.01"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          aria-describedby={error ? "bill-err" : undefined}
          aria-invalid={!!error}
        />
      </div>
      <Error id="bill-err" message={error} />
    </div>
  );
}

export default BillInput;
