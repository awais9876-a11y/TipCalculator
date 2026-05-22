import { useState } from "react";
import "./App.css";
import TipCalculator from "./components/TipCalculator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <TipCalculator />
      </div>
    </>
  );
}

export default App;
