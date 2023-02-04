let str= 'helloolooooo llllll'

let obj={};
let maxkey='';
for(let i=0; i<str.length ; i++){
    // console.log(str[i])
    let key = str[i]
    if(!obj[key]){
        obj[key]=0
    }
   

        obj[key]++
        if(maxkey == '' || obj[key]>obj[maxkey]){
            maxkey = key
        }
    
}
console.log(maxkey);
console.log(obj)