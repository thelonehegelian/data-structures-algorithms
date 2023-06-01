export interface IVertex {
  data: any;
  name: string;
  edges: IEdge[];
}

export interface IEdge {
  startVertex: IVertex;
  endVertex: IVertex;
}


export interface IGraph {
  listOfVertices: IVertex[];

  addVertex(vertex: IVertex): void;
  addEdge(edge: IEdge): void;
  removeEdge(edge: IEdge): void;
  removeVertex(vertex: IVertex): void;
  dfsTraversal(startVertex: IVertex): void;
  bfsTraversal(startVertex: IVertex): void;
}

export interface IWeightedVertex extends IVertex {
  weight: number;
  edges: IWeightedEdge[]; // edges are also weighted in a weighted graph
}


export interface IWeightedEdge extends IEdge {
  weight: number;
}