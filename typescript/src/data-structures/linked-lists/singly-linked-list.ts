/**
 * A singly linked list is a data structure that contains a head, tail, and length property.
 * Linked lists consist of nodes, and each node has a value and a pointer to another node or null.
 * The simplest implementation of a singly linked list is a singly linked list with a head and tail.
 * The head is the first node in the list, and the tail is the last node in the list.
 * This implementation is a singly linked list with a head, tail, and length property.
 * This implementation also provides a push, pop, shift, unshift, get, and set method.
 * This implementation also allows for getting a node at a specific index and setting a node at a specific index
 * @todo make a circular linked list
 * @todo refactor
 */
import { ISinglyLinkedList, ISinglyLinkedListNode } from './types';

/**
 * @class SinglyLinkedListNode
 * @implements {ISinglyLinkedListNode<T>}
 * @template T
 * @param {T} value
 * @memberof SinglyLinkedListNode
 */
class SinglyLinkedListNode<T> implements ISinglyLinkedListNode<T> {
  value: T;
  next: ISinglyLinkedListNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList<T> implements ISinglyLinkedList<T> {
  head: SinglyLinkedListNode<T> | null;
  tail: SinglyLinkedListNode<T> | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value: T): SinglyLinkedList<T> {
    this._push(value);
    return this;
  }

  pop(): SinglyLinkedList<T> | undefined {
    // @todo move this to _pop()
    if (!this.head) return this;
    this._pop();
    return this;
  }

  shift(): SinglyLinkedList<T> | undefined {
    if (!this.head) return this;
    this._shift();
    return this;
  }
  unshift(value: T): SinglyLinkedList<T> {
    this._unshift(value);
    return this;
  }
  // get a node at a specific index
  get(index: number): SinglyLinkedListNode<T> | null {
    return this._get(index);
  }
  // update the value of a node at a specific index
  set(index: number, value: T): boolean {
    return this._set(index, value);
  }

  // insert a node at a specific index
  // @audit there might be a bug here
  insert(index: number, value: T): boolean {
    return this._insert(index, value);
  }

  // remove a node at a specific index
  remove = (index: number): SinglyLinkedList<T> | undefined => {
    return this._remove(index);
  };

  // reverse the linked list in place
  reverse = (): SinglyLinkedList<T> | undefined => {
    this._reverse();
    return this;
  };
  private _reverse = () => {
    if (!this.head) return;
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let next: SinglyLinkedListNode<T> | null = null;
    let prev: SinglyLinkedListNode<T> | null = null;
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next!; // non-null assertion
    }
    return this;
  };

  private _remove(index: number): SinglyLinkedList<T> | undefined {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    let nextNode = this.get(index + 1);
    //@note above is the same as removed = previousNode.next; previousNode.next = removed.next;

    if (!previousNode) return undefined;
    if (!nextNode) return undefined;
    previousNode.next = nextNode;
    this.length -= 1;
    return this;
  }

  private _insert(index: number, value: T) {
    if (index < 0 || index > this.length) return false;
    // if the index is the same as the length, push a new node to the end of the list
    if (index === this.length) return !!this.push(value);
    // if the index is 0, unshift a new node to the start of the list i.e. set the new node as the head
    if (index === 0) return !!this.unshift(value);
    let newNode = new SinglyLinkedListNode(value);
    let previousNode = this.get(index - 1);
    if (!previousNode) return false; // null check
    let temp = previousNode.next;
    previousNode.next = newNode;
    newNode.next = temp;
    this.length += 1;
    return true;
  }
  private _set(index: number, value: T): boolean {
    // let newNode = new SinglyLinkedListNode(value);
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  private _get(index: number): SinglyLinkedListNode<T> | null {
    if (index < 0 || index >= this.length) return null;
    let position = 0;
    let currentNode = this.head;
    while (currentNode && position !== index) {
      currentNode = currentNode.next;
      position++;
    }
    return currentNode;
  }

  private _unshift(value: T) {
    let newNode = new SinglyLinkedListNode(value);
    // if the list is empty, set the head and tail to the new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }

  private _shift(): SinglyLinkedListNode<T> | undefined {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }
  }

  private _push(value: T) {
    // create a new node with the value
    const newNode = new SinglyLinkedListNode(value);
    // if there is no head or tail, set the head and tail to the new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.tail) {
      // set the next property on the tail to be the new node
      this.tail.next = newNode;
      // set the tail property on the list to be the newly created node
      this.tail = newNode;
    }
    this.length += 1;
  }
  private _pop() {
    let currentNode = this.head;
    let penultimateNode: ISinglyLinkedListNode<T>;
    while (currentNode) {
      penultimateNode = currentNode;
      currentNode = currentNode.next;
      if (currentNode?.next === null) {
        penultimateNode.next = null;
        this.tail = penultimateNode;
        this.length -= 1;
      }
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
    }
  }
}

// create and push 10 values to the list
const list = new SinglyLinkedList();
for (let i = 0; i < 10; i++) {
  list.push(i);
}

export default SinglyLinkedList;
