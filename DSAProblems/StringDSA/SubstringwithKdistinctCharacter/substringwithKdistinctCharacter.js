const str = "abcba";
let k = 3

const findSubstringwithKDistinct = (str, k) => {
    const result = []
    for (let start = 0; start < str.length; start++) {
        const seen = new Set();
        for (let end = start; end < str.length; end++) {
            seen.add(str[end])
            if(seen.size>= k){
                result.push(str.slice(start, end + 1))
            }
        }        
    }

    return result
}

console.log(findSubstringwithKDistinct(str, k));

