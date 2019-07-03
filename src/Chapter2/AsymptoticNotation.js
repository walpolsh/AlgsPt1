import React from "react";
function search(arr, val) {
  return arr.includes(val) ? true : false;
}
function searchTwo(arr1, arr2, val) {
  return arr1.includes(val) ? true : arr2.includes(val) ? true : false;
}

function duplicates(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[i] === arr2[j + 1]) {
        return `true, there is a duplicate: ${arr1[i]} === ${arr2[j + 1]}`;
      }
    }
  }
  return false;
}

function opts(a) {
  return [a.a, a.b, a.c];
}
let arr = [12, 3, 5, 22, 4];
let arr2 = [15, 26, 37, 3, 48, 9];

export function AsymptoticNotation() {
  return (
    <div>
      <div>{search(arr, 2).toString()}</div>
      <div>{search(arr, 3).toString()}</div>
      <div>{searchTwo(arr, arr2, 48).toString()}</div>
      <div>{duplicates(arr, arr2)}</div>
      <div>{opts({ a: 15, b: 16, c: 17 }).join(" ")}</div>
      <div>{}</div>
      <div>{}</div>
    </div>
  );
}
