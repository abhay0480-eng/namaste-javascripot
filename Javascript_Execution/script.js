const headingEl = document.createElement("h1")
const rootEl = document.getElementById("root")

var nums = 2
function square(num){
    return num * num
}

const result = square(5)

headingEl.innerHTML = `Namaste Javascript! Square of num is ${result}` 
rootEl.appendChild(headingEl)