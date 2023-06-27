import React from "react";
import "./App.css";
import LineGraph from "./components/LineGraph";
import BarChart from "./components/BarChart";

function App() {
  return (
    <React.Fragment>
      <LineGraph />
      <BarChart />
    </React.Fragment>
  );
}
export default App;
