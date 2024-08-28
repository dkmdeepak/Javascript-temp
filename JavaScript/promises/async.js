const promise= new Promise((res,rej)=>{
    res(['Javascript','Typescript'])
})

promise
.then((response)=>{
    console.log(response)
})
.catch((err)=>{
    console.log(err);
    
})