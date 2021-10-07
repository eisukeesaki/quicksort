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

const testQuicksort = () => {
  const nElms = 1000000;
  const maxNum = Number.MAX_SAFE_INTEGER;
  let toSort = genArrOfRandNums(nElms, maxNum); // TODO: figure out why the test works with `const toSort`
  let timeStartSort = null;
  let timeSortComplete = null;
  let i = 0;

  // ------------------------------------+-----------------------  hard-coded test arrays
  // let toSort = [10, 90, 9, -12, -4, 50, 33, -45, 3, -5];
  // let toSort = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4];
  // let toSort = [-1, 5, 2, 7, -8, 5, 4];
  // let toSort = [42];
  // ------------------------------------+----------------------- / hard-coded test arrays
  // console.log(`calling quicksort(${toSort});`);
  timeStartSort = Date.now();
  quicksort(toSort, 0, toSort.length - 1);
  timeSortComplete = Date.now();
   
    while (i < toSort.length - 1 && toSort[i] < toSort[i + 1]) {
      i++;
    }
    if (i === nElms - 1) {
      console.log("OK.");
      console.log(`Execution time: ${timeSortComplete - timeStartSort}ms`); // TODO: measure performance more accurately
  } else {
    console.log("KO.");
  }
}

testQuicksort();
