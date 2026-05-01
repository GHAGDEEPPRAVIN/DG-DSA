// 4. Find the maximum subarray sum (Kadane’s Algorithm).

function subarrayMaximum(arr)
{
    let currentSum = arr[0];
    let maxSum = arr[0];

    for(let i=0;i<arr.length;i++)
    {
        if(currentSum+arr[i]>arr[i]){
            currentSum = currentSum + arr[i];
        }
        else
        {
            currentSum = arr[i];
        }

        if(currentSum>maxSum)
        {
            maxSum = currentSum;
        }
    }

    return maxSum;
}

const arr = [-1,1,5,7,-8,-6,3,-5,0,4];

console.log(subarrayMaximum(arr))

