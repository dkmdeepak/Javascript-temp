function Input(){ 
    let insert=''

    const handle=(val)=>{
        insert=val;
    }

    const change=()=>{
        console.log(insert);
        // alert(insert)
        try{
            alert(eval(insert))
        }
        catch{
            alert('Invalid Expression')
        }
    }
 
    return(
        <>
        <input type="text" onChange={(e)=>{
            handle(e.target.value)
        }} /><br />
        <h1>{insert}</h1>
        <button onClick={change}>Click Me</button>
        </>
    )
}
export default Input;