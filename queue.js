console.log('Queue')

let data=[];
let currentSize= data.length;

let max=5;

function enqueue(value){

    if(currentSize < 0)
    {
console.log('queue is full');
    }
    else{
        data[currentSize]= value;
        currentSize++;
    
    }
   
}
function dequeue(){
    if(currentSize>0){

        for(let i=0 ; i<data.length; i++){
            data[i]= data[i+1];
        }
        currentSize--;
        data.length=currentSize;
    }
    else{
        console.log('queue is empty')
    }
}
function display(){
    console.log(data)
}

enqueue(10);
enqueue(20);
display()
dequeue();
display();
enqueue(30);
enqueue(40);
enqueue(50);
enqueue(60);
enqueue(70)
display();

