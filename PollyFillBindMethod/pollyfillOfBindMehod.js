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

