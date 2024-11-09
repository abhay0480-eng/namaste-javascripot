
let fakeData = []
const ulEl = document.getElementById("root")
const pEl = document.getElementById("showid")
const imageEl = document.getElementById("showImage")
const parentId = document.getElementById("showId")

ulEl.addEventListener("click",(e)=> {
console.log("ev",e.target.id,fakeData);
let itemName = fakeData.filter((item,index)=>item.title===e.target.id) 
 pEl.innerText =  itemName[0].title
 imageEl.src= itemName[0].image
//  parentId.innerText = ` ${itemName[0].id}`

})
const getdata = async() => {
    try {
        const reqData = await fetch("https://fakestoreapi.com/products")
        const resData = await reqData.json()
        fakeData=resData;
    } catch (error) {
        console.log("Error",error);
    }finally{

    }
}

getdata().then(()=>{
    console.log("fakeData",fakeData);
    fakeData.map((item,index)=>{
        const listitem =  document.createElement("li")
        listitem.classList = `bg-black text-white py-1 px-3 rounded-xl cursor-pointer my-2 `
        listitem.innerText =`Item no. -  ${item.id}`
        listitem.id = item.title
        ulEl.appendChild(listitem);
        
     })
})








