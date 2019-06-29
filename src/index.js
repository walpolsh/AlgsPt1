import React from "react";
import ReactDOM from "react-dom";
import { merge } from "./Chapter1/Merge";
import { AsymptoticNotation } from "./Chapter2/AsymptoticNotation";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div>{AsymptoticNotation()}</div>
      <h1>{merge}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
