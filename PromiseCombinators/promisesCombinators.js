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

        },4000)
    })
}


const fetchData2 = () => {

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const obj = {
                firstNmae: "Vivek"
            }

            const isSuccess = false

            if(isSuccess){
                resolve(obj)
            }else{
                reject("Error: Data not found")
            }

        },1000)
    })
}


const fetchData3 = () => {

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const obj = {
                firstNmae: "Rajat"
            }

            const isSuccess = false

            if(isSuccess){
                resolve(obj)
            }else{
                reject("Error: Data not found")
            }

        },3000)
    })
}

{/* Promise .any */}

Promise.any([fetchData1(),fetchData2(),fetchData3()])
.then((result)=>{
    console.log("result", result);
    
})
.catch((error) => {
    console.log("error",error);
    
})

{/* Promise .all */}

Promise.all([fetchData1(),fetchData2(),fetchData3()])
.then((result)=>{
    console.log("result", result);
    
})
.catch((error) => {
    console.log("error",error);
    
})

{/* Promise .allSettled */}


Promise.allSettled([fetchData1(),fetchData2(),fetchData3()])
.then((result)=>{
    console.log("result", result);
    
})
.catch((error) => {
    console.log("error",error);
    
})

{/* Promise .race */}


Promise.race([fetchData1(),fetchData2(),fetchData3()])
.then((result)=>{
    console.log("result", result);
    
})
.catch((error) => {
    console.log("error",error);
    
})

