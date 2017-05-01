class jStack {
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
        return undefined;
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

// Solution
// Time: push O(1), pop O(1), popAt O(N)
// Additional space: push O(1), pop O(1), popAt O(M) 
class StackOfStacks {
    
    constructor(max) {
        if (max === undefined) {
            throw new Error('maxSize argument is required');
        }
        this.max = max;
        this.stacks = {};
        this.stacksLeng = 0;
        this.items =  0;
    }

    makeNewStack() {
        return this.items % this.max === 0;
    }

    push(value) {
        if (this.makeNewStack() || this.stacksLeng === 0) {
            let nStack = new jStack();
            nStack.push(value);
            this.items++;
            this.stacks[this.stacksLeng + 1] = nStack;
            this.stacksLeng++;
        } else {
            this.stacks[this.stacksLeng].push(value);
            this.items++;
        }

    }

    pop() {
      if (this.stacks[this.stacksLeng].isEmpty()) {
            delete this.stacks[this.stacksLeng];
            this.stacksLeng--;
      }
      let poped = this.stacks[this.stacksLeng].pop();
        this.items--;
        return poped;
    }

    isEmpty() {
        return this.stacksLeng === 0;
    }

    peek() {
        return this.stacks[this.stacksLeng].peek();
    }

    forwardStacks(index) {
      let poped = this.stacks[index].pop();
      this.items = this.items - 1;
      let tempStack = new jStack();
      while (this.stacksLeng > index) {
        let value = this.pop();
        tempStack.push(value);
      }

      while(!tempStack.isEmpty()) {
        let v = tempStack.pop();
        this.push(v);
      }
      return poped;
    }
    
    popAt(index) {
      if (index < 1 || index > this.stacksLeng) {
        throw new Error('stack number is invalid');
      }
      return this.forwardStacks(index);
    }
}