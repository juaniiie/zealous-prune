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
// N is the length of stack, M is the lenth of temp 
// time O(N + M), or O(N) since the biggest M can be is N
// space O(1)
function sortStack(stack) {
    let temp = [];

    function insertIndex(val) {
      let le = temp.length;
      for (let i = 0; i <= le ; i++) {
          if (val <= temp[0]) {
              return 0;
          } else if (val >= temp[le]) {
            return le;
          } else if (val >= temp[i] && val <= temp[i+1]) {
              return i + 1;
          } 
      }
    }
    
    while (!stack.isEmpty()) {
      let index = insertIndex(stack.peek());
      if (index === undefined) {
        temp.push(stack.pop());
      } else if (index === 0) {
        temp.unshift(stack.pop());
      } else if(index === temp.length) {
        temp.push(stack.pop())
      } else {
        temp.splice(index, 0, stack.pop());
      }
    }
    
    while (temp.length > 0) {
        stack.push(temp.pop());
    }

    return stack;
}