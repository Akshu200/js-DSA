
// let arr=[];
// let current= arr.length;

// let pos;

// function push(value){
// arr[current] =value;
// current++;
// }
// function pop(){
//     current--;
//     arr.length = current;
// }
// push(1)
// push(2)
// push(4)
// push(7)
// console.log(arr)
// pop()
// pop()
// console.log(arr)


let arr=[];
let current= arr.length;

function enqueue(val){
    arr[current] = val;
   current++;
}
function dequeue(){
    for(let i=0; i<arr.length ; i++){
        arr[i] = arr[1+i]
    }
    current --;
    arr.length = current;
}

enqueue(1)
enqueue(55)
enqueue(14)
enqueue(91)
console.log(arr)
dequeue()
dequeue()
console.log(arr)

