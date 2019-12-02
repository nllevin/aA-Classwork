// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val, next = null) {
        this.value = val;
        this.next = next;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.tail = null;
        this.head = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const newTail = new Node(val);
        const oldTail = this.tail;
        if (!this.length) {
            this.head = newTail;
        } else {
            oldTail.next = newTail;
        }
        this.tail = newTail;
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.length) return undefined;

        let newTail;
        let oldTail;
        if (this.length === 1) {
            oldTail = this.tail;
            this.head = null;
            this.tail = null;
        } else {
            oldTail = this.head;
            while (oldTail.next) {
                newTail = oldTail;
                oldTail = oldTail.next;
            }
            this.tail = newTail;
            this.tail.next = null;
        }
        this.length--;
        return oldTail;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        const newHead = new Node(val);
        const oldHead = this.head;
        if (!this.length) {
            this.tail = newHead;
        } else {
            newHead.next = oldHead;
        }
        this.head = newHead;
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.length) return undefined;

        const newHead = this.head.next;
        const oldHead = this.head;
        if (this.length === 1) {
            this.tail = null
        }
        this.head = newHead;
        this.length--;
        return oldHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let currNode = this.head;
        if (currNode.value === target) return true;
        while (currNode.next) {
            currNode = currNode.next;
            if (currNode.value === target) return true;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index > this.length - 1 || index < 0) return null;
        let currNode = this.head;
        for (let i = 0; i < index; i++) {
            currNode = currNode.next;
        }
        return currNode;
    }

    // TODO: Implement the set method here
    set(index, val) {
        const node = this.get(index);
        if (node) {
            node.value = val;
            return true
        } else {
            return false;
        }
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index > this.length - 1 || index < 0) {
            return false;
        } else if (index === 0) {
            this.addToHead(val);
        } else {
            const neighborNode = this.get(index - 1);
            const newNode = new Node(val, neighborNode.next);
            neighborNode.next = newNode;
            this.length++;
        }
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index > this.length - 1 || index < 0) {
            return undefined;
        } else if (index === 0) {
            return this.removeHead();
        } else if (index === this.length - 1) {
            return this.removeTail();
        } else {
            const oldNeighbor = this.get(index - 1);
            const removedNode = oldNeighbor.next;
            oldNeighbor.next = removedNode.next;
            this.length--;
            return removedNode;
        }
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
