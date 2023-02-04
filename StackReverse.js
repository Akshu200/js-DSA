let data=[];
let currentSize= data.length;
let max= 10;
function push(val){

    if(max<=currentSize){
        console.log('stack is full')
    }
    else{

        data[currentSize]=val;
        currentSize++;
    }

}

function pop(){
    if(currentSize <= 0)
    {
        console.log('stack is empty')
    }
    else{

        let last = data[currentSize-1]
        currentSize--;
        data.length=currentSize;
        return last;
    }
}

function reverse(item){

// console.log(item)
for(let i=0; i<item.length ; i++){
    push(item[i])
}
for(let i=0; i<item.length; i++){
    // console.log(pop())
    item[i]=pop()
}
}

let str = 'mummy';
str= str.split('')

reverse(str)
console.log(str.join(''))
