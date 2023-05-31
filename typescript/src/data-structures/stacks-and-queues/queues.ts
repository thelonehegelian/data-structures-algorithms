import { IQueue, IQueueNode } from "./types";
class QueueNode<T> implements IQueueNode<T>{
  value: T;
  next: QueueNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}




class Queue<T> implements IQueue<T> {
  front: IQueueNode<T> | null;
  back: IQueueNode<T> | null;
  length: number;

  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue = (value: T): IQueue<T> => {
    const newNode = new QueueNode<T>(value);

    if (!this.front) {
      this.front = newNode;
      this.back = this.front;
    }
    else {
      if (!this.back) return this;
      this.back.next = newNode;
      this.back = newNode;

    }
    this.length++;
    return this;
  }

  dequeue = (): IQueue<T> | undefined => {
    if (!this.front) return undefined;
    const currentFront = this.front;
    this.front = currentFront.next;
    this.length--;
    return this;
  }
}

export default Queue;