

let str1 = "dgjhttttttsdsdyabcdyyy"

const findlongestSubstring = (str) => {
    let output = new Set()
    let maxLength = 0
    let start = 0
    let longestSubstring = ""

    for (let end = 0; end < str.length; end++) {
        while(output.has(str[end])){
            output.delete(str[start])
            start++
        }
        
        output.add(str[end])
       if(end-start +1 > maxLength){
        maxLength = end-start+1
        longestSubstring = str.substring(start, end+1)
       }
    }
    return {maxLength: maxLength, output: longestSubstring}
}

console.log(longestSubstring(str1));



const longestSubstring1 = (str) => {
    let output = new Set()
    let maxLength = 0;
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        for (; output.has(str[i]); start++) { // Replaced while with for
            output.delete(str[start])
        }   
        
        output.add(str[i])
        maxLength = Math.max(maxLength, i-start+1)
    }
    return {maxLength:maxLength, output:Array.from(output)}
}