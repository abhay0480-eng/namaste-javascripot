// Write a function that returns the first non-repeating element in an array. If all elements repeat, return null.
// Input: [4, 5, 1, 2, 0, 4]
// Output: 5

const arr =  [4, 5, 1, 2, 0, 4]

const nonRepeatElement = (arr) => {
    let output = []

    for (let i = 0; i < arr.length; i++) {
        let flag = true
        for (let j = 0; j < arr.length; j++) {
            if(i!==j && arr[i] === arr[j]){
                flag = false
               break
            }
        }
        if(flag){
            output.push(arr[i])
        }
    }

    return output[0]
}

console.log(nonRepeatElement(arr));
