import Error from "./Error.jsx";
import "./styles.css";

function PeopleInput({ value, error, onChange, onBlur }) {
  return (
    <div className="field-group">
      <label className="field-label" htmlFor="people">
        Number of People
      </label>
      <div className={`input-wrap ${error ? "input-error" : ""}`}>
        <span className="input-prefix people-icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </span>
        <input
          id="people"
          className="text-input"
          type="number"
          inputMode="numeric"
          placeholder="1"
          min="1"
          step="1"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          aria-describedby={error ? "people-err" : undefined}
          aria-invalid={!!error}
        />
      </div>
      <Error id="people-err" message={error} />
    </div>
  );
}

export default PeopleInput;
