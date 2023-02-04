


let obj1 = {a:1, b:2 , c:3, d:4, e:5}
let obj2 = {a:1, b:4 , c:3, d:1, e:6}

function duplicates(obj1, obj2){

    let objs={};

    for(let i in obj1){
        if(obj1[i] === obj2[i]){
            objs[i] =obj1[i]
        }
    }
   return objs; 
}
let res=duplicates(obj1, obj2)
console.log(res);