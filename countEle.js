
let arr=[1,2,3,4,1,2,3,4,1];
let obj={}
for(let i=0 ; i<arr.length ; i++){
    if(!obj[arr[i]]){
        obj[arr[i]]=1
    }
    else{
        obj[arr[i]]++;
    }
}
console.log(obj)
// let count={};

// for(let i=0; i<arr.length ; i++){
//     if(!count[arr[i]])
//     {
//         count[arr[i]]=1
//     }
//     else{
//         count[arr[i]] ++;
//     }
// }
// console.log(count)