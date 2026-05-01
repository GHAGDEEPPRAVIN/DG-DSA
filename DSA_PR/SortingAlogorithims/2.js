// 2. Implement Selection Sort.

function selectionSort (arr)
{
    for(let i=0;i<arr.length;i++)
    {
         let min = i;
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[j]<arr[min])
            {
                min = j;
            }
        }

        [arr[i],arr[min]] = [arr[min],arr[i]]
    }
}

let arr = [5,8,96,4,2,3,1,4];

selectionSort(arr)

console.log(arr)