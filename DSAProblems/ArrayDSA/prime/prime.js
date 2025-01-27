function isPrime(number){
    if(number <= 1){
        return false
    }
    console.log(Math.sqrt(number));
    

    for (let i = 2; i < Math.sqrt(number); i++) {
        if(number % i === 0){
            return false
        }                
    }

    return true
}

console.log(isPrime(17));
console.log(isPrime(24));
