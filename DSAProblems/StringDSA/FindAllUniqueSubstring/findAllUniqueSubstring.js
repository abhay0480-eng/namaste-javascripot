let str = "dgjhttttttsdsdyabcdyyy"


const findAllUniqueSubstrings = (str) => {
    let output = new Set()
    for (let i = 0; i < str.length; i++) {
        for (let j = i+1; j <= str.length; j++) {
            output.add(str.slice(i,j))
        }        
    }

    return Array.from(output)
}

console.log(findAllUniqueSubstrings(str));
