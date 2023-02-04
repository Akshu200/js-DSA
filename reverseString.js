let str = 'Hi Akshay , This is Prashant';

let newArr = str.split(' ')
console.log(newArr)

let res = newArr.map((item)=>
item.split("").reverse().join("")) .join(" ")

console.log(res);

// let newA = str.split('').reverse().join('')
// console.log(newA)