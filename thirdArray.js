
let arr1=[-1,0,2,4,6,8,12];
let arr2=[-2,1,10,9,99];
let arr3=[];

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