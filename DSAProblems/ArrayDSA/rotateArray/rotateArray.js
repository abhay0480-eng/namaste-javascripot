// Given an array, rotate it to the right by k steps.

// Input: arr = [1, 2, 3, 4, 5], k = 2
// Output: [4, 5, 1, 2, 3]

const arr = [1, 2, 3, 4, 5]
let output = [arr[3], arr[4], arr[0], arr[1], arr[2]]
const k = 2


const rotate = (arr,k) => {
    k = ((k % arr.length) + arr.length) % arr.length;
    console.log(k);
    let output = []
    
   for (let i = arr.length - k; i < arr.length; i++) {
        console.log(parseInt(i));
        
        output.push(arr[parseInt(i)])
   }

   for (let i = 0; i < arr.length - k; i++) {
    console.log(parseInt(i));
        
    output.push(arr[parseInt(i)])
   }
   return output
}

console.log(rotate(arr,k));




    
