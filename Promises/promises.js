

const fetchData1 = () => {

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const obj = {
                firstNmae: "Abhay"
            }

            const isSuccess = false

            if(isSuccess){
                resolve(obj)
            }else{
                reject("Error: Data not found")
            }

        })
    })
}

fetchData1()
.then((result)=>{
    console.log("result", result);
    
})
.catch((error) => {
    console.log("error",error);
    
})