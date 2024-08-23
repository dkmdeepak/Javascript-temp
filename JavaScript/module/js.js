consol.log('start')
$.on('button','click', function onClick(){
    console.log('Clicked');
})

setTimeout(function onTImeout(){
    console.log('Timeout');
},5000);
console.log('Done');
