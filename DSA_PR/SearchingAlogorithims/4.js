// Find the last occurrence of a target element in a sorted array.

function lastOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            result = mid;     // store index
            left = mid + 1;   // move right to find last occurrence
        } 
        else if (arr[mid] < target) {
            left = mid + 1;
        } 
        else {
            right = mid - 1;
        }
    }

    return result;
}

const arr = [1,2,3,4,5,6,6,7,8];

console.log(lastOccurrence(arr,6))