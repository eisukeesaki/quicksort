const partition = (array, start, end) => {
  // sorted position for partition is unknown at this point. init to start of array.
  let iPartition = start; // TODO: get median
  // place elements that's greater than the partition on the left side of the partition,
  // place elements that's smaller than the partition on the right side of the partition
  let partition = array[iPartition];

  // run loop until start and end crosses each other,
  while (start < end) {
    // to search for an index of an element that's greater than partition
    while (start < array.length && array[start] <= partition) {
      start++;
    }
    
    // to search for an index of an element that's smaller than partition
    // while (start < end && array[end] > partition) {
    while (start <= end && array[end] > partition) {
      end--;
    }

    // after having searched for: elment < |partition| < element ,
    // and start and end have not crossed each other yet,
    if (start < end) {
      // swap the found elements
      [array[start], array[end]] = [array[end], array[start]];
    }
  }
  // breaking out of the outer while loop means that we've found a sorted position for the partition
  // so swap the element in the correct position for the partition and the partition element
  [array[end], array[iPartition]] = [array[iPartition], array[end]];
  // at this point, end is the sorted position of the partition element
  return end;
}

const quicksort = (array, start, end) => {
  let iPartition = null;

  if (start < end) {
    // sort the array by
    // recursively partition()ing elements to the left and right side of the previous partition.
    // iPartition is the index of the sorted position of the partition element
    iPartition = partition(array, start, end);
    quicksort(array, start, iPartition - 1);
    quicksort(array, iPartition + 1, end);
  }
}

export { quicksort }
