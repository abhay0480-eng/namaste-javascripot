const character = "#"
const rows = []
const count = 8

for (let index = 0; index < count; index++) {
    let rowpad = " ".repeat(count - index - 1) + character.repeat(2 * index + 1) + " ".repeat(count - index - 1) 
    rows.push(rowpad) 
}

let result = ""

for (const row of rows) {
    result =  result + row + "\n"
}

console.log(result);


 