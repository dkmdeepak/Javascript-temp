import React, { useEffect, useState } from 'react'

function Use(url) {
  const [state,setState]=useState([])
 
  useEffect(()=>{
    fetch(url).then(res=>res.json()).then(res=>{
      setState(res)
    })
  },[url])
  
  return state
  
}

export default Use
