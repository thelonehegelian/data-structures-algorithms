class Nowd<T> {
  value: T;
  next: Nowd<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class Stack<T> {
  top: Nowd<T> | null;
  length: number;

  constructor() {
    this.top = null;
    this.length = 0;
  }

  push = (value: T): Stack<T> => {
    const newNode = new Nowd<T>(value);
    // if the stack is empty, set the top to the new node
    if (!this.top) {
      this.top = newNode;
    } else {
      // otherwise, set the new node's next property to be the current top
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  };

  pop = (): Stack<T> | undefined => {
    if (!this.top) return undefined;
    const currentTop = this.top;
    // set the top to be the current top's next property
    this.top = currentTop.next;
    this.length--;
  };



}


export default Stack;