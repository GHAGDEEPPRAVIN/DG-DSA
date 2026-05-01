// 5. Merge two sorted arrays without using extra space. 

function nextGap(gap) {
    if (gap <= 1) return 0;
    return (gap / 2) + (gap % 2);
}

function merge(arr1, arr2) {
    let n = arr1.length;
    let m = arr2.length;

    let gap = n + m;

    for (gap = nextGap(gap); gap > 0; gap = nextGap(gap)) {

        let i = 0;
        let j = gap;

        while (j < n + m) {

            let val1 = getValue(arr1, arr2, i, n);
            let val2 = getValue(arr1, arr2, j, n);

            if (val1 > val2) {
                setValue(arr1, arr2, i, n, val2);
                setValue(arr1, arr2, j, n, val1);
            }

            i++;
            j++;
        }
    }
}

function getValue(arr1, arr2, idx, n) {
    return idx < n ? arr1[idx] : arr2[idx - n];
}

function setValue(arr1, arr2, idx, n, value) {
    if (idx < n) arr1[idx] = value;
    else arr2[idx - n] = value;
}

const arr1 = [1,5,3,8,6,9];
let arr2 = [2, 3, 9];

merge(arr1, arr2);

console.log(arr1);
console.log(arr2);