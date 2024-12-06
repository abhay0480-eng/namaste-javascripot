// Input: arr = [1, 3, 2, 5, 7, 8], target = 10
// Output: [[3, 7], [2, 8]]

const arr = [1, 3, 2, 5, 7, 8]

// const pair = (arr) => {
//     let output = []
  
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if(arr[i] + arr[j] === 10){
//                 output.push([arr[i] , arr[j]])
//                 break
//             }
//         }        
//     }
//     return output
// }




const pair = (arr) => {
    let output = []
    let seen = new Set() // To store seen numbers
  
    for (let i = 0; i < arr.length; i++) {
        let complement = 10 - arr[i]
        if (seen.has(complement)) {
            output.push([complement, arr[i]])
        }
        seen.add(arr[i]) // Add the current number to the set
    }
    return output
}

console.log(pair(arr));