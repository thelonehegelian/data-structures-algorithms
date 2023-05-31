export interface IBinaryTreeNode {
  value: number;
  left: IBinaryTreeNode | null;
  right: IBinaryTreeNode | null;
}


export interface IBinaryTree {
  root: IBinaryTreeNode | null;
  insert(value: number): IBinaryTree | undefined;
  find(value: number): boolean | IBinaryTreeNode;
  bfs(value: number): boolean | void;
  dfsPreOrder(value: number): boolean | void;
  dfsPostOrder(value: number): boolean | void;
  dfsInOrder(value: number): boolean | void;
}
export interface ITrieNode {
  key: string;
  value: number;
  children: { [key: string]: ITrieNode };
  hash: string;
  parent: ITrieNode | null;
}


export interface IMerkleTrie {
  root: ITrieNode;
  insert(key: string, value: number): void;
  delete(key: string): void;
  get(key: string): boolean | ITrieNode;
}