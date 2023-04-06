export class SortingAlgorithms<T> {
  input: T[];
  constructor(array: T[]) {
    this.input = array;
  }

  private compare(a: T, b: T) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  }

  public nativeJsSort = () => {
    return this.input.sort(this.compare);
  };

  public bubbleSort = () => {
    let endOfArray = this.input.length - 1;
    let idx = 0;
    while (endOfArray > 0) {
      for (let i = 0; i < endOfArray; i++) {
        if (this.input[idx] > this.input[idx + 1]) {
          this.swap(this.input, idx, idx + 1);
        }
        idx++;
      }
      idx = 0;
      endOfArray--;
    }
    return this.input;
  };

  private swap(arr: T[], idx1: number, idx2: number) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }
}
