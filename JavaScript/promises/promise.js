//Resolve
// ---------
// const drop = new Promise((res,rej)=>{
//     res('value!!!!')
// })
// drop.then((data)=>{
//     console.log(data);
// })


// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('resolved');
//     },1000)
// })
// //to access promises use ".then"
// promise.then((value)=>{
//     //you can use any word-value,data,resolve..
//     console.log(value);
// })

//Reject
//--------

// const promises = new Promise((res,rej)=>{
//     rej('Failed!!!!')
// })
// promises.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);});

//next
//---------
// function getData1(data){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//         res(data)
//         },1000)
//     })
// }
// function getData2(data){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//         res(data)
//         },1000)
//     })
// }
// getData1(5).then((resolve)=>{
//     return getData2(resolve+4)
// }).then((resolve)=>{
//     console.log(resolve);
// })