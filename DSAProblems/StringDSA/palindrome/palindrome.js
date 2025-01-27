const checkPalindrome = (str) => {
    let reversed = []
    for (let i = str.length-1; i >= 0; i--) {
        reversed.push(str[i])
    }
    
    if(reversed.join('') === str){
        return "Palindrome"
    }else{
        return "Not Palindrome"
    }
}

console.log(checkPalindrome("madam"));
