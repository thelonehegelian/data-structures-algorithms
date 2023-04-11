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
    console.log(foundNode);
    console.log(this.length);
    return foundNode;
  };
}

export default DoublyLinkedList;
