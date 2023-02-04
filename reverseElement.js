console.log("Reverse an Element");

//let data= [1,2,3,4,5,6]  //for number
let arr = "akshay";
let data = arr.split("");

let temp;

function reverse(data, start, end) {
  console.log(data);
  if (start <= end) {
    temp = data[start];
    data[start] = data[end];
    data[end] = temp;
    reverse(data, start + 1, end - 1);
  }
}
reverse(data, 0, data.length - 1);
