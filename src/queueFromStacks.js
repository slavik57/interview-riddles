"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StackQueue {
    constructor() {
        this.in = [];
        this.out = [];
    }
    enqueue(item) {
        this.in.push(item);
    }
    dequeue() {
        this._moveToOutStackIfEmpty();
        return this.out.pop();
    }
    _moveToOutStackIfEmpty() {
        if (this.out.length > 0) {
            return;
        }
        while (this.in.length > 0) {
            this.out.push(this.in.pop());
        }
    }
}
const queue = new StackQueue();
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
