const person1 = {
    firstName: "Abhay",
    lastName: "Kumar",
}

const person2 = {
    firstName: "Rajat",
    lastName: "Sharma",
}


function showGreeting(location,age) {
    console.log(`My Name is ${this.firstName} ${this.lastName}. I am from ${location}. I am ${age} years old.`);
}

// showGreeting.call(person1,"Ahmedabad",32)
// showGreeting.call(person2,"Aligarh",23)

// showGreeting.apply(person1,["Ahmedabad",32])
// showGreeting.apply(person2,["Aligarh",23])

Function.prototype.mybind = function(...args){
    const fnc = this
    const context = args[0]
    const boundArgs = args.slice(1)
    return function(...args2){
        fnc.apply(context,[ boundArgs, ...args2])
    }
}


const callPerson1Later = showGreeting.mybind(person1, "Ahmedabad")
const callPerson2Later = showGreeting.mybind(person2, "aligarh", "22")


callPerson1Later("32")
callPerson2Later()


/* pollyfill for for each */

Array.prototype.forEachMethod = function(callback){
    let arr = this
    for (let index = 0; index < arr.length; index++) {
           callback(arr[index], index, arr) 
    }
}


let data = [1,2,3,4]

data.forEachMethod((item, index)=>{
    console.log(item, index);
    
})


/* pollyfill for map */

Array.prototype.myMap = function(callback){
    let arr = this
    let output = []

    for (let index = 0; index < arr.length; index++) {
        output.push(callback(arr[index]))        
    }

    return output
}

data.myMap((item) => console.log(item))


Array.prototype.myIncludes = function(value){
    return this.indexOf(value) !== -1
}

const fruits = ['apple', 'banana', 'orange'];

if (fruits.includes('banana')) {
    console.log('Banana is in the array!');
} else {
    console.log('Banana is not in the array!');
}