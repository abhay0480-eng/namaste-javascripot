


const fetchData1 = () => {

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const obj = {
                firstNmae: "Rajat"
            }

            const isSuccess = true

            if(isSuccess){
                resolve(obj)
            }else{
                reject("Error: Data not found")
            }

        },3000)
    })
}



const fetchPromiseData = async(promiseName) => {
    try {
        const req = await promiseName()
        console.log("res", req);
    } catch (error) {
        console.log("Error", error);
        
    }
  
    
}

fetchPromiseData(fetchData1)
