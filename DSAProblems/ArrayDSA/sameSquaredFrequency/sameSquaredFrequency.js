


function sameSquaredFrequency(arr1, arr2){
    if(arr1.length !== arr2.length) return false
    let output = false
  for (let i = 0; i < arr1.length; i++) {
    const square = arr1[i] * arr1[i]
      if(arr2.includes(square)){
          output = true
      } else{
          output = false
      }  
  }

  return output
}

console.log(sameSquaredFrequency([1, 2, 3], [1, 4, 9]));