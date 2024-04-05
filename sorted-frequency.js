function sortedFrequency(arr, num) {
    function findFirst(arr, num) {
        let start = 0;
        let end = arr.length - 1;
        let result = -1;

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);

            if (arr[mid] === num) {
                result = mid;
                end = mid - 1;
            } else if (arr[mid] < num) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        return result;
    }

    function findLast(arr, num) {
        let start = 0;
        let end = arr.length - 1;
        let result = -1;

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);

            if (arr[mid] === num) {
                result = mid;
                start = mid + 1;
            } else if (arr[mid] < num) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        return result;
    }

    let firstIndex = findFirst(arr, num);
    let lastIndex = findLast(arr, num);

    if (firstIndex === -1 || lastIndex === -1) {
        return -1;
    }

    return lastIndex - firstIndex + 1;
}
module.exports = sortedFrequency