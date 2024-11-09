
let namee = ""
document.getElementById("form").addEventListener("keyup",(e)=>{
    console.log(e);
    if(e.target.dataset.uppercase !== undefined){
        namee = e.target.value
        e.target.value = e.target.value.toUpperCase()
       
    }
    
})

const actualName = document.getElementById("actualName")

actualName.innerText = namee