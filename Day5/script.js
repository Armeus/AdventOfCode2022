"use strict";

// Part 1

const fs = require("fs");

// Read file
const input = fs.readFileSync("input.txt", "utf-8").replace(/\r/g, "");

// Split input into two String variables, one with the stacks and one with the moves
const [stacks, moves] = input.split("\n\n");

// Split the stacks into an array of arrays (by line), make that new array an array of characters, filter array so that every 4 indexes only the index of 1 is returned (this is easier to understand if you console.log each step)
const parsedStacks = stacks
  .split("\n")
  .map((line) => [...line].filter((value, index) => index % 4 === 1));

const indexOfLast = parsedStacks.length - 1;

// Based on how the input was parsed, the numbers will all be in the last array
const stackNumbers = parsedStacks[indexOfLast].map(Number);

// Creating an object for each stack
const Stack = {};

for (let stackNumber of stackNumbers) {
  Stack[stackNumber] = { crates: [] };
  for (let i = 0; i < indexOfLast; i++) {
    const arr = parsedStacks[i];
    if (arr[stackNumber - 1] != " ") {
      Stack[stackNumber].crates.unshift(arr[stackNumber - 1]);
    }
  }
}

const parsedMoves = moves.split("\n");

// Creating an array of objects for each move
const movesObj = [];

for (const move of parsedMoves) {
  const digits = /move (\d+) from (\d+) to (\d+)/g.exec(move);
  movesObj.push({
    count: parseInt(digits[1]),
    from: parseInt(digits[2]),
    to: parseInt(digits[3]),
  });
}

// Move the crates around
function moveCrates() {
  for (const moveObj of movesObj) {
    for (let i = moveObj.count; i > 0; i--) {
      let popped = Stack[moveObj.from].crates.pop();
      Stack[moveObj.to].crates.push(popped);
    }
  }
  return Stack;
}

// console.log(moveCrates());

// Part 2

function moveCrates2() {
  for (const moveObj of movesObj) {
    let arr = [];
    for (let i = moveObj.count; i > 0; i--) {
      let popped = Stack[moveObj.from].crates.pop();
      arr.push(popped);
    }
    arr.reverse();
    for (let i = 0; i < arr.length; i++) {
      Stack[moveObj.to].crates.push(arr[i]);
    }
  }
  return Stack;
}

console.log(moveCrates2());
