import './App.css'

function Employee(){
    let inputData="";

    const dash=()=>{
        alert('Ding Dong')
    }
    const btnClick=(arg)=>{
        alert(arg)
    }
    const inpVal=(val)=>{
        inputData=val
        console.log(inputData);
    }
    const btnClk=()=>{
        alert(inputData)
    }
    return(
        <>
        <div>
            <h1 className='meal'>Happy Meal</h1>
            <h1 className='meal'>Welcome</h1>
            <button onClick={dash}>Click</button><br />
            <button onClick={()=>{
                btnClick('Binding With argument')
            }}>Click Me!!</button>
            <input type="text" onChange={(e)=>{inpVal(e.target.value)}}/>
            <button onClick={btnClk}>Event</button>
        </div>
        </>
    )
}
export default Employee;