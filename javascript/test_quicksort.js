import { quicksort } from "./quicksort.js"

const genRandNum = (max) => { // TODO: choose appropriate syntax. arrow functions or `function` keyword
  return Math.floor(Math.random() * max);
}

const genArrOfRandNums = (nElms, maxNum) => {
  let arr = new Array(nElms);

  for (let i = 0; i < nElms; i++) {
    arr.push(genRandNum(maxNum))
  }

  return arr;
}

const testQuicksort = () => {
  let nElms = 10;
  let maxNum = 100;
  let toSort = genArrOfRandNums(nElms, maxNum);
  let returnedArr = quicksort(toSort);
  // ------------------------------------+----------------------- run test on hard-generated arrary
  // let returnedArr = [10, 90, 9, -12, -4, 50, 33, -45, 3, -5];
  // let returnedArr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4];
  // ------------------------------------+----------------------- / run test on hard-generated arrary
  let i = 0;

  while (returnedArr[i] < returnedArr[i + 1]) {
    i++;
  }

  if (i === nElms - 1) {
    console.log("OK.");
    // TODO: time quicksort and log it.
  } else {
    console.log("KO.");
  }
}

testQuicksort();
