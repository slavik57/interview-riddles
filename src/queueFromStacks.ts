export interface Stack<T> {
  push(item: T): void;
  pop(): T;
  readonly length: number;
}

class StackQueue<T> {
  private in: Stack<T>;
  private out: Stack<T>;

  constructor() {
    this.in = [];
    this.out = [];
  }

  public enqueue(item: T): void {
    this.in.push(item);
  }

  public dequeue(): T{
    this._moveToOutStackIfEmpty();
    return this.out.pop();
  }

  private _moveToOutStackIfEmpty(): void {
    if (this.out.length > 0){
      return;
    }

    while(this.in.length > 0){
      this.out.push(this.in.pop());
    }
  }
}

const queue = new StackQueue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());