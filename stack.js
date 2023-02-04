let data=[];
let currentSize= data.length;
let max= 5;
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

        currentSize--;
        data.length=currentSize;
    }
}

push(1)
push(2);
console.log(data)
pop()
console.log(data);
push(3)
push(4)
push(5)
push(6)
push(7)
console.log(data)
pop()
pop()
pop()
pop()
pop()
pop()
console.log(data)
push(1)
console.log(data)