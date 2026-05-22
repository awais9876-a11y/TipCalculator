import "./styles.css";
import Header from "./Header.jsx";
import BillInput from "./BillInput.jsx";
import TipSelector from "./TipSelector.jsx";
import PeopleInput from "./PeopleInput.jsx";

function FormPanel({
  bill,
  billError,
  onBillChange,
  onBillBlur,
  tipMode,
  customTip,
  tipError,
  onTipPresetClick,
  onCustomTipChange,
  onCustomTipBlur,
  people,
  peopleError,
  onPeopleChange,
  onPeopleBlur,
}) {
  return (
    <div className="panel panel-left">
      <Header />
      <BillInput
        value={bill}
        error={billError}
        onChange={onBillChange}
        onBlur={onBillBlur}
      />
      <TipSelector
        tipMode={tipMode}
        customTip={customTip}
        error={tipError}
        onPresetClick={onTipPresetClick}
        onCustomChange={onCustomTipChange}
        onCustomBlur={onCustomTipBlur}
      />
      <PeopleInput
        value={people}
        error={peopleError}
        onChange={onPeopleChange}
        onBlur={onPeopleBlur}
      />
    </div>
  );
}

export default FormPanel;
