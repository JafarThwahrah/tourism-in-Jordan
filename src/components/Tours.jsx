import React from "react";
import "../styles/Tours.css";
import Tour from "./Tour";
import { contextData } from "./Pages";
import { useContext } from "react";
function Tours() {

  const Data = useContext(contextData);
  return (
    <div className="d-flex justify-content-around flex-md-wrap">
      {Data.map((place) => {
        let tourPath = "/Tourinfo/" + place.id;
        return (
          <Tour key={place.id} tourPath={tourPath} name={place.name} image={place.image} />
        );
      })}
    </div>
  );
}

export default Tours;
