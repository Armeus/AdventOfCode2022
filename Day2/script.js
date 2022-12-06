"use strict";

// Part 1

const fs = require("fs");

// Read file, Split into array values and remove breaks
const rounds = fs.readFileSync("input.txt", "utf-8").split("\r\n");

let pointTotal = 0;
let stratTotal = 0;

// Calculate points for shape (arr[1]) and outcome (compair arr[0] and arr[1])
function points(arr) {
  let roundTotal = 0;
  switch (arr[1]) {
    case "X":
      roundTotal += 1;
      switch (arr[0]) {
        case "A":
          roundTotal += 3;
          break;
        case "B":
          break;
        case "C":
          roundTotal += 6;
          break;
        default:
          console.log(arr[0]);
          console.log("Something went wrong, Fix it!");
      }
      break;
    case "Y":
      roundTotal += 2;
      switch (arr[0]) {
        case "A":
          roundTotal += 6;
          break;
        case "B":
          roundTotal += 3;
          break;
        case "C":
          break;
        default:
          console.log(arr[0]);
          console.log("Something went wrong, Fix it!");
      }
      break;
    case "Z":
      roundTotal += 3;
      switch (arr[0]) {
        case "A":
          break;
        case "B":
          roundTotal += 6;
          break;
        case "C":
          roundTotal += 3;
          break;
        default:
          console.log(arr[0]);
          console.log("Something went wrong, Fix it!");
      }
      break;
    default:
      console.log(arr[1]);
      console.log("Something went wrong, Fix it!");
  }
  return roundTotal;
}

// For Part 2
function stratPoints(arr) {
  let roundTotal = 0;
  switch (arr[1]) {
    case "X":
      switch (arr[0]) {
        case "A":
          roundTotal += 3;
          break;
        case "B":
          roundTotal += 1;
          break;
        case "C":
          roundTotal += 2;
          break;
        default:
          console.log(arr[0]);
          console.log("Something went wrong, Fix it!");
      }
      break;
    case "Y":
      roundTotal += 3;
      switch (arr[0]) {
        case "A":
          roundTotal += 1;
          break;
        case "B":
          roundTotal += 2;
          break;
        case "C":
          roundTotal += 3;
          break;
        default:
          console.log(arr[0]);
          console.log("Something went wrong, Fix it!");
      }
      break;
    case "Z":
      roundTotal += 6;
      switch (arr[0]) {
        case "A":
          roundTotal += 2;
          break;
        case "B":
          roundTotal += 3;
          break;
        case "C":
          roundTotal += 1;
          break;
        default:
          console.log(arr[0]);
          console.log("Something went wrong, Fix it!");
      }
      break;
    default:
      console.log(arr[1]);
      console.log("Something went wrong, Fix it!");
      break;
  }
  return roundTotal;
}

// Further split array to funtionally read one line at a time
for (const round of rounds) {
  pointTotal += points(round.split(" "));
  stratTotal += stratPoints(round.split(" "));
}

console.log(pointTotal);
console.log(stratTotal);
