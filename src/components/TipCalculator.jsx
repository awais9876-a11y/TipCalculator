import FormPanel from "./FormPanel";
import ResultBox from "./ResultBox";
import useTipCalculator from "./useTipCalculator";

import "./styles.css";
function TipCalculator() {
  const {
    bill,
    tipMode,
    customTip,
    people,
    billError,
    tipError,
    peopleError,
    results,
    handleBillChange,
    handleBillBlur,
    handleTipPreset,
    handleCustomTipChange,
    handleCustomTipBlur,
    handlePeopleChange,
    handlePeopleBlur,
    handleReset,
  } = useTipCalculator();

  return (
    <>
      <div className="app-wrapper">
        <div className="card">
          <FormPanel
            bill={bill}
            billError={billError}
            onBillChange={handleBillChange}
            onBillBlur={handleBillBlur}
            tipMode={tipMode}
            customTip={customTip}
            tipError={tipError}
            onTipPresetClick={handleTipPreset}
            onCustomTipChange={handleCustomTipChange}
            onCustomTipBlur={handleCustomTipBlur}
            people={people}
            peopleError={peopleError}
            onPeopleChange={handlePeopleChange}
            onPeopleBlur={handlePeopleBlur}
          />
          <ResultBox results={results} onReset={handleReset} />
        </div>
      </div>
    </>
  );
}

export default TipCalculator;
