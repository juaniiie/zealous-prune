class Node {
    constructor(value) {
        this.node = {
          value: value,
          next: null
        };
    }
}

class MyLinkedList {
    
    constructor() {
        this.list = {
            head: null,
            tail: null,
            listLength: 0
        };
    }

    add(val) {
        let node = new Node(val);
        if (!this.list.head) {
            this.list.head = node
            this.list.tail = this.list.head;
        } else {
            this.list.tail.next = node;
            this.list.tail = node;
        }
        this.list.listLength++;
    }

    removeHead() {
        let oldHead = this.list.head;
        if (this.list.listLength === 1) {
            this.list.head = null;
            this.list.tail = null;
        } else {
            this.list.head = this.list.head.next;
        }
        this.list.listLength--;
        return oldHead;
    }
}
