// //Spread Operation

// const globalPlayer = {
//     id:0,
//     name:'Bot',
//     powerLevel:1010
// }
// const player1 = globalPlayer
// player1.powerLevel = 50
// player1.name = 'Dash'
// console.log(player1);
// console.log(globalPlayer);


// const  name1=["Ant",'Bat','Cat']
// const  name2=["Dog",'Egg','Fish']

// // const names=[...name1.concat(name2)]
// const names=[...name1.name2]
// console.log(names);


// Rest
// const name1={
//     id:0,
//     name:'Deep',
//     age:22,
// }
// const {name, ...rest} = name1
// console.log(rest);

// Arrow Function

// function myFunc() {
// console.log('Running From Jungle');
// }
// myFunc()


// const myFunc1 = value => value+8;
//     console.log(myFunc1(2));


// for-Each

// const myFunc = [
//     {
//         id:0,
//         name:'Deep',
//         age:10
//     },
//     {
//         id:1,
//         name:'Peter',
//         age:11
//     },
//     {
//         id:3,
//         name:'Parker',
//         age:13
//     }
// ];

// for( i=0; i<myFunc.length; i++){
//     console.log(myFunc[i]);
    
// }

// myFunc.forEach((value,index,array)=>console.log(value.name))

//Map

// const myFunc = [
//     {
//         id:0,
//         name:'Deep',
//         age:10
//     },
//     {
//         id:1,
//         name:'Peter',
//         age:11
//     },
//     {
//         id:3,
//         name:'Parker',
//         age:13
//     }
// ];

// const newArray = myFunc.map((value)=>value.name)
// console.log(newArray);

//Filter

// const myFunc = [
//     {
//         id:0,
//         name:'Deep',
//         age:20
//     },
//     {
//         id:1,
//         name:'Peter',
//         age:21
//     },
//     {
//         id:3,
//         name:'Parker',
//         age:21
//     }
// ];

// const newArray = myFunc.filter((value)=>value.age===20 || value.id===1)
// console.log(newArray);

// Reduce

// const myFunc = [
//     {
//         id:0,
//         name:'Deep',
//         age:20
//     },
//     {
//         id:1,
//         name:'Peter',
//         age:21
//     },
//     {
//         id:3,
//         name:'Parker',
//         age:21
//     }
// ];

// const number=[15,10,20,5,50];
// // let total=0

// // for(i=0;i<number.length;i++){
// //     total+=number[i];
// // }

// const newArray=number.reduce((total,value) => total + value, 0 )
// console.log(newArray);


// Find

// const myFunc = [
//     {
//         id:0,
//         name:'Deep',
//         age:20
//     },
//     {
//         id:1,
//         name:'Peter',
//         age:21
//     },
//     {
//         id:3,
//         name:'Parker',
//         age:21
//     }
// ];

// const newObj = myFunc.find((value)=>value.age ===21 && value.age===21)
// console.log(newObj);

//Sort
// const number=[15,10,20,5,50];
// const dash=number.sort((a,b)=>b-a)
// console.log(dash);

//ES10

// const number=[15,10,[20,5,50],[20,5,50],[20,5,50],[20,5,50],[30,5,40],[40,5,50],[50,20,50]];
// console.log(number.flat(Infinity));

//Channing

// const myFunc =
//         {
//             id:0,
//             name:'Deep',
//             age:20,
//             company:{
//                 company_name:'Google'
//             }
//         }
//         // if (myFunc && myFunc.company && myFunc.company.company_name) 
//         if (myFunc?.company?.company_name) 
//             {
//                 console.log(myFunc.company.company_name);
//             }
        

// const number=[15,10,20,5,50,45,35,60];
// const newArray = number
//             .map((value)=>value)
//             .filter((data) => data>5)
//             .sort((a,b)=>a-b)
//             // .reduce((total,value) => total+value,0)
// console.log(newArray);
