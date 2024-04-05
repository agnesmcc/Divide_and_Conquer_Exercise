function countZeroes(arr) {
    let left = 0; // First index in array
    let right = arr.length - 1; // Last index in array
    let count = 0; // Either we found some number of zeros or we found none

    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // index of middle item

        if (arr[mid] === 0) { // check if the mid is a zero
            count = arr.length - mid; // if it is, then count is all the zeros to the right
            right = mid - 1; // now set right index to the index right before mid
        } else {
            left = mid + 1;
        }
    }

    return count;
}

module.exports = countZeroes