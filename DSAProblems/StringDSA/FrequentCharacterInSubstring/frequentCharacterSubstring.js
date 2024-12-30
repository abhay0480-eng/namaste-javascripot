let substring = "aabbbcccdde"



const mostfrequentCharacter = (str) => {
    const arr = str.split("")
    // console.log(arr);
    
   const frequencyMap =  arr.reduce((acc,curr) => {
        // console.log(curr);
        
        if(curr in acc){
            acc[curr] += 1
        }else{
            acc[curr] = 1
        }
        return acc
    },{})
    

   
    

    let maxfrequency = 0;
    let mostFrequentChar = ""

    for([char, count ] of Object.entries(frequencyMap)){
        if(count>maxfrequency){
            maxfrequency = count;
            mostFrequentChar = char
        }
    }

    return {character: mostFrequentChar, frequency: maxfrequency}
}

console.log(mostfrequentCharacter(substring));



