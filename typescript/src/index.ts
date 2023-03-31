import SinglyLinkedList from './data-structures/linked-lists/singly-linked-list';
import { linearSearch } from '../src/algorithms/search-algorithms/linear-search';
import { generateRandomNumbers, generateRandomCityNames } from './test-data';

let randomNumbers = generateRandomNumbers();
let randomCityNames = generateRandomCityNames();

console.log(linearSearch(randomCityNames, 'Dallas'));
