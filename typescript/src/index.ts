import SinglyLinkedList from './data-structures/linked-lists/singly-linked-list';
import { linearSearch } from './algorithms/search-algorithms';
import { generateRandomNumbers, generateRandomCityNames } from './test-data';

let randomNumbers = generateRandomNumbers();
let randomCityNames = generateRandomCityNames();

console.log(linearSearch(randomCityNames, 'Dallas'));
