import React from 'react'
import {  useParams } from "react-router-dom";

function Tourinfo(props) {
  const {id} = useParams();
  const distinations = props.data;
  
  let tourinfo = distinations.filter(a=>{
    return a.id ===id;
  })

  


  return (
    tourinfo.map((info)=>{
      return(
      <>
    <div>Summary: {info.info}</div>
    <div>Price :{info.price} JOD</div>
    </>
    )
  })
  )
}

export default Tourinfo