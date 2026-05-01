// // 3. Remove duplicates from a sorted array in-place.

function removeDuplicate(arr)
{
    let temp = [];
    temp[0] = arr[0]
    let index = 0;

    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]!==arr[i+1])
        {
            temp[index++] = arr[i];
        }
    }
    return temp;
}

const arr = [1,1,2,2,3,4,5,5,5];

console.log(removeDuplicate(arr))