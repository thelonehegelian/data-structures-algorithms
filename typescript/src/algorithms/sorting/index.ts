import { ISortingAlgorithms } from './types';
export class SortingAlgorithms<T> implements ISortingAlgorithms<T> {
  input: T[];
  constructor(array: T[]) {
    this.input = array;
  }

  private compare(a: T, b: T) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  }

  public nativeJsSort = (): T[] => {
    return this.input.sort(this.compare);
  };

  public bubbleSort = (): T[] => {
    let sorted = true;
    let endOfArray = this.input.length - 1;
    let idx = 0;
    while (endOfArray > 0) {
      for (let i = 0; i < endOfArray; i++) {
        if (this.input[idx] > this.input[idx + 1]) {
          this.swap(this.input, idx, idx + 1);
          sorted = false;
        }
        idx++;
      }
      if (sorted) return this.input;
      idx = 0;
      endOfArray--;
    }
    return this.input;
  };
  /**
   * Variation of bubble sort algorithm
   * public bubbleSort = () => {
  let endOfArray = this.input.length - 1;

  for (let i = 0; i < endOfArray; i++) {
    let innerLoopLimit = endOfArray - i;

    for (let j = 0; j < innerLoopLimit; j++) {
      if (this.input[j] > this.input[j + 1]) {
        this.swap(this.input, j, j + 1);
      }
    }
  }

  return this.input;
};

   */

  public selectionSort(): T[] {
    // @todo what if the array is empty or has only one element or already sorted?
    for (let i = 0; i < this.input.length; i++) {
      let min = i;
      for (let j = i + 1; j < this.input.length; j++) {
        if (this.input[j] < this.input[min]) {
          min = j;
        }
      }
      this.swap(this.input, i, min);
    }
    return this.input;
  }

  public insertionSort(): T[] {
    console.log(this.input);
    for (let i = 1; i < this.input.length; i++) {
      let currentVal = this.input[i];
      let j = i - 1;
      while (j >= 0 && this.input[j] > currentVal) {
        this.input[j + 1] = this.input[j];
        j--;
      }
      this.input[j + 1] = currentVal;
    }
    return this.input;
  }
  public mergeSort(arr: T[]): T[] {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = this.mergeSort(arr.slice(0, mid));
    let right = this.mergeSort(arr.slice(mid));
    console.log(this.mergeSortedArrays(left, right));
    return this.mergeSortedArrays(left, right);
  }

  private mergeSortedArrays(arr1: T[], arr2: T[]): T[] {
    let i = 0;
    let j = 0;
    let result: T[] = [];
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
    return result;
  }

  private swap(arr: T[], idx1: number, idx2: number) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }
}
