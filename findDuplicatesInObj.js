
const input1 = { a:1 , b:2 , c:3, d:4, e:5}
const input2 = { a:1 , b:3 , c:3, d:6, e:0}
const output= { c:3, e:5}

function fn(input1, input2){

    let obj={};
    for(let i in input1){
        if(input1[i]==input2[i]){
            obj[i] = input1[i]
        }
    }
    return obj

}
console.log(fn(input1, input2))