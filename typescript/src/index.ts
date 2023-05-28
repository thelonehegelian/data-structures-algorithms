import SinglyLinkedList from './data-structures/linked-lists/singly-linked-list';
import { SearchAlgorithms } from './algorithms/search';
import { generateRandomNumbers, generateRandomCityNames } from './test-data';
import { SortingAlgorithms } from '../src/algorithms/sorting';
import { ISortingAlgorithms } from './algorithms/sorting/types/index';
import DoublyLinkedList from './data-structures/linked-lists/doubly-linked-list';
import BinaryTree from './data-structures/trees/binaryTree';
import Queue from './data-structures/stacks-and-queues/queues';

// an array of 10 sorted numbers
const numbers = generateRandomNumbers(10);
numbers.sort((a, b) => a - b);

let randomNumbers = generateRandomNumbers(100000);
let randomCityNames = generateRandomCityNames();


// define test cases for Queue
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
console.log(queue.dequeue());