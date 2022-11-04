import React from "react";
import { useParams } from "react-router-dom";
import "../styles/Tourinfo.css";

function Tourinfo(props) {
  const { id } = useParams();
  const distinations = props.data;

  let tourinfo = distinations.filter((a) => {
    return a.id === id;
  });

  return tourinfo.map((info) => {
    return (
      <div className="TourinfoContainer">
        <div className="m-3">
          <h3>Summary</h3>
          <p>{info.info}</p>
        </div>
        <div className="m-3">
          <h5>Price</h5>
          <p>{info.price} JOD</p>
        </div>
      </div>
    );
  });
}

export default Tourinfo;
