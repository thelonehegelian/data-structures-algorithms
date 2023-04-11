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
}

export default DoublyLinkedList;
