const fetchdata1 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const obj = {
                first: "Abhay"
            }
            const isSuccess = true

            if(isSuccess){
                resolve(obj)
            }else{
                reject("Error: Data not Found")
            }
        }, 1000);
    })
}

const fetchdata2 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const obj = {
                first: "rajat"
            }
            const isSuccess = true

            if(isSuccess){
                resolve(obj)
            }else{
                reject("Error: Data not Found")
            }
        }, 500);
    })
}







