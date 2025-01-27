
function findSumOfThirds(arr){
    let output = 0

    for (let i = 0; i < arr.length; i+= 3) {
        console.log(arr[i]);
        output += arr[i]
    }

    return output
}



const arr = [1,23,32,11,23,34]

console.log(findSumOfThirds(arr));
