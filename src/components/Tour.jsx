import React from 'react'
import { Link } from "react-router-dom";

function Tour(props) {

  return (
    <div>

     <Link to={props.tourPath}>
     <div className="card text-bg-dark m-5">
     <img src={props.image} className="card-img" alt="..." />
     <div className="card-img-overlay">
       <h5 className="card-title">{props.name}</h5>
     </div>
   </div>
   </Link>
   </div>

  )

}

export default Tour