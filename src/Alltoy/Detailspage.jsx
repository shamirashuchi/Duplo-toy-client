import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import useTitle from '../hooks/useTitle';

const Detailspage = () => {
    const location = useLocation();
    useTitle('Detailspage');
  const toy = location.state?.data?.toy ?? {};
  const {_id,photo,toyname,sellername,email,category,price,rating,quantity,details} = toy;
    return (
        <div>
            <Header></Header>
            <div className="card w-full bg-pink-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="md:ml-96"><span className='text-pink-400 me-2'>Toy Name:</span>{toyname}</h2>
                    <p className="md:ml-96"><span className='text-pink-400 me-2'>Sellername:</span>{sellername}</p>
                    <p className="md:ml-96"><span className='text-pink-400 me-2'>Email:</span>{email}</p>
                    <p className="md:ml-96"><span className='text-pink-400 me-2'>Category:</span>{category}</p>
                    <p className="md:ml-96"><span className='text-pink-400 me-2'>Price:</span>{price}</p>
                    <p className="md:ml-96"><span className='text-pink-400 me-2'>Rating:</span>{rating}</p>
                    <p className="md:ml-96"><span className='text-pink-400 me-2'>Quantity:</span>{quantity}</p>
                    <p className="md:ml-96"><span className='text-pink-400 me-2'>Details:</span>{details}</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Detailspage;