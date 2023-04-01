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
  public binarySearch = (): number => {
    const compareAndSort = (a: T, b: T) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    };
    this.array.sort(compareAndSort);
    let start = 0;
    let end = this.array.length - 1;
    let midpoint = Math.floor((start + end) / 2);
    while (this.value !== this.array[midpoint] && start <= end) {
      if (this.value < this.array[midpoint]) {
        end = midpoint - 1;
      }

      if (this.value > this.array[midpoint]) {
        start = midpoint + 1;
      }
      midpoint = Math.floor((start + end) / 2);

      if (this.value === this.array[midpoint]) {
        return midpoint;
      }
    }

    return -1;
  };
}
