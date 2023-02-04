//Find second Largest number in array
// console.log("object");
console.log("Bubble sort is Used");
// let arr1=[1,2,3,4,5,6,1,-1]; 
// let arr2=[1,4,6,7,2,8,0];

// const arr = [3, 6, 2, 56, 32, 5, 9, 32,100,101];
// const largest = arr[0];

// function secondL(largest){
//     for (let i = 0; i < arr.length-2; i++) {
//         if (largest < arr[i] ) {
//             largest = arr[i];
//         }
//     }
//     return largest
// }
// console.log(secondL(largest))
// let arr = [5, 2, 67, -1,37, 67,85, 19, 10,68,0,69];
let arr = [8,1,2,3,4,5,6,7];
let arr2 = [11,4, 5, 6, 7,7, 8, 9,10]
// let res = arr.sort((a,b)=>b-a);
// console.log(res[1]);
function bubbleSort(arr){
    for(let i=0; i<arr.length ;i++){
        // console.log(i)
        // let isSwapped;
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]>arr[j])
            {
                [arr[i],arr[j]] = [arr[j],arr[i]]
                isSwapped=false;
            }
        }
        // if(isSwapped){
        //     break;
        // }
    }
    return arr;
}
// console.log([...arr])
bubbleSort(arr)
console.log(arr)
// console.log(arr2)
// bubbleSort(arr2)
