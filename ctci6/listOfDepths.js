class TreeNode {
  constructor(value) {
    this.val = value;
    this.parent = this.left = this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let node = new TreeNode(value);
    if (!this.root) {
      this.root = node;
    }
    else {
      let n = this.root,
        branch;
      while (n) {
        branch = value < n.val ? 'left' : 'right';
        if (!n[branch]) {
          break;
        }
        n = n[branch];
      }
      node.parent = n;
      n[branch] = node;
    }
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.val = value;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  prepend(value) {
    if (!this.head) {
      this.head = this.tail = new LinkedListNode(value);
    }
    else {
      this.head = new LinkedListNode(value, this.head);
    }
  }

  append(value) {
    if (!this.head) {
      this.head = this.tail = new LinkedListNode(value);
    }
    else {
      this.tail = this.tail.next = new LinkedListNode(value);
    }
  }

  toArray() {
    let arr = [],
      node = this.head;
    while (node) {
      arr.push(node.val);
      node = node.next;
    }
    return arr;
  }
}


// solution
// O(D^2) where d is the number of nodes at bottom level
// O(D) D is number of nodes on bottom level
function listTreeByDepthOrder(tree) {
    let lists = [];

    if (tree.root) {
  
        let depth = 0;
        let q = [];
        
        q.push(tree.root)

        while (q.length) {
            let children = [];
            for (let i = 0; i < q.length; i++) {
              let node = q[i];
                if (!lists[depth]) {
                    lists[depth] = new LinkedList();
                }

                lists[depth].append(node.val);
                
                if ( node.left ) {
                  children.push(node.left);
                }
                
                if ( node.right ) {
                  children.push(node.right);
                }
                
            }

            q = children;

            depth++;
        } 
    }  

    return lists;
}

let sample = new Tree();

[1,2,4].forEach(function(value) {
  sample.add(value);
});

listTreeByDepthOrder(sample);

