
function capatilizeLastLetter(str){
    return str.split(' ').map((word) => {
        if(word.length === 0) return ""
        const lastChar = word[word.length - 1].toUpperCase()
        return word.slice(0,-1) + lastChar
    })
    .join(' ')

}

const str = "hello world this is javascript"

console.log(capatilizeLastLetter(str));
