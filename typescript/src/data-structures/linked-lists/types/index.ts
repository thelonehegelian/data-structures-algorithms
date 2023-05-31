// Singly Linked List interfaces

import DoublyLinkedList from "../doubly-linked-list";

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


export interface IDoublyLinkListNode {
  value: any;
  next: IDoublyLinkListNode | null;
  prev: IDoublyLinkListNode | null;
}

export interface IDoublyLinkedList {
  head: IDoublyLinkListNode | null;
  tail: IDoublyLinkListNode | null;
  length: number;

  push(value: any): DoublyLinkedList | null;
  pop(): DoublyLinkedList | null;
  shift(): DoublyLinkedList | null;
  unshift(value: any): DoublyLinkedList | null;
  get(index: number): IDoublyLinkListNode | null;
  set(index: number, value: any): boolean;
  insert(index: number, value: any): boolean;
  remove(index: number): DoublyLinkedList | null;
}
