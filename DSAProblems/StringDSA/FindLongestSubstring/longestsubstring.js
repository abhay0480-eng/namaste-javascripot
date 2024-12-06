let str1 = "dgjhttttttsdsdyabcdyyy"


const longestSubstring = (str) => {
    let output = new Set()
    let maxLength = 0;
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        while(output.has(str[i])){
            output.delete(str[start])
            start++
        }   
        
        output.add(str[i])
        maxLength = Math.max(maxLength, i-start+1)
    }
    return {maxLength:maxLength, output:Array.from(output)}
}

console.log(longestSubstring(str1));
