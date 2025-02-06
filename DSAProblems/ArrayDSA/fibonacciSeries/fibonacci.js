

function fibonacciIterative(n){
    
    let output = [0,1]

    if(n <= 0) return []

    if(n === 1) return [0]

    for (let i = 2; i < n; i++) {
        output.push(output[i-1] + output[i-2]);       
    }
    return output
}



console.log(fibonacciIterative(10));