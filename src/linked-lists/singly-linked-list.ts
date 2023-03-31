import { ISinglyLinkedList, ISinglyLinkedListNode } from './types';

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
  }

  shift(): SinglyLinkedList<T> | undefined {
    if (!this.head) return this;
    this._shift();
  }

  unshift(value: T): SinglyLinkedList<T> {
    this._unshift(value);
    return this;
  }

  private _unshift(value: T) {}

  private _shift(): SinglyLinkedListNode<T> | undefined {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
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
  private _pop(): SinglyLinkedListNode<T> | null {
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
    return currentNode;
  }
}

// create and push 10 values to the list
const list = new SinglyLinkedList();
for (let i = 0; i < 10; i++) {
  list.push(i);
}
console.log(list.length);
list.shift();
console.log(list.length);
list.shift();
console.log(list.length);

export default SinglyLinkedList;
