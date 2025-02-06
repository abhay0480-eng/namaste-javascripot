function findSmallestWord(str){
    const word = str.toLowerCase().split(' ')

    const frequencyMap = word.reduce((acc, curr) => {
            acc[curr] = curr.length
        return acc
    },{})

    let minFrequency = Infinity
    let smallestWord = ""


    for([char, count] of Object.entries(frequencyMap)){
        if(count<minFrequency){
            minFrequency = count
            smallestWord = char
        }
    }

    return {minFrequency:minFrequency, smallestWord:smallestWord}
}

console.log(findSmallestWord("Find the Smallest word"));




