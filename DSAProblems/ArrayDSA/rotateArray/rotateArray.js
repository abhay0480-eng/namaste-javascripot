// Given an array, rotate it to the right by k steps.

// Input: arr = [1, 2, 3, 4, 5], k = 2
// Output: [4, 5, 1, 2, 3]

const arr = [1, 2, 3, 4, 5]

let output = [arr[3], arr[4], arr[0], arr[1], arr[2]]

const k = 2


const rotate = (arr,k) => {
    k = k % arr.length; 
    console.log(arr.length/k);
    let output = []
    
   for (let i = arr.length -k ; i < arr.length ; i++) {
        console.log(parseInt(i));
        
        output.push(arr[parseInt(i)])
   }

   for (let i = 0; i < arr.length - k ; i++) {
    console.log(parseInt(i));
        
    output.push(arr[parseInt(i)])
   }


   return output
}

console.log(rotate(arr,k));



// Input: 
// [
//   { category: 'fruit', name: 'apple' },
//   { category: 'fruit', name: 'banana' },
//   { category: 'vegetable', name: 'carrot' },
// ]
// Output:
// {
//   fruit: [{ name: 'apple' }, { name: 'banana' }],
//   vegetable: [{ name: 'carrot' }]
// }


const arrw = [
      { category: 'fruit', name: 'apple' },
      { category: 'fruit', name: 'banana' },
      { category: 'vegetable', name: 'carrot' },
    ]


    const occ = (arrw) => {
       return arrw.reduce((acc, curr) => {
            if(curr.category in acc){
                acc[curr.category].push([{name: curr.name}]) 
            }else{
                acc[curr.category] =[{name: curr.name}]
            }

            return acc
        },{})
    }

    console.log(occ(arrw));
    
