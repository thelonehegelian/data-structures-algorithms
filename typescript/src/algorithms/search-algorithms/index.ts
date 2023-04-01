import { ISearchAlgorithms } from './types';

export class SearchAlgorithms<T> implements ISearchAlgorithms<T> {
  array: T[];
  value: T;

  //@audit what if someone passes an object to sort?

  constructor(array: T[], value: T) {
    this.array = array;
    this.value = value;
  }

  public linearSearch = (): number => {
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === this.value) {
        return i;
      }
    }
    return -1;
  };

  // @note in order to use binary search, the array must be sorted
  // @audit probably takes too much memory
  public binarySearch = (): number => {
    const compareAndSort = (a: T, b: T) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    };
    this.array.sort(compareAndSort);
    let midpoint = Math.floor(this.array.length / 2);
    // @todo refactor to reduce code duplication and control flow complexity
    let arrayToSearch = this.array.slice(0, midpoint);
    if (this.array[midpoint] === this.value) {
      return midpoint;
    }
    if (this.array[midpoint] > this.value) {
      for (let i = 0; i < arrayToSearch.length; i++) {
        if (arrayToSearch[i] === this.value) {
          return i;
        }
      }
    }
    if (this.array[midpoint] < this.value) {
      arrayToSearch = this.array.slice(midpoint);
      // set new midpoint
      midpoint = Math.floor(arrayToSearch.length / 2);
      for (let i = 0; i < arrayToSearch.length; i++) {
        if (arrayToSearch[i] === this.value) {
          return i;
        }
      }
    }

    return -1;
  };
}
