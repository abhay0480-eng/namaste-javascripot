const substring = "aabbbcccdde";

const countDistinctCharacter = (str) => {
    let unique = [...new Set(str)]

    // for(let char of str){
    //     unique.add(char)
    // }

    return {count: unique.size, uniquestring: Array.from(unique).join('')}
}

console.log(countDistinctCharacter(substring));
