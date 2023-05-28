class MerkleTrieNode {
  value: number | null;
  children: {};
  endOfString: boolean;

  constructor(value: number | null) {
    this.value = value;
    this.children {};
    this.endOfString = false;
  }
}

class MerkleTrie {
root: MerkleTrieNode;
  constructor() {
    this.root = new MerkleTrieNode(null);
  }

}
