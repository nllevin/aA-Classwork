function countingSort(arr, max) {
    const table = new Array(max + 1).fill(0);
    const result = [];
    arr.forEach(el => {
        table[el] = table[el] + 1;
    });
    table.forEach((count, el) => {
        for (let i = 0; i < count; i++) {
            result.push(el);
        }
    });
    return result;
}


module.exports = {
    countingSort
};