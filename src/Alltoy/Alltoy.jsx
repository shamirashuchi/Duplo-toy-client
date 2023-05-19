import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import Singletoy from '../Singletoy/Singletoy';

const Alltoy = () => {
    const toys = useLoaderData();
    return (
        <div>
            <Header></Header>
            <h2>This is all toy page:{toys.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th></th>
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