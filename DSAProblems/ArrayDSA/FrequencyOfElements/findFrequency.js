const numbers = [1, 2, 3, 3, 3, 4, 4, 4];


{/* Basic Approch */}

function getFrequencyOfElements(arr) {
    let frequencyOfElements = {}

    for (let i = 0; i < arr.length; i++) {
        
        if(arr[i] in frequencyOfElements){
            frequencyOfElements[arr[i]] += 1
        }else{
            frequencyOfElements[arr[i]] = 1
        }
    }

    return frequencyOfElements
}

const frequency = getFrequencyOfElements(numbers)
console.log("Result by Basic Approch:", frequency);

{/* Using Reduce method  */}

function getfrequencyElementsUsingReduce(arr){

   return arr.reduce((acc,curr) => {

        if(curr in acc){
            acc[curr] += 1
        }else{
            acc[curr] = 1
        }
       return acc
    },{})

}

console.log("Result by using Reduce Method:",getfrequencyElementsUsingReduce(numbers));
