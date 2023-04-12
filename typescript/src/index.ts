import SinglyLinkedList from './data-structures/linked-lists/singly-linked-list';
import { SearchAlgorithms } from './algorithms/search';
import { generateRandomNumbers, generateRandomCityNames } from './test-data';
import { SortingAlgorithms } from '../src/algorithms/sorting';
import { ISortingAlgorithms } from './algorithms/sorting/types/index';
import DoublyLinkedList from './data-structures/linked-lists/doubly-linked-list';

// an array of 10 sorted numbers
const numbers = generateRandomNumbers(100000);
numbers.sort((a, b) => a - b);

let randomNumbers = generateRandomNumbers(100000);
let randomCityNames = generateRandomCityNames();

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push('Head');
doublyLinkedList.push(2);
doublyLinkedList.push(3);
doublyLinkedList.push(4);
doublyLinkedList.push('Tail');
doublyLinkedList.unshift('New Head');

doublyLinkedList.get(1);
doublyLinkedList.set(2, 'New Value');
doublyLinkedList.insert(2, 'An Inserted Value');
doublyLinkedList.insert(0, 'An Inserted Value');
doublyLinkedList.remove(3);

// console.log(doublyLinkedList);
