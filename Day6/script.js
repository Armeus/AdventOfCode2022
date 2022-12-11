"use strict";

// Part 1

const fs = require("fs");

// Read file
const signal = fs.readFileSync("input.txt", "utf-8").replace(/\r/g, "");

for (let i = 0; i < signal.length; i++) {
  let subSig = signal.substring(i, i + 4);
  if (isUnique(subSig)) {
    console.log(subSig + " " + (i + 4));
    break;
  }
}

// Check if string is all unique characters
function isUnique(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (obj[char]) return false;
    obj[char] = true;
  }
  return true;
}

// Part 2
for (let i = 0; i < signal.length; i++) {
  let subSig = signal.substring(i, i + 14);
  if (isUnique(subSig)) {
    console.log(subSig + " " + (i + 14));
    break;
  }
}
