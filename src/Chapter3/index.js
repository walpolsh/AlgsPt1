import React from "react";
import { VictoryChart, VictoryLine, VictoryClipContainer } from "victory";
const sampleData = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 7 }
];

function log(x, ...args) {
  console.log(x, ...args);
  return x;
}
let sample = {};

let obj = [];
function countingInversions(a, count = 0) {
  a.map((x, i) => {
    a.map((y, j) => {
      if (i < j && x > y) obj.push({ x: count, y: y });
    });
  });
  return count;
}

function countInv(arr) {
  let leftInv = arr.slice(0, arr.length / 2);
  let rightInv = arr.slice(arr.length / 2, arr.length);
  return arr.map(n => {
    if (n === 0 || n === 1) {
      return 0;
    } else {
      return rightInv + leftInv;
    }
  });
}
var items1 = [1, 2];
var items12 = [3, 4];

const matrix1 = [[2, 1], [1, 1]];
const matrix2 = [[5, 6], [7, 8]];
function matrixMultiplication(x, y, z = [[], []]) {
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x.length; j++) {
      z[i][j] = 0;
      for (let k = 0; k < x.length; k++) {
        z[i][j] = z[i][j] + x[i][k] + y[k][j];
      }
    }
  }
  return z;
}
console.log("matrixMultiplication ", matrixMultiplication(matrix1, matrix2));

function mergeAndCountSplit(arr) {
  let splitInv = 0;
  let half = Math.floor(arr.length / 2);
  let left = arr.slice(0, Math.floor(half));
  let right = arr.slice(Math.floor(half), arr.length);
  let i = 0;
  let j = 0;
  let b = [];
  for (let k = 0; k < arr.length; k++) {
    console.log(i, j, splitInv, b);
    if (left[i] < right[j]) {
      b.push(left[i]);
      i++;
    } else {
      b.push(right[j]);
      j++;
      splitInv += Math.floor(half) - i + 1;
    }
  }
  return [b, splitInv];
}
console.log(mergeAndCountSplit([6, 5, 4, 3, 2, 1]));
//brute force o(n^2).

export function DivideAndConquer() {
  return (
    <div>
      <VictoryChart>
        <VictoryLine
          groupComponent={
            <VictoryClipContainer clipPadding={{ top: 5, right: 10 }} />
          }
          labels={datum => datum.x + 1}
          style={{
            data: { stroke: "#c43a31", strokeWidth: 1, strokeLinecap: "round" }
          }}
          data={obj}
        />
      </VictoryChart>
      <div>{countingInversions([6, 5, 4, 3, 2, 1])}</div>
      <div>{}</div>
      <div>{}</div>
      <div>{}</div>
    </div>
  );
}
