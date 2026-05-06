// 2. Rotate an array to the right by k steps.

function reverse(arr,left,right)
{
    while(left<right)
    {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}

function rotateArray(arr,k)
{
    const n = arr.length
    k = k%n;

    reverse(arr,0,k-1);
    reverse(arr,k,n-1);
    reverse(arr,0,n-1)
}

const arr = [1,5,3,8,6,9];
rotateArray(arr,2)
console.log("Rotated array :",arr)