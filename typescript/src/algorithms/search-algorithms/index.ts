import { ISearch } from './types';
export const linearSearch: ISearch<number | string> = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
};

export const binarySearch: ISearch<number | string> = (array, value) => {
  return -1;
};
