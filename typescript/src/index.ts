import SinglyLinkedList from './data-structures/linked-lists/singly-linked-list';
import { SearchAlgorithms } from './algorithms/search';
import { generateRandomNumbers, generateRandomCityNames } from './test-data';
import { SortingAlgorithms } from '../src/algorithms/sorting';
import { ISortingAlgorithms } from './algorithms/sorting/types/index';

// an array of 10 sorted numbers
const numbers = generateRandomNumbers(100000);
numbers.sort((a, b) => a - b);

let randomNumbers = generateRandomNumbers(100000);
let randomCityNames = generateRandomCityNames();

let searchAlgorithms = new SearchAlgorithms(randomNumbers, 5);
let SearchAlgorithmsCities = new SearchAlgorithms(randomCityNames, 'New York');
let SearchAlgorithmsStringSearch = new SearchAlgorithms(
  'lololololaaulalolololololaula',
  'laula'
);

let sortingAlgorithms: ISortingAlgorithms<number> = new SortingAlgorithms(
  randomNumbers
);
let SortingAlgorithmsBubbleSortSorted: ISortingAlgorithms<number> =
  new SortingAlgorithms(numbers);
let SortingAlgorithmsBubbleSortRandom: ISortingAlgorithms<number> =
  new SortingAlgorithms(randomNumbers);

// console.log(searchAlgorithms.linearSearch());
// console.log(SearchAlgorithmsCities.linearSearch());
// console.log(searchAlgorithms.binarySearch());
// console.log(SearchAlgorithmsCities.binarySearch());
// console.log(SearchAlgorithmsStringSearch.naiveStringSearch());
// console.log(sortingAlgorithms.nativeJsSort());
console.log(SortingAlgorithmsBubbleSortSorted.bubbleSort());
// console.log(SortingAlgorithmsBubbleSortRandom.bubbleSort());
