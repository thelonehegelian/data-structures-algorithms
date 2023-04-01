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
    // @todo refactor to use only one array
    // Example:
    // let arrayToSearch = this.array.slice(0, midpoint);
    // if not found, then: arrayToSearch = this.array.slice(midpoint);
    let leftArray = this.array.slice(0, midpoint);
    let rightArray = this.array.slice(midpoint);
    if (this.array[midpoint] === this.value) {
      return midpoint;
    } else if (this.array[midpoint] > this.value) {
      for (let i = 0; i < leftArray.length; i++) {
        if (leftArray[i] === this.value) {
          return i;
        }
      }
    } else if (this.array[midpoint] < this.value) {
      for (let i = 0; i < rightArray.length; i++) {
        if (rightArray[i] === this.value) {
          return i;
        }
      }
    }

    return -1;
  };
}
