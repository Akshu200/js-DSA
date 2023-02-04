console.log('Binary Search')


function binarySearch(){

    let data = [1,2,3,4,5,6,20,22,30]
    let find=30;
    let start = 0;
    let end = data.length -1;

    let pos;

    while(start<= end){
        let mid = Math.floor((start+end)/2);

        if(data[mid] == find){
            pos = mid;
            console.log(`Element found at position : ${pos}`)
            break;
        }
        else if(data[mid] < find){
            start = mid+1
        }
        else{
            end = mid -1
        }
      
       
    }
    

}

binarySearch();