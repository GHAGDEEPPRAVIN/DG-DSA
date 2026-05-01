// 1. Find the second largest element in an array.

function findSecondMax (arr)
{
    let max = secondMax = arr[0];

    for(let i=1;i<arr.length;i++)
    {
        if(max<arr[i])
        {
            secondMax = max;
            max = arr[i]
        }
    }

    return secondMax;
}

const arr = [1,5,3,8,6,9]

console.log(findSecondMax(arr))