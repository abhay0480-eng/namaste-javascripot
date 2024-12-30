const data =  [
    { firstName: "John", lastName: "Doe", age: 28, location: "New York" },
    { firstName: "Emily", lastName: "Smith", age: 34, location: "Los Angeles" },
    { firstName: "Michael", lastName: "Brown", age: 22, location: "Chicago" },
    { firstName: "Sophia", lastName: "Taylor", age: 22, location: "Houston" },
    { firstName: "James", lastName: "Wilson", age: 40, location: "Phoenix" },
    { firstName: "Olivia", lastName: "Jones", age: 28, location: "Philadelphia" },
    { firstName: "Abhay", lastName: "Kumar", age: 10, location: "Aligarh" },
]

/* 
    for map function
    Q. Print list of Full names
*/

let listOfFullName = data.map((item,index) => `${item.firstName} ${item.lastName}` )

console.log("List of Full Name",listOfFullName);


/* 
    for reduce function
    Q. how many users have particular age
*/

let listOfPeopleByAge = data.reduce((acc,curr)=>{
    if(curr.age in acc){
        acc[curr.age] += 1
    }else{
        acc[curr.age] = 1
    }
    return acc
},{})

console.log("List of number of  People have particular age", listOfPeopleByAge);


/* 
    for filter function
    Q. Find all the people whose age is less than 20
*/

const listOfPeopleAgeLessThan30 = data.filter((item,index) => item.age<30).map((item)=> item.firstName)

console.log("List of People whose age is less than 30", listOfPeopleAgeLessThan30);

/* 
    for reduce function
    Q. Find all the people whose age is less than 20
*/


const listOfPeopleAgeLessThan30byReduce = data.reduce((acc,curr) => {
        if(curr.age<30){
          acc[curr.firstName]  = curr.age
        }
        return acc

},{})

console.log("listOfPeopleAgeLessThan30byReduce",listOfPeopleAgeLessThan30byReduce);


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



