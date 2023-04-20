import SinglyLinkedList from './data-structures/linked-lists/singly-linked-list';
import { SearchAlgorithms } from './algorithms/search';
import { generateRandomNumbers, generateRandomCityNames } from './test-data';
import { SortingAlgorithms } from '../src/algorithms/sorting';
import { ISortingAlgorithms } from './algorithms/sorting/types/index';
import DoublyLinkedList from './data-structures/linked-lists/doubly-linked-list';

// an array of 10 sorted numbers
const numbers = generateRandomNumbers(10);
numbers.sort((a, b) => a - b);

let randomNumbers = generateRandomNumbers(10);
let randomCityNames = generateRandomCityNames();

const sortingAlgorithms: ISortingAlgorithms<number> =
  new SortingAlgorithms<number>(randomNumbers);

// console.log(sortingAlgorithms);
console.log(sortingAlgorithms.selectionSort());
