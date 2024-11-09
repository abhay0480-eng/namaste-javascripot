const propogationGrandParent = document.getElementById("propogationGrandParent")
const propogationParent = document.getElementById("propogationParent")
const propogationChild = document.getElementById("propogationChild")

let stopPropagationEnabled = false;

document.getElementById("checkbox").addEventListener("change", (e) => {
    stopPropagationEnabled = e.target.checked;
    propogationGrandParent.innerText = "_"
    propogationParent.innerText = "_"
    propogationChild.innerText = "_"

});

document.getElementById("grandparent").addEventListener("click",(e)=>{
    if (stopPropagationEnabled) {
        e.stopPropagation();
    }
    console.log("grandparent");
   

    setTimeout(()=>{
     propogationGrandParent.innerText = "Hello, I am Grandparent 👴🏽"
   },1000)
},false)

document.getElementById("parent").addEventListener("click",(e)=>{
    if (stopPropagationEnabled) {
        e.stopPropagation();
    }
    console.log("parent");
    setTimeout(()=>{
         propogationParent.innerText = "Hello, I am Parent 🧔🏻‍♂️"
    },700)
   
},false)

document.getElementById("child").addEventListener("click",(e)=>{
    console.log("child");

    if (stopPropagationEnabled) {
        e.stopPropagation();
    }
    setTimeout(()=>{
        propogationChild.innerText = "Hello, I am Child 👶"
    },100)
    
},false)