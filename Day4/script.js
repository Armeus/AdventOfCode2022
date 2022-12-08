"use strict";

// Part 1

const fs = require("fs");

// Read file and split into array of strings (by line)
const pairs = fs.readFileSync("input.txt", "utf-8").split("\r\n");

let overlap = 0;
let anyOverlap = 0;

for (const pair of pairs) {
  const splitPair = pair.split(",");
  const elf1 = splitPair[0].split("-").map(Number);
  const elf2 = splitPair[1].split("-").map(Number);
  if (
    (elf1[0] <= elf2[0] && elf1[1] >= elf2[1]) ||
    (elf2[0] <= elf1[0] && elf2[1] >= elf1[1])
  ) {
    overlap++;
  }

  // Part 2

  if (
    !(
      (elf1[0] < elf2[0] && elf1[1] < elf2[0]) ||
      (elf1[0] > elf2[1] && elf1[1] > elf2[1])
    )
  ) {
    anyOverlap++;
  } else {
    console.log(elf1, elf2);
  }
}
console.log(overlap);
console.log(anyOverlap);
