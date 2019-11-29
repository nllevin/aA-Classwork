function quickSort(array) {
    if (array.length <= 1) return array;

    const pivotIdx = Math.floor(Math.random() * array.length);
    const pivot = array.splice(pivotIdx, 1)[0];
    const leftHalf = array.filter(el => el <= pivot);
    const rightHalf = array.filter(el => el > pivot);
    return [
        ...quickSort(leftHalf),
        pivot,
        ...quickSort(rightHalf)
    ];
}


module.exports = {
    quickSort
};