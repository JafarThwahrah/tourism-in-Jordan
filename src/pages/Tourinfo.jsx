import React from 'react'
import {  useParams } from "react-router-dom";

function Tourinfo(props) {
  let params = useParams();
  
  const distinations = props.data;
  const tourinfo = distinations.filter((a, params)=>{
    return a.id === params.id;
  })

  return (
    tourinfo.map((info)=>{
      return(
      <>
    <div>{info.info}</div>
    <div>{info.price}</div>
    </>
    )
  })
  )
}

export default Tourinfo