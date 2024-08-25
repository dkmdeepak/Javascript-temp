const sum = withMarkers((a,b)=>{
    console.log(a + b);
});
const product = withMarkers((a,b)=>{
    console.log(a * b);
});
const difference = withMarkers((a,b)=>{
    console.log(a - b);
});


const wrappedSum= withMarkers(sum);
function withMarkers(func){
    return function(a, b){
        console.log('=======');
        sum(a, b);
        console.log('=======');
    }
}
// function sum(a,b){
//     console.log(a + b);
// }