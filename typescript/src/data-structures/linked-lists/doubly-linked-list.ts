class DoublyLinkedListNode {
  value: any;
  next: DoublyLinkedListNode | null;
  prev: DoublyLinkedListNode | null;
  constructor(value: any) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head: DoublyLinkedListNode | null;
  tail: DoublyLinkedListNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push = (value: any): DoublyLinkedList => {
    const newNode = new DoublyLinkedListNode(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      newNode.prev = null;
      newNode.next = null;
      this.length++;
      return this;
    }
    if (this.tail) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  };

  pop = (): DoublyLinkedList | null => {
    if (this.length === 0) return null;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // get the tail, get the prev node from the tail
      let newTail = this.tail?.prev;
      if (newTail) {
        newTail.next = null;
        this.tail = newTail;
      }
    }
    this.length--;
    return this;
  };
  shift = (): DoublyLinkedList | null => {
    if (this.length === 0) return null;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newHead = this.head?.next;
      if (newHead) {
        newHead.prev = null;
        this.head = newHead;
      }
    }
    this.length--;
    return this;
  };
  unshift = (value: any): DoublyLinkedList => {
    const newNode = new DoublyLinkedListNode(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      newNode.prev = null;
      newNode.next = null;
      this.length++;
      return this;
    }
    let oldHead = this.head;
    if (oldHead) {
      oldHead.prev = newNode;
      newNode.next = oldHead;
      newNode.prev = null;
    }
    this.length++;
    return this;
  };
  get = (index: number): DoublyLinkedListNode | null => {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let count = 1;
    let foundNode: null | DoublyLinkedListNode = null;
    while (current) {
      if (count === index) {
        foundNode = current;
        break;
      }
      current = current.next;
      count++;
    }
    return foundNode;
  };
  set = (index: number, value: any): boolean => {
    if (index < 0 || index >= this.length) return false;
    let current = this.head;
    let count = 1;
    let valueSet = false;
    while (current) {
      if (count === index) {
        current.value = value;
        valueSet = true;
        break;
      }
      current = current.next;
      count++;
    }
    return valueSet;
  };
  // insert, adds the node before the specified index
  insert = (index: number, value: any): boolean => {
    if (index < 0 || index >= this.length || index === 0) return false;
    // if index is for the first node, use unshift
    if (index === 1) {
      this.unshift(value);
      return true;
    }
    // if index is for the last node, use push
    if (index === this.length) {
      this.push(value);
      return true;
    }
    // if index is for any other node, use get to get the node at the index
    const newNode = new DoublyLinkedListNode(value);
    const prevNode = this.get(index - 1);
    const nextNode = this.get(index);
    if (prevNode && nextNode) {
      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = nextNode;
      nextNode.prev = newNode;
      this.length++;
      return true;
    }
    return false;
  };
}

export default DoublyLinkedList;
