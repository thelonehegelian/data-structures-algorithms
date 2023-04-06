import { ISearchAlgorithms } from './types';

export class SearchAlgorithms<T> implements ISearchAlgorithms<T> {
  input: T | T[];
  target: T;

  //@audit what if someone passes an object to sort?

  constructor(array: T[] | T, value: T) {
    this.input = array;
    this.target = value;
  }

  public linearSearch = (): number => {
    const input = this.input as T[];
    for (let i = 0; i < input.length; i++) {
      if (input[i] === input) {
        return i;
      }
    }
    return -1;
  };

  // @note in order to use binary search, the array must be sorted
  public binarySearch = (): number => {
    const input = this.input as T[];
    const compareAndSort = (a: T, b: T) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    };
    input.sort(compareAndSort);
    let start = 0;
    let end = (this.input as T[]).length - 1;
    let midpoint = Math.floor((start + end) / 2);
    while (this.target !== input[midpoint] && start <= end) {
      if (this.target < input[midpoint]) end = midpoint - 1;
      if (this.target > input[midpoint]) start = midpoint + 1;
      midpoint = Math.floor((start + end) / 2);
      if (this.target === input[midpoint]) return midpoint;
    }

    return -1;
  };

  // @audit intentions and results of the algorithm are not clear
  public naiveStringSearch = (): number => {
    if (typeof this.input !== 'string' || typeof this.target !== 'string')
      return -1;
    const input = this.input as string;
    const target = this.target as string;
    if (input.length < target.length) return -1;

    let count = 0;
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < target.length; j++) {
        if (target[j] !== input[i + j]) break;
        if (j === target.length - 1) count++;
      }
    }
    return count;

    return -1;
  };
}
