class Nowd<T> {
  value: T;
  next: Nowd<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}


class Queue<T> {
  front: Nowd<T> | null;
  back: Nowd<T> | null;
  length: number;

  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue = (value: T): Queue<T> => {
    const newNode = new Nowd<T>(value);

    if (!this.front) {
      this.front = newNode;
      this.back = this.front;
    }
    else  {
      if (!this.back) return this;
      this.back.next = newNode;
      this.back = newNode;
     
    }
    this.length++;
    return this;
  }

  dequeue = (): Queue<T> | undefined => {
    if (!this.front) return undefined;
    const currentFront = this.front;
    this.front = currentFront.next;
    this.length--;
    return this;
  }
}

export default Queue;