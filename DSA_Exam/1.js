// Remove duplicates from a sorted array in-place

function removeDuplicates(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (result[result.length - 1] !== arr[i]) {
            result.push(arr[i]);
        }
    }

    return result;
}

let nums = [1, 1, 2, 2, 3, 4, 4, 5];

let uniqueArray = removeDuplicates(nums);

console.log(uniqueArray);