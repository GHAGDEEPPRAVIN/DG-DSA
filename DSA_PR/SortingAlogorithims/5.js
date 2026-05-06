// 5. Implement Quick Sort.

function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];
    let left = [], right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr = [5,8,9,4,2,3,1,4];

let sortedArr = quickSort(arr);
console.log(sortedArr);