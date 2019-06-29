import React from "react";
function search(arr, val) {
  return arr.includes(val) ? true : false;
}
let arr = [12, 3, 5, 22, 4];

export function AsymptoticNotation() {
  return (
    <div>
      <div>{search(arr, 2).toString()}</div>
      <div>{search(arr, 3).toString()}</div>
      <div>{}</div>
      <div>{}</div>
      <div>{}</div>
      <div>{}</div>
    </div>
  );
}
