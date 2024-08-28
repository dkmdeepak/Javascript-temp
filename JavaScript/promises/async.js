

const promise= new Promise((res,rej)=>{
    res(['Javascript','Typescript'])
})

//<code>
// --promise
// --.then((response)=>{
// --    console.log(response)
// --})
// --.catch((err)=>{
// --    console.log(err);
// --})

/////changing <code> into simple 

// async function fetchData(){
// const res= await promise
// console.log(res);
// }
// fetchData();

//IIFE
// (async ()=>{
//     const response=await promise
//     console.log(response);
// })()