import { quicksort } from "./quicksort.js"

const genRandNum = (max) => { // TODO: choose appropriate syntax. arrow functions or `function` keyword
  return Math.floor(Math.random() * max);
}

const genArrOfRandNums = (nElms, maxNum) => {
  let arr = [];

  for (let i = 0; i < nElms; i++) {
    arr.push(genRandNum(maxNum))
  }

  return arr;
}

const testQuicksortRand = () => {
  const nElms = 10000;
  const maxNum = Number.MAX_SAFE_INTEGER;

  let toSort = genArrOfRandNums(nElms, maxNum); // TODO: figure out why the test works with `const toSort`

  let timeStartSort = null;
  let timeSortComplete = null;

  let i = 0;

  console.log(`>running quicksort on an array with ${nElms} random numbers...`);
  timeStartSort = Date.now();
  quicksort(toSort, 0, toSort.length - 1);
  timeSortComplete = Date.now();
   
  while (i < toSort.length - 1 && toSort[i] < toSort[i + 1]) {
    i++;
  }

  if (i === nElms - 1) {
    console.log("OK.");
    console.log(`took ${timeSortComplete - timeStartSort}ms\n`); // TODO: measure performance more accurately
  } else {
    console.log("KO.\n");
  }
}

const testQuicksortRev = () => {
  const nElms = 10000;
  const maxNum = Number.MAX_SAFE_INTEGER;

  let toSort = []; // TODO: figure out why the test works with `const toSort`

  let timeStartSort = null;
  let timeSortComplete = null;

  let i = 0;
  let m = 0;
  
  for (let k = maxNum; m < nElms; k--) {
    toSort.push(k);
    m++;
  }
  
  console.log(`>running quicksort on an array with ${nElms} numbers, pre-sorted in descending order...`);
  timeStartSort = Date.now();
  quicksort(toSort, 0, toSort.length - 1);
  timeSortComplete = Date.now();

  while (i < toSort.length - 1 && toSort[i] < toSort[i + 1]) {
    i++;
  }

  if (i === nElms - 1) {
    console.log("OK.");
    console.log(`took ${timeSortComplete - timeStartSort}ms\n`); // TODO: measure performance more accurately
  } else {
    console.log("KO.\n");
  }
}

testQuicksortRand();
testQuicksortRev();
