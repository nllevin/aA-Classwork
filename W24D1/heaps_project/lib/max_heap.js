class MaxHeap {
    constructor() {
        this.array = [null];
    }

    deleteMax() {
        if (this.array.length === 1) return null;
        if (this.array.length === 2) return this.array.pop();
        
        const max = this.array[1];
        this.array[1] = this.array.pop();
        this.siftDown(1);
        return max;
    }

    getLeftChild(idx) {
        return 2 * idx;
    }

    getRightChild(idx) {
        return 2 * idx + 1;
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }

    siftDown(idx) {
        const arr = this.array;

        const leftIdx = this.getLeftChild(idx);
        const rightIdx = this.getRightChild(idx);

        const leftVal = arr[leftIdx] || -Infinity;
        const rightVal = arr[rightIdx] || -Infinity;

        if (arr[idx] >= leftVal && arr[idx] >= rightVal) return;

        const swapIdx = leftVal > rightVal ? leftIdx : rightIdx;
        [arr[idx], arr[swapIdx]] = [arr[swapIdx], arr[idx]];

        this.siftDown(swapIdx);
    }

    siftUp(idx) {
        if (idx === 1) return;

        const arr = this.array;
        const parentIdx = this.getParent(idx);
        if (arr[idx] > arr[parentIdx]) {
            [arr[idx], arr[parentIdx]] = [arr[parentIdx], arr[idx]];
            this.siftUp(parentIdx);
        }
    }
}

module.exports = {
    MaxHeap
};