class MyStack {
    constructor() {
        this.list = {};
        this.leng = 0;
    }

    push(value) {
        this.list[this.leng + 1] = value;
        this.leng++;
    }

    pop() {
      if (this.leng === 0) {
        return null;
      } else {
        let poped = this.list[this.leng];
        delete this.list[this.leng];
        this.leng--;
        return poped;
      }
    }

   isEmpty() {
      return this.leng === 0;
    }

    peek() {
        return this.list[this.leng];
    }
}

//solution
// time N is the current size of queue
    //enqueue: O(1), dequeue O(N), peek O(N), isEmpty O(1)
// space O(N)

class MyQueue {

    constructor() {
        this.inStack = new MyStack();
        this.outStack = new MyStack();
    }

    returnToIn() {
        while(!this.outStack.isEmpty()) {
            let value = this.outStack.pop();
            this.inStack.push(value);
        }
    }

    moveToOut() {
        while(!this.inStack.isEmpty()) {
            let value = this.inStack.pop();
            this.outStack.push(value);
        }
    }

    enqueue(item) {
        this.inStack.push(item);
    }

    dequeue() {
        if (this.inStack.isEmpty()) {
            throw new Error('queue is empty');
        } else {
        this.moveToOut();
        let value = this.outStack.pop();
        this.returnToIn();
        return value;   
        }
    }

    peek() {
        if(this.inStack.isEmpty()) {
            return null;
        } else {
            this.moveToOut();
            let value = this.outStack.peek();
            this.returnToIn();
            return value;
        }
    }

    isEmpty() {
       return this.inStack.isEmpty();
    }
}