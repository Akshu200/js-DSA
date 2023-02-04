console.log("LInear Search")

function searchElement(){

    let data= [2,22,1,10,30,14,19,100];
    let find = 1;
    let pos;
    for(let i=0; i<=data.length ; i++){

        if(data[i] == find){
            pos=i;
            break;
        }
    }
    if(!pos){
       
        console.log('element not found')
       }
       else{
        console.log('Element Found at position ' + pos)
       }
 
}
searchElement()