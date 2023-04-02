import SinglyLinkedList from './data-structures/linked-lists/singly-linked-list';
import { SearchAlgorithms } from './algorithms/search-algorithms';
import { generateRandomNumbers, generateRandomCityNames } from './test-data';

let randomNumbers = generateRandomNumbers();
let randomCityNames = generateRandomCityNames();

let searchAlgorithms = new SearchAlgorithms(randomNumbers, 5);
let SearchAlgorithmsCities = new SearchAlgorithms(randomCityNames, 'New York');
let SearchAlgorithmsStringSearch = new SearchAlgorithms(
  'lololololaaulalolololololaula',
  'laula'
);

// console.log(searchAlgorithms.linearSearch());
// console.log(SearchAlgorithmsCities.linearSearch());
console.log(searchAlgorithms.binarySearch());
console.log(SearchAlgorithmsCities.binarySearch());
console.log(SearchAlgorithmsStringSearch.naiveStringSearch());
