import React, { useState } from 'react'

function Use(url) {
    const [data,setData]=useState([])
    fetch(url).then(res=>res.json()).then(res=>{
        setData(res)
    })
  return data;
}

export default Use
