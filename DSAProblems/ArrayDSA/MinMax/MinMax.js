const numbers = [3, 70, 20000, 91, 4, 1];

{/* Using For Loop */}

function findMaxUsingFor(arr) {
    let max = numbers[0]
    let min = numbers[0]
    for (let i = 1; i < arr.length; i++) {
       if(arr[i]>max){
        max = arr[i];
       }
       if(arr[i]< min){
        min = arr[i]
       }
    }
    return {max: max , min: min}
}

{/* Using For Min Max */}

function findMaxUsingMinMax(arr) {
    const max = Math.max(...arr)
    const min = Math.min(...arr)

    return {max: max , min: min}
}

{/* Using For Min Max using reduce*/}

function findMinMaxUsingReduce(arr){

  return  arr.reduce((acc,curr)=>{
        if(curr>acc.max){
            acc.max = curr
        }

        if(curr<acc.min){
            acc.min = curr
        }
        
        return acc
    },{max: arr[0], min: arr[0]})
}


const minMaxFor = findMaxUsingMinMax(numbers)
const minMaxreduce = findMaxUsingMinMax(numbers)
const minMax = findMinMaxUsingReduce(numbers)

console.log(minMax);
console.log(minMaxFor);
console.log(minMaxreduce);





