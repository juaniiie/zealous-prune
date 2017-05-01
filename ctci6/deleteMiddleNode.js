function deleteMiddleNode(node) {
    if (!node || !node.next) {
        throw new Error('invalid node');
    }
    node.val = node.next.val;
    node.next = node.next.next
}

// time O(1)
// space O(1)