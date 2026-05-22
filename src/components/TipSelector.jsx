import "./styles.css";
import Error from "./Error.jsx";
function TipSelector({
  tipMode,
  customTip,
  error,
  onPresetClick,
  onCustomChange,
  onCustomBlur,
}) {
  const PRESET_TIPS = ["10", "15", "20"];
  const MAX_TIP_PCT = 100;
  return (
    <div className="field-group">
      <label className="field-label">Tip Percentage</label>

      <div className="tip-presets">
        {PRESET_TIPS.map((t) => (
          <button
            key={t}
            type="button"
            className={`preset-btn ${tipMode === t ? "preset-active" : ""}`}
            onClick={() => onPresetClick(t)}
            aria-pressed={tipMode === t}
          >
            {t}%
          </button>
        ))}
        <button
          type="button"
          className={`preset-btn ${tipMode === "custom" ? "preset-active" : ""}`}
          onClick={() => onPresetClick("custom")}
          aria-pressed={tipMode === "custom"}
        >
          Custom
        </button>
      </div>

      {tipMode === "custom" && (
        <div
          className={`input-wrap tip-custom-wrap ${error ? "input-error" : ""}`}
          style={{ marginTop: "10px" }}
        >
          <input
            id="customTip"
            className="text-input"
            type="number"
            inputMode="decimal"
            placeholder="e.g. 18"
            min="0"
            max={MAX_TIP_PCT}
            step="0.1"
            value={customTip}
            autoFocus
            onChange={(e) => onCustomChange(e.target.value)}
            onBlur={onCustomBlur}
            aria-label="Custom tip percentage"
            aria-describedby={error ? "tip-err" : undefined}
            aria-invalid={!!error}
          />
          <span className="input-suffix">%</span>
        </div>
      )}

      <Error id="tip-err" message={error} />
    </div>
  );
}
export default TipSelector;
