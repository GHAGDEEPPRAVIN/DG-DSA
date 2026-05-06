// 1. Implement Bubble Sort.

function bubbleSort (arr)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]>arr[j])
            {
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    }
}

let arr = [5,6,4,3,2,1];

bubbleSort(arr)

console.log(arr)