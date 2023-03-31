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
  shift(): ISinglyLinkedList<T> | undefined;
  unshift(value: T): ISinglyLinkedList<T>;
  get(index: number): ISinglyLinkedListNode<T> | null;
  set(index: number, value: T): boolean;
  insert(index: number, value: T): boolean;
}
