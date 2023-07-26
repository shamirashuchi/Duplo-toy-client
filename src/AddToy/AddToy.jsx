import React, { useContext } from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { AuthContext } from '../providers/Authproviders';
import Swal from 'sweetalert2'
import useTitle from '../hooks/useTitle';

const AddToy = () => {
    const {user} = useContext(AuthContext);
    useTitle('Add toy');
    const handleAddToy = event =>{
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const toyname = form.toyname.value;
        const sellername = form.sellername.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const toy = {photo,toyname,sellername,email,category,price,rating,quantity,details};
        console.log(toy);

        fetch('https://toy-server-side-rho.vercel.app/toy',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(toy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success',
                    text: 'Toy added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className='bg-pink-100'>
            <Header></Header>
            <h1 className='text-center text-7xl text-pink-400 mt-12 mb-4'>Add A Toy</h1>
            <div className='flex justify-center'>
                <form onSubmit={handleAddToy}>
                    <div className='flex'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-pink-400">Picture URL</span>
                            </label>
                            <input type="text" name="photo"  placeholder="Picture URL" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs ms-12">
                            <label className="label">
                                <span className="label-text  text-pink-400">Toy name</span>
                            </label>
                            <input type="text" name="toyname"  placeholder="Toy name" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className='flex mt-6'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text  text-pink-400">Seller name</span>
                            </label>
                            <input type="text" name="sellername" defaultValue={user.displayName && user.displayName}  placeholder="Seller name" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs ms-12">
                            <label className="label">
                                <span className="label-text  text-pink-400">Seller email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user.email}  placeholder="Seller email" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    {/* category and price field */}
                    <div className='flex'>
                    <div>
                    <label className="label">
                                <span className="label-text  text-pink-400 mt-3">Category</span>
                            </label>
                        <select className="select select-bordered w-52 max-w-xs" name="category">
                        <option disabled selected>Sub Category</option>
                        <option>Math Toys</option>
                        <option>Language Toys</option>
                        <option>Engineering Toys</option>
                        </select>
                    </div>
                        <div className="form-control w-full max-w-xs ms-12 mt-3">
                            <label className="label">
                                <span className="label-text  text-pink-400">Price</span>
                            </label>
                            <input type="text" name="price"  placeholder="Price" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    {/* price and Rating */}
                    <div className='flex mt-6'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text  text-pink-400">Rating</span>
                            </label>
                            <input type="text" name="rating"  placeholder="Rating" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs ms-12">
                            <label className="label">
                                <span className="label-text  text-pink-400">Quantity</span>
                            </label>
                            <input type="text" name="quantity"  placeholder="quantity" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div>
                    <label className="label">
                                <span className="label-text  text-pink-400 mt-3">Details</span>
                            </label>
                    <textarea className="textarea textarea-bordered  mb-6 w-full" name="details" placeholder="Detail description"></textarea>
                    </div>
                    <div className='flex justify-center'>
                    <input type="submit" value="Add Toy" className="btn mb-12 bg-pink-400 hover:bg-pink-600"/>
                    </div>
                </form>
            </div>
             <Footer></Footer>
        </div>
    );
};

export default AddToy;