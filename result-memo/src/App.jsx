import React from "react";
import "./index.css";
// import IndividualResult from "./components/ResultMemo/IndividualResultMemo";
// import ConsolidatedResult from "./components/ResultMemo/ConsolidatedResultMemo";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  return (
    <div className="App">
      {/* <IndividualResult />
      <ConsolidatedResult /> */}
      <DashboardPage />
    </div>
  );
};

export default App;
