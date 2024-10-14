import React from "react";
import "./index.css";
import IndividualResult from "./IndividualResultMemo";
import ConsolidatedResult from "./ConsolidatedResultMemo";

const App = () => {
  return (
    <div className="App">
      <IndividualResult />
      <ConsolidatedResult />
    </div>
  );
};

export default App;
