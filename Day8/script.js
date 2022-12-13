"use strict";

const fs = require("fs");
const { get } = require("http");

const lines = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .split("\n");

function buildRows(lines) {
  for (const line of lines) {
    row[i] = line.split("").map(Number);
    i++;
  }
}

function buildColumns() {
  for (let j = 0; j < row[0].length; j++) {
    column[j] = [];
    for (let k = 0; k < i; k++) {
      column[j].push(row[k][j]);
    }
  }
}

function getVisable() {
  let visable = row[0].length * 2 + (column[0].length - 2) * 2;
  for (let j = 1; j < i - 1; j++) {
    for (let k = 1; k < row[j].length - 1; k++) {
      // row[j][k] = column[k][j]
      if (isVisable(j, k)) {
        visable++;
      }
    }
  }
  console.log(highestScenicScore);
  return visable;
}

// Part 1
function isVisable(x, y) {
  const target = row[x][y];
  const preRow = row[x].slice(0, y);
  const preColumn = column[y].slice(0, x);
  const postRow = row[x].slice(y + 1);
  const postColumn = column[y].slice(x + 1);
  //For Part 2
  getScenicScore(target, preRow, preColumn, postRow, postColumn);
  // For Part 1
  if (
    target > Math.max(...preRow) ||
    target > Math.max(...postRow) ||
    target > Math.max(...preColumn) ||
    target > Math.max(...postColumn)
  ) {
    return true;
  }
  return false;
}

// Part 2
function getScenicScore(target, preRow, preColumn, postRow, postColumn) {
  let scenincScore = 0;
  scenincScore =
    preValue(target, preRow) *
    preValue(target, preColumn) *
    postValue(target, postRow) *
    postValue(target, postColumn);
  if (scenincScore > highestScenicScore) {
    highestScenicScore = scenincScore;
  }
}

function preValue(target, arr) {
  let x = arr.length;
  for (let j = x - 1; j >= 0; j--) {
    if (arr[j] >= target) {
      x = x - j;
      return x;
    }
  }
  return x;
}

function postValue(target, arr) {
  let x = 1;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] >= target) {
      x = x + j;
      return x;
    }
  }
  x = arr.length;
  return x;
}

let i = 0;
const row = [];
buildRows(lines);
const column = [];
buildColumns();
let highestScenicScore = 0;
console.log(getVisable());
