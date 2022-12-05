"use strict";

// Part 1

const fs = require("fs");

// Read File
const text = fs.readFileSync("input.txt", "utf-8");

// Split by Double Return
const elves = text.split("\r\n\r");
// eflTotal = array of total calories per elf
let elfTotal = [];
for (const elf of elves) {
  // Split by each line and convert resulting array to Numbers instead of Strings
  const food = elf.trim().split("\r\n").map(Number);
  // Use reduce to get sum of array values
  const init = 0;
  const total = food.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    init
  );
  // Push values to array of totals
  elfTotal.push(total);
}
// Log results
const mostFood = Math.max(...elfTotal);
console.log(
  `Elf #${
    elfTotal.indexOf(mostFood) + 1
  } has the most food valued at ${mostFood} calories`
);

// Part 2
let nextMost = mostFood;
let topTotal = 0;
// loop twice for next two highest values
for (let i = 0; i < 2; i++) {
  topTotal += nextMost;
  elfTotal[elfTotal.indexOf(nextMost)] = 0;
  nextMost = Math.max(...elfTotal);
  // log results for fun
  console.log(
    `Elf #${
      elfTotal.indexOf(nextMost) + 1
    } has the next most food valued at ${nextMost} calories`
  );
}
topTotal += nextMost;

// log results
console.log(`Total calories of the top three elves is ${topTotal}`);
