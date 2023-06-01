/*
  * An awkward implementation of Dijkstra's algorithm.
  * @todo refactor using classes
 */

import { IWeightedVertex } from '../data-structures/graphs/types/index';
class PriorityQueue {
  queue: IWeightedVertex[];

  constructor() {
    this.queue = [];
  }

  enqueue(vertex: IWeightedVertex, priority: number) {
    // add the vertex to the queue in a sorted order
    this.queue.push({ ...vertex, weight: priority });
    // sort the queue by weight 
    this.queue.sort((a, b) => a.weight - b.weight);
  }

  dequeue() {
    return this.queue.shift();
  }


  get length() {
    return this.queue.length;
  }

}


// takes an instance of a weighted graph as an argument
export function findShortestPath(startVertex: IWeightedVertex, endVertex: IWeightedVertex) {
  let previous = {};
  let visited = new Set<string>(); // updated target to ES2016 to use Set
  let queue = new PriorityQueue();
  // initialise the queue with the start vertex and set its priority to 0
  queue.enqueue(startVertex, 0);

  // shortest path to each vertex
  let distances = {};
  distances[startVertex.name] = 0;

  while (queue.length > 0) {

    let currentVertex = queue.dequeue();
    // mark the current vertex as visited
    visited.add(currentVertex.name);
    // find the vertex with the smallest weight in the queue
    currentVertex.edges.forEach((edge) => {
      let neighbour = edge.endVertex as IWeightedVertex;
      // current distance is the cost of the shortest path to the current vertex
      let distance = currentVertex.weight + edge.weight;
      // get neighbour distance from the distances object
      let neighbourDistance = distances[neighbour.name];
      // is the neighbour distance shorter than the current distance?
      let isNeighbourDistanceShorter = neighbourDistance > distance;
      let doesNeighbourExistInDistances = neighbour.name in distances;
      if (isNeighbourDistanceShorter || !doesNeighbourExistInDistances) {
        // update the distance
        distances[neighbour.name] = distance;
        // and the shortest path to the neighbour is through the current vertex
        previous[neighbour.name] = currentVertex.name;


        // update the priority and enqueue the neighbour as it is now the shortest path to it
        // make sure the neighbour has not been visited
        if (!visited.has(neighbour.name)) {
          queue.enqueue(neighbour, distance);
        }
      }
    })


  }
  // we can construct the shortest path by backtracking from the end vertex to the start vertex
  let path = [];
  let current = endVertex.name;
  // while the current vertex is not the start vertex we keep backtracking
  while (current !== startVertex.name) {
    path.unshift(current);
    current = previous[current];
  }
  path.unshift(startVertex.name);

  return {
    path,
    distance: distances[endVertex.name]
  }


}
