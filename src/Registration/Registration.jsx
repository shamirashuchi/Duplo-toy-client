import React, { useContext, useState } from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/Authproviders';
import { getAuth, updateProfile } from 'firebase/auth';
import useTitle from '../hooks/useTitle';
const Registration = () => {
    const {user,createUser,updateUserData} = useContext(AuthContext);
    useTitle('Register');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    console.log(user,createUser);
    const handleRegister = event =>{
        event.preventDefault();
        setError('');
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }
        createUser(email,password)
        .then(result => {
            const createdUser = result.user;
                const auth = getAuth();
                    updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                    }).then(() => {
                    console.log("user updated successfully")
                    // ...
                    }).catch((error) => {
                    // An error occurred
                    // ...
                    });
                console.log(createdUser);
                setError('');
                event.target.reset();
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
        })
    }
    return (
        <div>
            <Header></Header>
            <div className="hero min-h-screen bg-pink-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-pink-400">Please Register!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister}  className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-pink-400">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-pink-400">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-pink-400">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                        <label className="label ">
                            <span className="label-text text-pink-400">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                        <label className="label">
                            <Link to="/login" className="label-text-alt link link-hover text-pink-400">Already have an account?</Link>
                        </label>
                        </div>
                        <div>
                            {error}
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-pink-400">Register</button>
                        </div>
                    </form>
            </div>
        </div>
    </div>
            <Footer></Footer>
        </div>
    );
};

export default Registration;