import SinglyLinkedList from './data-structures/linked-lists/singly-linked-list';
import { linearSearch } from '../src/algorithms/search-algorithms/linear-search';
import { generateRandomNumbers } from './test-data';

let randomNumbers = generateRandomNumbers();

console.log(linearSearch(randomNumbers, 50));
