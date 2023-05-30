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


const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(2);
binaryTree.insert(4);
binaryTree.insert(6);
// search for a number using bfs
console.log(binaryTree.dfsPreOrder(6));
console.log(binaryTree.dfsPreOrder(600));


