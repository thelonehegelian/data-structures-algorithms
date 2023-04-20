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
  private swap(arr: T[], idx1: number, idx2: number) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }
}
