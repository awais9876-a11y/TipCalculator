import "./styles.css";
import { useState, useMemo, useCallback } from "react";

function useTipCalculator() {
  const [bill, setBill] = useState("");
  const [tipMode, setTipMode] = useState("15");
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState("1");

  const [billTouched, setBillTouched] = useState(false);
  const [tipTouched, setTipTouched] = useState(false);
  const [peopleTouched, setPeopleTouched] = useState(false);

  const PRESET_TIPS = ["10", "15", "20"];
  const MAX_TIP_PCT = 100;

  const billVal = useMemo(() => {
    const v = parseFloat(bill);
    return isNaN(v) ? null : v;
  }, [bill]);

  const tipPct = useMemo(() => {
    if (tipMode === "custom") {
      const v = parseFloat(customTip);
      return isNaN(v) ? null : v;
    }
    return parseFloat(tipMode);
  }, [tipMode, customTip]);

  const peopleVal = useMemo(() => {
    const v = parseInt(people, 10);
    return isNaN(v) ? null : v;
  }, [people]);

  const billError = useMemo(() => {
    if (!billTouched) return null;
    if (bill.trim() === "") return "Bill amount is required.";
    if (billVal === null || billVal <= 0)
      return "Bill must be a positive number.";
    return null;
  }, [bill, billVal, billTouched]);

  const tipError = useMemo(() => {
    if (!tipTouched || tipMode !== "custom") return null;
    if (customTip.trim() === "") return "Enter a tip percentage.";
    if (tipPct === null || tipPct < 0) return "Tip % must be 0 or greater.";
    if (tipPct > MAX_TIP_PCT) return `Tip % cannot exceed ${MAX_TIP_PCT}%.`;
    return null;
  }, [customTip, tipMode, tipPct, tipTouched]);

  const peopleError = useMemo(() => {
    if (!peopleTouched) return null;
    if (people.trim() === "") return "Number of people is required.";
    if (
      peopleVal === null ||
      peopleVal < 1 ||
      !Number.isInteger(Number(people))
    )
      return "Must be a whole number ≥ 1.";
    return null;
  }, [people, peopleVal, peopleTouched]);

  const isValid =
    !billError &&
    !tipError &&
    !peopleError &&
    billVal !== null &&
    billVal > 0 &&
    tipPct !== null &&
    tipPct >= 0 &&
    tipPct <= MAX_TIP_PCT &&
    peopleVal !== null &&
    peopleVal >= 1;

  const results = useMemo(() => {
    if (!isValid) return { totalTip: null, grandTotal: null, perPerson: null };
    const totalTip = (billVal * tipPct) / 100;
    const grandTotal = billVal + totalTip;
    const perPerson = Math.ceil((grandTotal / peopleVal) * 100) / 100;
    return { totalTip, grandTotal, perPerson };
  }, [isValid, billVal, tipPct, peopleVal]);

  const handleBillChange = useCallback((val) => {
    setBill(val);
    setBillTouched(true);
  }, []);

  const handleBillBlur = useCallback(() => setBillTouched(true), []);

  const handleTipPreset = useCallback((val) => {
    setTipMode(val);
    setCustomTip("");
    setTipTouched(false);
  }, []);

  const handleCustomTipChange = useCallback((val) => {
    setCustomTip(val);
    setTipTouched(true);
  }, []);

  const handleCustomTipBlur = useCallback(() => setTipTouched(true), []);

  const handlePeopleChange = useCallback((val) => {
    setPeople(val);
    setPeopleTouched(true);
  }, []);

  const handlePeopleBlur = useCallback(() => setPeopleTouched(true), []);

  const handleReset = useCallback(() => {
    setBill("");
    setTipMode("15");
    setCustomTip("");
    setPeople("1");
    setBillTouched(false);
    setTipTouched(false);
    setPeopleTouched(false);
  }, []);

  return {
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
  };
}

export default useTipCalculator;
