import React, { useContext, useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { AuthContext } from '../providers/Authproviders';
import Mytowrow from './Mytowrow';

const Mytoy = () => {
    const {user} = useContext(AuthContext);
    const [Data,setData] = useState([]);
    useEffect( () => {
        const url = `http://localhost:2000/toyByEmail?email=${user?.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setData(data))
    } , [user]);


    const handleDelete = id =>{
        const proceed = confirm('Are you sure you want to delete');
        if(proceed){
            fetch(`http://localhost:2000/toy/${id}`,{
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted successfully');
                    const remaining = Data.filter(singletoy => singletoy._id !== id);
                    setData(remaining);
             }
            })
        }
    }


    return (
        <div>
            <Header></Header>
            <h2 className="text-5xl">Your Toys:{Data.length}</h2>
            <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Toyname</th>
                            <th>Sellername</th>
                            <th>Email</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Details</th>
                            <th></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                             {
                                Data.map(toy => <Mytowrow
                                key = {toy._id}
                                toy = {toy}
                                handleDelete={handleDelete}
                                ></Mytowrow>)
                             }
                        </tbody> 
                    </table>
                    </div>
            <Footer></Footer>
        </div>
    );
};

export default Mytoy;