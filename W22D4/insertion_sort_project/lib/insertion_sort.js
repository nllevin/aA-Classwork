function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const insertEl = arr[i];
        let j = i - 1;
        for (j; j >= 0 && insertEl < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = insertEl;
    }
    return arr;
}

module.exports = {
    insertionSort
};