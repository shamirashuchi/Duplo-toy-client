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

        fetch('http://localhost:2000/toy',{
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
        <div>
            <Header></Header>
            <h1 className='text-center text-7xl'>Add A Toy</h1>
            <div className='ms-96'>
                <form onSubmit={handleAddToy}>
                    <div className='flex'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Picture URL</span>
                            </label>
                            <input type="text" name="photo"  placeholder="Picture URL" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs ms-12">
                            <label className="label">
                                <span className="label-text">Toy name</span>
                            </label>
                            <input type="text" name="toyname"  placeholder="Toy name" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className='flex mt-6'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Seller name</span>
                            </label>
                            <input type="text" name="sellername" defaultValue={user.displayName && user.displayName}  placeholder="Seller name" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs ms-12">
                            <label className="label">
                                <span className="label-text">Seller email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user.email}  placeholder="Seller email" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    {/* category and price field */}
                    <div className='flex'>
                        <select className="select select-bordered w-full max-w-xs mt-12" name="category">
                        <option disabled selected>Sub Category</option>
                        <option>Math Toys</option>
                        <option>Language Toys</option>
                        <option>Engineering Toys</option>
                        </select>
                        <div className="form-control w-full max-w-xs ms-12 mt-3">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price"  placeholder="Price" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    {/* price and Rating */}
                    <div className='flex mt-6'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name="rating"  placeholder="Rating" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs ms-12">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="text" name="quantity"  placeholder="quantity" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div>
                    <textarea className="textarea textarea-bordered mt-6 mb-6" name="details" placeholder="Detail description"></textarea>
                    </div>
                    <input type="submit" value="Add Toy" className="btn ms-80 mb-12"/>
                </form>
            </div>
             <Footer></Footer>
        </div>
    );
};

export default AddToy;