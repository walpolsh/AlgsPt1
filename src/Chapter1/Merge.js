import React from "react";
let arr1 = [[1, 4, 5, 8], [2, 3, 6, 7]];
function Merge(
  arr,
  left = arr[0],
  right = arr[1],
  n = left.length + right.length,
  i = 0,
  j = 0,
  arrB = []
) {
  if (left.length < i || right.length < j);
  for (let k = 0; k < n; k++) {
    //until the length of the total array.
    if (left[i] < right[j]) {
      // if left is less than right
      arrB[k] = left[i]; // move left to the end of arrB
      i = i + 1; // increment left index
    } else if (left[i] > right[j]) {
      arrB[k] = right[j];
      j = j + 1;
    } else {
      arrB[k] = left[i]; // if
    }
  }
  return arrB;
}

export const merge = (
  <div>
    <div> {`Unsorted: ${arr1[0].concat(arr1[1]).join(" => ")} `}</div>
    <div>{`Sorted: ${Merge(arr1).join(" => ")}`}</div>
  </div>
);
