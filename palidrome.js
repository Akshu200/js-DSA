console.log('** palidrome **')

function pali(arr){
     let r =arr.toString()
    let newArr = r.split('');

    let right = r.length-1;
    let left = 0;

    while(left<right){
        if(newArr[left] !== newArr[right]) return false;
        left++;
        right--;
    }
    return true;
}
let re=pali(1233201)
console.log(re)

















// function pali(str){
//    let arr= str.toLowerCase()
//    let newarr = arr.split('')
// //    console.log(arr);
// let left=0;
// let right= arr.length-1;
//     while(left<right){
//         if(newarr[left] !== newarr[right]) return false;
//         left++;
//         right--;
//     }
//     return true

// }

// let res=pali('moM')
// console.log(res)