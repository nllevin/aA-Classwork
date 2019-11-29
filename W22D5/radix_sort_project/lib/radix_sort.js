function numDigits(num) {
    return num === 0 ? 1 : Math.floor(Math.log10(num)) + 1;
}

function getMaxDigits(nums) {
    return Math.max(...nums.map(num => numDigits(num)));
}

function getDigitFrom(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function radixSort(arr) {
    if (!Array.isArray(arr)) return null;

    const maxDigits = getMaxDigits(arr);
    let auxArr = arr.slice();
    
    for (let place = 0; place < maxDigits; place++) {
        const buckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < arr.length; i++) {
            const digit = getDigitFrom(auxArr[i], place);
            buckets[digit].push(auxArr[i]);
        }
        auxArr = [].concat(...buckets);
    }

    return auxArr;
}

module.exports = {
    radixSort
};