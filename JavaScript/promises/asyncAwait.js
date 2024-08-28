
const promise= new Promise((res,rej)=>{
    // res("Api Worked 100%")
    rej("Api Failed")
})

const fetchData=async ()=>{
    try{
        const response=await promise
        console.log(response);
    }
    catch(err){
        console.log(err);
    }
}
fetchData()