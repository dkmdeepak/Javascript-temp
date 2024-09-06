import Use from "./Use";

function Input(){ 
    let insert=''

    const handle=(val)=>{
        insert=val;
    }

    const change=()=>{
        console.log(insert);
        // alert(eval(insert))
        
        try{
        alert(insert)
        }
        catch{
            alert('Invalid Expression')
        }
    }
    const res=Use("https://jsonplaceholder.typicode.com/users")
    console.log(res);
    
    return(
        <>
        <input type="text" onChange={(e)=>{
            handle(e.target.value)
        }} /><br />
        <h1>{insert}</h1>
        <button onClick={change}>Click Me</button>

            <div>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                    </tr>
                    {
                        res?
                        res.map((item)=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                            </tr>
                        )):
                        <tr>
                            <td>Loading...</td>
                        </tr>
                    }
                </table>
            </div>
        </>
    )
}
export default Input;