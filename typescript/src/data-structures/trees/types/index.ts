export interface INode {
  value: number;
  left: Node | null;
  right: Node | null;
}

export interface IBinaryTree {
  root: Node | null;
  insert(value: number): IBinaryTree | undefined;
  find(value: number): boolean;
  bfs(value: number): boolean;
}
