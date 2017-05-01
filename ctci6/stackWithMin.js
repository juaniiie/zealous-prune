/**
 * In progress
 * time for pop, push and min O(1);
 * space: O(1) or O(n) n is number of nodes
 */
class minStack {
    constructor() {
        this.list = {};
        this.leng = 0;
        this.mins = {};
        this.minsLength = 0;
    }

    popMin(value) {
        if (this.minsLength > 0 && value === this.mins[this.minsLength]) {
            delete this.mins[this.minsLength];
            this.minsLength--;
        }
    }

    pushMin(value) {
        if (!this.minsLength) {
            this.mins[this.minsLength + 1] = value;
            this.minsLength++;
        } else if (value < this.mins[this.minsLength]) {
            this.mins[this.minsLength + 1] = value;
            this.minsLength++;
        }

        //console.log('min list after add', this.mins);
    }

    push(value) {
        this.pushMin(value);
        this.list[this.leng + 1] = value;
        this.leng++;
        //console.log('stack after pushed', this.list);
    }

    pop() {
        let poped = this.list[this.leng];
        this.popMin(poped);
        delete this.list[this.leng];
        this.leng--;
        // console.log('stack after poped', this.list);
        // console.log('poped value', poped);
        return poped;
    }

   isEmpty() {
      return this.leng === 0;
    }

    min() {
      if (!!this.leng) {
        return this.mins[this.minsLength];
      }
    }
}

// check
let myStack = new minStack();
myStack.push(8);
myStack.push(5);
myStack.push(18);
myStack.min();
myStack.push(1);
myStack.min();
myStack.pop();
myStack.min();