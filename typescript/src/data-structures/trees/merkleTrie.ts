import crypto = require('crypto-js');
class TrieNode {
  key: string;
  value: number;
  children: { [key: string]: TrieNode };
  hash: string;
  parent: TrieNode | null;
  constructor(key: string) {
    this.key = key;
    this.value = null;
    this.children = {};
    this.hash = "";
    this.parent = null;
  }
}

class MerkleTrie {
  root: TrieNode;


  constructor() {
    this.root = new TrieNode("");
  }


  insert(key: string, value: number) {
    let currentNode = this.root;
    // @note performing hashing inside the Trie for learning purposes
    // the key is usually hashed outside the Trie
    let hash: string = crypto.SHA256(key).toString();
    // for char in key
    // if char is not in  node.children
    // then create a new node and add it to node.children
    // else
    // node = node.children[char]
    /*
    This loop traverses the given hash string character by character, 
    and for each character, it checks if a child node exists 
    in the current node with the character as the key; 
    if not, it creates a new node, sets its parent to be the current node, 
    adds it as a child to the current node, 
    and then moves to the new child node for the next iteration.
    */
    for (const char of hash) {
      const character = char;
      if (!(character in currentNode.children)) {
        const newNode = new TrieNode(character);
        newNode.parent = currentNode;
        currentNode.children[character] = newNode;
      }
      currentNode = currentNode.children[character];
    }
    currentNode.value = value;
    // calculate the hash of the node
    currentNode.hash = crypto.SHA256(currentNode.value.toString()).toString();

    currentNode.parent = currentNode;
    this.updataParentHashes(currentNode);
    return this;
  }

  /*
  This code calculates
  A hash for a TrieNode's key
  And all its children
   */
  private calculateHash(node: TrieNode): string {

    let hash = crypto.SHA256(node.key).toString();
    for (const child in node.children) {
      hash += this.calculateHash(node.children[child]);
    }
    return crypto.SHA256(hash).toString();
  }

  /*
    Roots intertwine, 
    Parent and child, hand in hand,
    Hashes update, bound.
  This function updates the hash of the current node 
  and all of its ancestor nodes in the trie by traversing up 
  from the given node to the root of the trie, 
  recalculating and setting the hash at each step.
  */
  private updataParentHashes(node: TrieNode) {
    let currentNode = node;
    let parentNode = currentNode.parent;
    while (parentNode !== null) {
      parentNode.hash = this.calculateHash(parentNode);
      currentNode = parentNode;
      parentNode = currentNode.parent;
    }
  }

}

export default MerkleTrie;