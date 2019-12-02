function binarySearch(array, target, start = 0, end = array.length - 1) {
    if (start > end) return false;

    const midIdx = Math.floor((end + start) / 2);
    if (target < array[midIdx]) {
        return binarySearch(array, target, start, midIdx - 1);
    } else if (target > array[midIdx]) {
        return binarySearch(array, target, midIdx + 1, end);
    } else {
        return true;
    }
}

function binarySearchIndex(array, target, start = 0, end = array.length - 1) {
    if (start > end) return -1;

    const midIdx = Math.floor((end + start) / 2);
    if (target < array[midIdx]) {
        return binarySearchIndex(array, target, start, midIdx - 1);
    } else if (target > array[midIdx]) {
        return binarySearchIndex(array, target, midIdx + 1, end);
    } else {
        return midIdx;
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};