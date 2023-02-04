// // console.log("object")
// let data1=[1,4,5,1,7,8,9,]
// let data2=[-1,2,0,-2,-99]
// let data3=[]

// let i=j=k=0;
// for(let l=0; l<data1.length; l++){

//     if(data1[i]<data2[j]){
//         data3[k]=data1[i];
//         k++;
//         i++;
//     }
//     else{
//         data3[k]=data2[j]
//         k++;
//         j++;
//     }
// }
// // console.log(data3)
// for(let m=0; m<data2.length; m++){
//     if(data1[i]<data2[j]){
//         data3[k]=data1[i];
//         k++;
//         i++;
//     }
//     else{
//         data3[k]=data2[j]
//         k++;
//         j++;
//     }
// }
// console.log(data3)

// // let data1=[1,4,5,1,7,8,9,]
// // let data2=[-1,2,0,-2,-99]
// // let data3=[]
// // let i=j=k=0;
// // while(i<data1.length && j<data2.length){
// //    if(data1[i]<data2[j])
// // }
// // while(){
    
// // }
// // console.log(data3)


let arr1=[-1,0,100,2,4,6,8,12];
let arr2=[-2,1,10,9,-99];
let arr3=[];

arr1.sort((a,b)=>a-b) //sorting arr1
arr2.sort((a,b)=>a-b) //sorting arr2

let i=j=k=0;

while(i<arr1.length && j<arr2.length){

    if(arr1[i]<arr2[j]){
        arr3[k]=arr1[i];
        i++;
        k++
    }
    else{
        arr3[k]=arr2[j];
        k++; 
        j++;
    }

}
while(i<arr1.length){
    // if(arr1[i]<arr2[j]){
        arr3[k]=arr1[i];
        i++;
        k++
    // }
}
while(j<arr2.length){
 

       arr3[k]=arr2[j];
       k++; 
       j++;
    
}
console.log(arr3);