

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

    
/* avoid callback hell */


async function fetchData() {
    try {
      const data1 = await getData1();
      const data2 = await getData2(data1);
      const data3 = await getData3(data2);
  
      console.log("Final Data:", data3);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  function getData1() {
    return fetch("https://api.example.com/data1").then((res) => res.json());
  }
  
  function getData2(dataFromFirstCall) {
    return fetch(`https://api.example.com/data2/${dataFromFirstCall.id}`).then((res) => res.json());
  }
  
  function getData3(dataFromSecondCall) {
    return fetch(`https://api.example.com/data3/${dataFromSecondCall.id}`).then((res) => res.json());
  }
  
  fetchData();

/* using promises */

  function apiCall1() {
    return fetch("https://api.example.com/data1").then((response) => response.json());
  }
  
  function apiCall2(dataFromFirstCall) {
    return fetch(`https://api.example.com/data2/${dataFromFirstCall.id}`).then((response) =>
      response.json()
    );
  }
  
  function apiCall3(dataFromSecondCall) {
    return fetch(`https://api.example.com/data3/${dataFromSecondCall.id}`).then((response) =>
      response.json()
    );
  }
  
  // Chaining Promises
  apiCall1()
    .then((data1) => {
      console.log("API 1 Response:", data1);
      return apiCall2(data1);
    })
    .then((data2) => {
      console.log("API 2 Response:", data2);
      return apiCall3(data2);
    })
    .then((data3) => {
      console.log("API 3 Response:", data3);
    })
    .catch((error) => {
      console.error("Error:", error);
    });