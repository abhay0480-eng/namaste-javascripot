

function maxConsecutiveCount(arr){
  
    let maxCount = -Infinity
    let count = 0

    for (let i = 0; i < arr.length; i++) {
  
        if(arr[i] === 1){
            count++
            if(count>maxCount){
                maxCount = count
            }
        }else{
            count = 0
        }
    }

    return maxCount
    
}

const arr = [1, 1, 9, 1, 9, 19, 7, 1, 1, 1, 2, 5, 1]

console.log(maxConsecutiveCount(arr));
