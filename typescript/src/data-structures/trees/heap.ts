


class Heap<T> {
  values: T[];
  constructor() {
    this.values = [];
  }
  insert(value: T) {
    this.values.push(value);
    this.reorganize();
  }

  private reorganize() {
    // get the index of newly inserted value
    let index = this.values.length - 1;
    const value = this.values[index];
    while (true) {    // find the parentIndex
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (value <= parent) break;
      // else swap the values
      this.values[parentIndex] = value;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  extractMax(): number | undefined {
    if (this.values.length === 0) {
      return undefined; // Return undefined if the heap is empty
    }

    const max = this.values[0];
    const last = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = last as T;
      this.sinkDown();
    }
  }

  private sinkDown() {
    let index = 0;
    const length = this.values.length;
    const value = this.values[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild: T | undefined, rightChild: T | undefined;
      let swap: number | null = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > value) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > value) ||
          (swap !== null && rightChild > leftChild!)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) {
        break;
      }

      this.values[index] = this.values[swap];
      this.values[swap] = value;
      index = swap;
    }
  }

}

export default Heap;