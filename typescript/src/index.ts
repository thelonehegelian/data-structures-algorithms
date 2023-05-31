import SinglyLinkedList from './data-structures/linked-lists/singly-linked-list';
import { SearchAlgorithms } from './algorithms/search';
import { generateRandomNumbers, generateRandomCityNames } from './test-data';
import { SortingAlgorithms } from '../src/algorithms/sorting';
import { ISortingAlgorithms } from './algorithms/sorting/types/index';
import DoublyLinkedList from './data-structures/linked-lists/doubly-linked-list';
import BinaryTree from './data-structures/trees/binaryTree';
import Queue from './data-structures/stacks-and-queues/queues';
import Heap from './data-structures/trees/heap';
import MerkleTrie from './data-structures/trees/merkleTrie';
// an array of 10 sorted numbers
const numbers = generateRandomNumbers(10);
numbers.sort((a, b) => a - b);

let randomNumbers = generateRandomNumbers(5);
let randomCityNames = generateRandomCityNames();

// test MerkleTrie
const trie = new MerkleTrie();
trie.insert("hello", 1);

console.log(trie.root.children);