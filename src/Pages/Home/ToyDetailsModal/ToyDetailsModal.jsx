import React from "react";
import { useLocation } from "react-router-dom";

const ToyDetailsModal = () => {
  const location = useLocation();
  const toy = location.state?.data?.toy ?? {};
  
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={toy.imageUrl} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toy.name}</h2>
        <p className="mb-2">Price: ${toy.price}</p>
        <p className="mt-2">Rating: {toy.rating}</p>
      </div>
    </div>
  );
};

export default ToyDetailsModal;