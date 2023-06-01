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
import { WeightedGraph } from './data-structures/graphs/graph';
import { IWeightedEdge, IWeightedVertex } from './data-structures/graphs/types/index';
import { findShortestPath } from './algorithms/dijkstras-algorithm';
// an array of 10 sorted numbers
const numbers = generateRandomNumbers(10);
numbers.sort((a, b) => a - b);

let randomNumbers = generateRandomNumbers(5);
let randomCityNames = generateRandomCityNames();

// create a WeightedGraph
const weightedGraph = new WeightedGraph();
// add vertices
randomCityNames.forEach((city) => {
  // create a vertex
  let vertex: IWeightedVertex = {
    data: city,
    name: city,
    edges: [],
    weight: Math.floor(Math.random() * 100)

  };

  weightedGraph.addVertex(vertex);
});

// add edges
weightedGraph.listOfVertices.forEach((vertex) => {
  // create an edge
  let edge: IWeightedEdge = {
    startVertex: vertex,
    endVertex: weightedGraph.listOfVertices[Math.floor(Math.random() * weightedGraph.listOfVertices.length)],
    weight: Math.floor(Math.random() * 100)
  };

  weightedGraph.addEdge(edge);
}
)

// find the shortest path
let startVertex = weightedGraph.listOfVertices[0];
let endVertex = weightedGraph.listOfVertices[weightedGraph.listOfVertices.length - 1];
let shortestPath = findShortestPath(startVertex, endVertex);
console.log("Shortest path is: ", shortestPath);
