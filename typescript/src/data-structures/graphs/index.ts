interface IVertex {
  data: any;
  name: string;
  edges: IEdge[];
}
class Vertex implements IVertex {
  data: any;
  name: string;
  edges: IEdge[];
  constructor(name: string, data: any) {
    this.name = name;
    this.data = data;
    this.edges = [];

  }
}

interface IEdge {
  startVertex: IVertex;
  endVertex: IVertex;
}

// edge is a connection between two vertices
class Edge implements IEdge {
  startVertex: IVertex;
  endVertex: IVertex;
  constructor(startVertex: Vertex, endVertex: Vertex) {
    this.startVertex = startVertex;
    this.endVertex = endVertex;
  }
}

interface IGraph {
  listOfVertices: IVertex[];

  addVertex(vertex: IVertex): void;
  addEdge(edge: IEdge): void;
  removeEdge(edge: IEdge): void;
  removeVertex(vertex: IVertex): void;
  dfsTraversal(startVertex: IVertex): void;
  bfsTraversal(startVertex: IVertex): void;
}


class Graph implements IGraph {
  // an adjacency list is a list of vertices and edges
  listOfVertices: IVertex[];

  constructor() {
    this.listOfVertices = [];
  }

  addVertex(vertex: IVertex) {
    // check if the vertex already exists
    // @audit update this
    for (let i = 0; i < this.listOfVertices.length; i++) {
      if (this.listOfVertices[i].name === vertex.name) {
        return;
      }
    }
    this.listOfVertices.push(vertex);

  }
  addEdge(edge: IEdge) {
    // @note not checking if the edge already exists
    edge.startVertex.edges.push(edge);
    edge.endVertex.edges.push(edge);
  }

  // @refactor
  removeEdge(edge: IEdge) {
    // find the edge in the list of edges
    for (let i = 0; i < this.listOfVertices.length; i++) {
      if (this.listOfVertices[i].name === edge.startVertex.name) {
        for (let j = 0; j < this.listOfVertices[i].edges.length; j++) {
          if (this.listOfVertices[i].edges[j].endVertex.name === edge.endVertex.name) {
            // remove the edge
            this.listOfVertices[i].edges.splice(j, 1);
            return;
          }
        }
      }
    }

  }

  removeVertex(vertex: IVertex) {
    // remove both edges and vertices
    this.listOfVertices = this.listOfVertices.filter(v => v.name !== vertex.name);
    this.listOfVertices.forEach(v => {
      v.edges = v.edges.filter(edge => edge.endVertex.name !== vertex.name);
    });
  }

  // @todo add recursive dfs traversal
  // @note this is depth first search 
  // the function takes a start vertex 
  dfsTraversal(startVertex: IVertex) {
    // keep track of visited vertices
    let visited = {};
    let result = [];
    let stack = [];
    stack.push(startVertex);
    visited[startVertex.name] = true;
    while (stack.length) {
      let currentVertex = stack.pop();
      result.push(currentVertex);
      // for each edge in the current vertex
      currentVertex.edges.forEach(edge => {
        // if the end vertex of the edge has not been visited add it to the stack
        if (!visited[edge.endVertex.name]) {
          stack.push(edge.endVertex);
          visited[edge.endVertex.name] = true;
        }
      });
    }
  }

  // @todo add recursive bfs traversal
  // @note this is breadth first search
  bfsTraversal(startVertex: IVertex) {
    let visited = {};
    let result = [];
    let queue = [];
    queue.push(startVertex);
    visited[startVertex.name] = true;
    while (queue.length) {
      let currentVertex = queue.shift();
      result.push(currentVertex);
      currentVertex.edges.forEach(edge => {
        if (!visited[edge.endVertex.name]) {
          queue.push(edge.endVertex);
          visited[edge.endVertex.name] = true;
        }
      });
    }
  }
}