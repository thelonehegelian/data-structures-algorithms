export interface ISortingAlgorithms<T> {
  input: T[];
  nativeJsSort: () => T[];
  bubbleSort: () => T[];
  selectionSort: () => T[];
  insertionSort: () => T[];
  mergeSort: (arr: T[]) => T[];
  // quickSort: (arr: T[]) => T[];
}
