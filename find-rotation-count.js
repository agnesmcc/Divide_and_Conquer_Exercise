function findRotationCount(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        // If the array is already sorted, return 0
        if (arr[start] <= arr[end]) {
            return start;
        }

        let mid = Math.floor((start + end) / 2);
        let prev = (mid + arr.length - 1) % arr.length;
        let next = (mid + 1) % arr.length;

        // If the mid element is smaller than its neighbors, it is the rotation point
        if (arr[mid] <= arr[prev] && arr[mid] <= arr[next]) {
            return mid;
        }

        // If the mid element is greater than the start element, the rotation point is on the right side
        if (arr[mid] >= arr[start]) {
            start = mid + 1;
        } else { // Otherwise, the rotation point is on the left side
            end = mid - 1;
        }
    }

    return -1; // If the array is not rotated
}

module.exports = findRotationCount