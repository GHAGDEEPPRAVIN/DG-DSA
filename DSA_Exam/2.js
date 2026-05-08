// Implement Selection Sort.

function selectionSort(arr)
{
    if(arr.length<=1)
    {
        return arr;
    }

    for(let i=0;i<arr.length;i++)
    {
        let min = i;
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[min]>arr[j])
            {
                min = j
            }
        }
        [arr[i],arr[min]]=[arr[min],arr[i]]
    }
    return arr
}

let arr = [4,8,5,6,2,7,9];

console.log(selectionSort(arr))