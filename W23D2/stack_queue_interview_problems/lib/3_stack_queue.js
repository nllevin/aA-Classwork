// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(params) {
        this.value = params.value;
        this.next = params.next;
    }
}

class Stack {
    // TODO: Implement the Stack class!
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    pop() {
        if (!this.top) return null;
        const poppedNode = this.top;
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return poppedNode;
    }

    push(params) {
        const newNode = new Node(params);
        if (!this.top) {
            this.bottom = newNode;
        } else {
            newNode.next = this.top;
        }
        this.top = newNode;
        return ++this.length;
    }

    size() {
        return this.length;
    }
}

class StackQueue {
    // TODO: Implement the StackQueue class!
    constructor() {
        this.inStack = new Stack();
        this.outStack = new Stack();
        this.front = null;
        this.back = null;
    }

    dequeue() {
        if (!this.size()) return null;

        const dequeued = this.outStack.pop();
        if (dequeued) {
            if (!this.size()) {
                this.front = null;
                this.back = null;
            } else {
                this.front = this.front.next;
            }
            return dequeued;
        } else {
            while (this.inStack.size()) {
                this.outStack.push(this.inStack.pop())
            }
            return this.dequeue();
        }
    }

    enqueue(val) {
        const newNode = new Node({ value: val });
        if (!this.back) {
            this.front = newNode;
        } else {
            this.back.next = newNode;
        }
        this.back = newNode;
        this.inStack.push(newNode);
        return this.size();
    }

    size() {
        return this.inStack.size() + this.outStack.size();
    }
};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
