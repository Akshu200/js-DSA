let arr = [1,2,3,4,5,1,2,4,4,7,8];

function unique(arr){

    let res= arr.sort((a,b)=>a-b) //[1, 1, 2, 2, 3,4, 4, 4, 5, 7,8]

//   return res.filter((item, index)=>res.indexOf(item)===index)
    let unique=[];
    res.forEach(element=>{
        if(!unique.includes(element)){
            unique.push(element)
        }})
        return unique
}
let r =unique(arr)
console.log(r)