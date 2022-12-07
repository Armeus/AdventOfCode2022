"use strict";

// Part 1

const fs = require("fs");

// Read file and split into array of strings (by line)
const rucksacks = fs.readFileSync("input.txt", "utf-8").split("\r\n");

let totalValue = 0;

for (const rucksack of rucksacks) {
  // For each string in the array, split the string in half using slice
  const container1 = rucksack.slice(0, rucksack.length / 2);
  const container2 = rucksack.slice(rucksack.length / 2, rucksack.length);
  let tempContainer = container2;
  for (const item of container1) {
    if (tempContainer.includes(item)) {
      // Removes character from container to prevent duplicates
      tempContainer = tempContainer.replaceAll(item, "");
      totalValue += itemValue(item);
    }
  }
}

// Calculate value by using charCodeAt and math
function itemValue(item) {
  if (item === item.toLowerCase()) return item.charCodeAt(0) - 96;
  else return item.charCodeAt(0) - 38;
}

console.log(totalValue);

// Part 2

let totalValue2 = 0;

// Loop 3 at a time

for (let i = 0; i < rucksacks.length; i = i + 3) {
  let sack2 = rucksacks[i + 1];
  let sack3 = rucksacks[i + 2];
  for (const item of rucksacks[i]) {
    if (sack2.includes(item) && sack3.includes(item)) {
      sack2 = sack2.replaceAll(item, "");
      sack3 = sack3.replaceAll(item, "");
      totalValue2 += itemValue(item);
    }
  }
}

console.log(totalValue2);
