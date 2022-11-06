import React from "react";
import "../styles/Tours.css";
import Tour from "./Tour";

function Tours(props) {
  return (
    <div className="d-flex justify-content-around flex-md-wrap">
      {props.data.map((place) => {
        let tourPath = "/Tourinfo/" + place.id;
        return (
          <Tour key={place.id} tourPath={tourPath} name={place.name} image={place.image} />
        );
      })}
    </div>
  );
}

export default Tours;
