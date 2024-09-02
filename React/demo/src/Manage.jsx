import React,{useState} from 'react'

function Manage() {
    const [channel,setChannel]=useState('dash')
    const change=()=>{
        setChannel('MAX')
    }
  return (
    <>
        <div style={{border:'3px solid green'}}>
            <h1>Manage:{channel}</h1><br />
            <button onClick={change}>Click</button>
        </div>
    </>
  )
}

export default Manage
