
const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 5,5];


{/* Basic Approch */}

function findUniqueElement(arr) {
    let uniqueTemp = []
    for (let i = 0; i < arr.length; i++) {
        let flag = true
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i]===arr[j]) {
                flag=false
                break;
            }
        }
        if(flag){
            uniqueTemp.push(arr[i])
        }
        
    }
    return uniqueTemp
}
console.log("Find Unique Element in array with Basic Approch: ", findUniqueElement(numbers));



{/* Using .filter */}

function findUniqueElementUsingFilter(arr){
    const unique = arr.filter((item,index) => numbers.indexOf(item) === index)
    return unique
}
console.log("Find Unique Element in array using .fiter method: ", findUniqueElementUsingFilter(numbers));



{/* Using Set */}

function findUniqueElementUsingSet(arr){
    const unique = [...new Set(arr)]
    return unique
}
console.log("Find Unique Element in array using Set method: ", findUniqueElementUsingSet(numbers));