function linkedListToArray(list) {
  let arr = [],
    node = list;

  while (node !== null) {
    arr.push(node.val);
    node = node.next;
  }

  return arr;
}

function createNode(val, next) {
  return {
    val: val,
    next: next || null
  };
}

function arrayToLinkedList(arr) {
  if (arr.length === 0) {
    return null;
  }

  let list = null;
  for (let i = arr.length - 1; i >= 0; --i) {
    list = createNode(arr[i], list);
  }

  return list;
}

function getLength(list) {
  let length = 0;
  while (list) {
    list = list.next;
    ++length;
  }
  return length;
}

function createLinkedList() {
  return {
    head: null,
    tail: null
  };
}

function pushSingle(list, value) {
  let node = createNode(value);
  if (list.head) {
    list.tail.next = node;
    list.tail = node;
  }
  else {
    list.head = node;
    list.tail = node;
  }
}

function push(list) {
  for (let i = 1; i < arguments.length; ++i) {
    pushSingle(list, arguments[i]);
  }
}

// Solution
// with tail is k = 1

function getLinkedListLength(list) {
    let _length = 1;
    let current = list;

    while(current.next !== null) {
      _length++;
      current = current.next;
    }
    return _length;
}

function kthToLastLength(list, k) {
    if (!list) {
        throw new Error('invalid list');
    }

    let _length = getLinkedListLength(list);
    let skip = _length - k;
    
    if (skip < 0) {
        throw new Error('list is not long enough');
    }

    if (k === _length) {
        return list.val;
    }

    let current = list;

    while(skip !== 0) {
        current = current.next;
        skip--;
    }
    return current.val;
}


// let arr = [8,5,1];
// let list1 = arrayToLinkedList(arr);

// kthToLastLength(list1, 3);
