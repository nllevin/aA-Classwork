function merge(array1, array2) {
    const merged = [];

    while (array1.length > 0 && array2.length > 0) {
        if (array1[0] <= array2[0]) {
            merged.push(array1.shift());
        } else {
            merged.push(array2.shift());
        }
    }

    return [...merged, ...array1, ...array2];
}

function mergeSort(array) {
    if (array.length <= 1) return array;

    const midIdx = Math.floor(array.length / 2);
    const left = array.slice(0, midIdx);
    const right = array.slice(midIdx);

    return merge(mergeSort(left), mergeSort(right));
}

module.exports = {
    merge,
    mergeSort
};