let str = "dgjhttttttsdsdyabcdyy"


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







let str1 = "dgjhttttttsdsdyabcdyy"


const findAllUniqueSubstring = (str) => {
    let output = new Set()
    let maxLength = 0
    let largestSubstring = ""

    for (let start = 0; start < str.length; start++) {
        for (let end = start+1; end <= str.length; end++) {
            output.add(str.slice(start, end))            
        }
    }

  Array.from(output).map((item) => {
    if(new Set(item).size === item.length){
        if(item.length>maxLength){
            maxLength = item.length
            largestSubstring = item

        }
    }
    })

    return largestSubstring
}

console.log(findAllUniqueSubstring(str));
