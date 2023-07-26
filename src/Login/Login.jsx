import React, { useContext } from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/Authproviders';
import useTitle from '../hooks/useTitle';
const Login = () => {
    const {signIn,SignInWithGoogle} = useContext(AuthContext);
    useTitle('Login');
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
        })
        .catch(error => {
            console.log(error);
        })
    }
    const handleGoogleSignIn = () =>{
        SignInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            //form.reset();
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <Header></Header>
                    <div className="hero min-h-screen bg-pink-100 text-pink-400">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <form onSubmit={handleLogin}  className="card-body">
                                    <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-pink-400">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
                                    </div>
                                    <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-pink-400">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover text-pink-400">Forgot password?</a>
                                    </label>
                                    </div>
                                    <div className="form-control mt-6">
                                    <button className="btn bg-pink-400 text-white">Login</button>
                                    </div>
                                </form>
                                <p className='mb-4 ml-8'>
                                <Link to='/registration'className="label-text-alt link link-hover text-pink-400">New to Duplotoy? Please Register</Link>
                                </p>
                                <div className=' flex justify-center mb-10'>
                                <button onClick={handleGoogleSignIn} className="btn bg-pink-400 text-white">Log In with Google</button>
                                </div>
                        </div>
                    </div>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;