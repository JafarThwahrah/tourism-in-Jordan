import React from "react";
import "../styles/Tours.css"
import { Link } from "react-router-dom";


function Tours(props) {
 

  return <div className="d-flex justify-content-around">
    {props.data.map((place)=>{
        let tourPath = "/Tourinfo/"+place.id;
        return (
     <Link to={tourPath}>
     <div className="card text-bg-dark m-2">
     <img src={place.image} class="card-img" alt="..." />
     <div className="card-img-overlay">
       <h5 className="card-title">{place.name}</h5>
     </div>
   </div>
   </Link>
        )
    })}
  </div>
}

export default Tours;
