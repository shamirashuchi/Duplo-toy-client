import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import Singletoy from '../Singletoy/Singletoy';
import useTitle from '../hooks/useTitle';

const Alltoy = () => {
    useTitle('Alltoy');
    const toys = useLoaderData();
    return (
        <div className='bg-pink-200'>
            <Header></Header>
            <h2 className='flex justify-center text-pink-400 text-3xl font-semibold my-10'>All TOYS</h2>
            <div className="overflow-x-auto w-full flex justify-center mb-10">
                <table className="table w-1/2">
                    <thead className='text-white'>
                    <tr>
                        <th className='bg-purple-600'>Seller</th>
                        <th className='bg-purple-600'>Toy Name</th>
                        <th className='bg-purple-600'>Sub-category</th>
                        <th className='bg-purple-600'>Price</th>
                        <th className='bg-purple-600'>Available Quantity</th>
                        <th className='bg-purple-600'></th>
                    </tr>
                    </thead>
                    <tbody>
                           {
                                toys.map(toy => <Singletoy
                                key = {toy._id}
                                toy = {toy}
                                ></Singletoy> )
                            }

                    </tbody>
                </table>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default Alltoy;