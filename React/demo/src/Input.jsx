function Input(){ 
    let insert=''
    const handle=(val)=>{
        insert=val;
    }
    const change=()=>{
        console.log(insert);
    }
    return(
        <>
        <input type="text" onChange={(e)=>{
            handle(e.target.value)
        }} /><br />
        <button onClick={change}>Click Me</button>
        </>
    )
}
export default Input;