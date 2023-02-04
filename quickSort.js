function quickSort(arr){
    if(arr.length <2){
        return arr
    }
    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];

    for(let i =0 ; i<arr.length-1 ; i++){    //& we have for loop O(n)
        if(arr[i]< pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot,...quickSort(right)] // we recursive divide array into smaller array
                                                            // which is log n 
}
let  res=quickSort([-1,2,1,3,4,6,1,1,0])
console.log(res);

// worst case -> O(n^2) is the array is sorted
// Average case -> O(n log n)