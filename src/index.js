import React from "react";
import ReactDOM from "react-dom";
import { merge } from "./Chapter1/Merge";
import { AsymptoticNotation } from "./Chapter2/AsymptoticNotation";
import { DivideAndConquer } from "./Chapter3/index";
import "./styles.css";
let hare = 5;
let tortoise = 11;
function thing() {
  for (let j; j < 20; j++) {
    if (hare < tortoise) hare *= 2;
    else if (hare === tortoise) break;
    else tortoise += 1;
  }
  // console.log(hare, tortoise, hare + tortoise);
  return hare + tortoise;
}
function log(x) {
  console.log(x);
  return x;
}
function fibonacci(n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}
console.log(fibonacci(9));
thing();
function App() {
  return (
    <div className="App">
      <div>{AsymptoticNotation()}</div>
      <div>{DivideAndConquer()}</div>
      <h1>{merge}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
