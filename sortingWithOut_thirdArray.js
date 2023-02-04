// console.log("first")

let arr1 = [-1,0,2,3,5,6,8,11];
let arr2 = [-9,-2,3,10,12,90,101];

let n=arr1.length;
let m=arr2.length;
let i=0;
let j=0;
// console.log(...arr1,...arr2);

while(i<n){

    if(arr1[i]>arr2[j]){
        [arr1[i],arr2[j]] = [arr2[j],arr1[i]]
        shiftArr(arr2)
    }
    i++
}
console.log(...arr1,...arr2)

function shiftArr(arr2){

    for(let i=0; i<m; i++){
        if(arr2[i]<arr2[i-1]){
            [arr2[i],arr2[i-1]]= [arr2[i-1],arr2[i]]
        }
    }

}
