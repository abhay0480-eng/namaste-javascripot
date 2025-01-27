function getUniqueObjects(arr){
    let seen = new Set()
    return arr.filter((item) => {
        if(!seen.has(item.name)){
            seen.add(item.name)
            return true
        }
        return false
    })
}

const input = [
    {name: "sai"},
    {name: "Nang"},
    {name: "sai"},
    {name: "Nang"},
    {name: "111111"}
  ];


  console.log(getUniqueObjects(input));