import SinglyLinkedList from './data-structures/linked-lists/singly-linked-list';
import { SearchAlgorithms } from './algorithms/search';
import { generateRandomNumbers, generateRandomCityNames } from './test-data';
import { SortingAlgorithms } from '../src/algorithms/sorting';

let randomNumbers = generateRandomNumbers();
let randomCityNames = generateRandomCityNames();

let searchAlgorithms = new SearchAlgorithms(randomNumbers, 5);
let SearchAlgorithmsCities = new SearchAlgorithms(randomCityNames, 'New York');
let SearchAlgorithmsStringSearch = new SearchAlgorithms(
  'lololololaaulalolololololaula',
  'laula'
);

let sortingAlgorithms = new SortingAlgorithms(randomNumbers);
let SortingAlgorithmsBubbleSort = new SortingAlgorithms(randomNumbers);

// console.log(searchAlgorithms.linearSearch());
// console.log(SearchAlgorithmsCities.linearSearch());
// console.log(searchAlgorithms.binarySearch());
// console.log(SearchAlgorithmsCities.binarySearch());
// console.log(SearchAlgorithmsStringSearch.naiveStringSearch());
// console.log(sortingAlgorithms.nativeJsSort());
console.log(SortingAlgorithmsBubbleSort.bubbleSort());
