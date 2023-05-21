import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const Detailspage = () => {
    const location = useLocation();
  const toy = location.state?.data?.toy ?? {};
  const {_id,photo,toyname,sellername,email,category,price,rating,quantity,details} = toy;
    return (
        <div>
            <Header></Header>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toyname}</h2>
                    <p>{sellername}</p>
                    <p>{email}</p>
                    <p>{category}</p>
                    <p>{price}</p>
                    <p>{rating}</p>
                    <p>{quantity}</p>
                    <p>{details}</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Detailspage;