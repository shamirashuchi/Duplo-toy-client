import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../Shared/Header/Header";
import Footer from "../../../Shared/Footer/Footer";
import useTitle from "../../../hooks/useTitle";

const ToyDetailsModal = () => {
  const location = useLocation();
  const toy = location.state?.data?.toy ?? {};
  useTitle('Toydetails');
  return (
    <>
      <Header></Header>
      <div className="bg-pink-100">
      <figure className="flex justify-center">
        <img  src={toy.imageUrl} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="ms-96"><span className="text-pink-400 me-2">Toy Name:</span>{toy.name}</h2>
        <h2  className="ms-96"><span className="text-pink-400 me-2">Price:</span> ${toy.price}</h2>
        <h2 className="ms-96"><span className="text-pink-400 me-2">Rating:</span> {toy.rating}</h2>
      </div>
      </div>
    <Footer></Footer>
    </>
  );
};

export default ToyDetailsModal;