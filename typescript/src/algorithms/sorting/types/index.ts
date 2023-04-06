export interface ISortingAlgorithms<T> {
  input: T[];
  nativeJsSort: () => T[];
  bubbleSort: () => T[];
}
