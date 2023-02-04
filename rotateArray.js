
let input = [1,2,3,4,5,6]
let output = [3,4,5,6,1,2]

function rotateArr(input){

    for(let i=0 ; i<3; i++){
       let temp =input[0]
        for(let i=0; i<input.length-1 ;i++){
            input[i] = input[i+1];
        }
        input[input.length-1]= temp;
    }
    return input
}
let result=rotateArr(input);
console.log(result)