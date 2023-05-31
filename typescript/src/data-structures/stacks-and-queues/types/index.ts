export interface IStackNode<T> {
  value: T;
  next: IStackNode<T> | null;
}


export interface IStack<T> {
  top: IStackNode<T> | null;
  length: number;
  push(value: T): IStack<T>;
  pop(): IStack<T> | undefined;
}

export interface IQueueNode<T> {
  value: T;
  next: IQueueNode<T> | null;
}

export interface IQueue<T> {
  front: IQueueNode<T> | null;
  back: IQueueNode<T> | null;
  length: number;

  enqueue(value: T): IQueue<T>;
  dequeue(): IQueue<T> | undefined;
}