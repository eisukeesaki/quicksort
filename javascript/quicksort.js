const partition = (array, start, end) => {
  let iPartition = start; // TODO: get median
  let partition = array[iPartition];

  while (start < end) {
    while (start < array.length && array[start] <= partition) {
      start++;
    }
    
    while (start <= end && array[end] > partition) {
      end--;
    }

    if (start < end) {
      [array[start], array[end]] = [array[end], array[start]];
    }
  }
  [array[end], array[iPartition]] = [array[iPartition], array[end]];
  return end;
}

const quicksort = (array, start, end) => {
  let iPartition = null;

  if (start < end) {
    iPartition = partition(array, start, end);
    quicksort(array, start, iPartition - 1);
    quicksort(array, iPartition + 1, end);
  }
}

export { quicksort }
