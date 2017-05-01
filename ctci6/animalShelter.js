class Node {
    constructor(value, type) {
      this.type = type;
      this.value = value;
      this.next = null;
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

    add(val, type) {
        let node = new Node(val, type);
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
        if (oldHead === null) {
          return undefined;
        } else {
          if (this.list.listLength === 1) {
              this.list.head = null;
              this.list.tail = null;
          } else {
              this.list.head = this.list.head.next;
          }
          this.list.listLength--;
          return oldHead.value;
        }
    }

    remove(type) {
        let current = this.list.head;
        let adopted;
        if (current.type === type) {
          adopted = current;
          this.removeHead();
        } else {
           while (current && current.next && current.next.type !== type) {
            current = current.next;
          }
    
          adopted = current.next;

          current.next = current.next.next;
        }

        return adopted.value;
    }
}

//Time, N is current number of animals
// enqueue O(1), enqueueCat O(N), dequeueDog O(N)
// dequeueAny O(1), dequeueCat O(N), dequeueDog O(N)
//Space
// O(N)
export class AnimalShelter {

    constructor() {
        this.adoptionLine = new MyLinkedList();
    }

    enqueue(animal) {
        this.adoptionLine.add(animal, 'any');
    }

    enqueueCat(animal) {
        this.adoptionLine.add(animal, 'cat');
    }

    enqueueDog(animal) {
        this.adoptionLine.add(animal, 'dog');
    }

    dequeueAny() {
        return this.adoptionLine.removeHead();
    }

    dequeueDog() {
        return this.adoptionLine.remove('dog');
    }

    dequeueCat() {
        return this.adoptionLine.remove('cat');
    }
}
