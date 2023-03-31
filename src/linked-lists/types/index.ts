// Singly Linked List interfaces

export interface ISinglyLinkedListNode<T> {
  value: T;
  next: ISinglyLinkedListNode<T> | null;
}

export interface ISinglyLinkedList<T> {
  head: ISinglyLinkedListNode<T> | null;
  tail: ISinglyLinkedListNode<T> | null;
  length: number;
  push(value: T): ISinglyLinkedList<T>;
  pop(): ISinglyLinkedList<T> | undefined;
}
