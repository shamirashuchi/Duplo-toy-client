import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/Authproviders';
import logo  from '../../../public/duplo-lego.svg'
const Header = () => {
    const {user, logout,updateUserData} = useContext(AuthContext);
    console.log(user);
    const handlelogout = () =>{
        logout()
        .then(() =>{})
        .catch(error => console.error(error))
    }
    return (
        <div className="navbar  bg-accent">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                    {
                        user && <Link to="/addtoy">Add a toy</Link>
                    }
                    </li>
                    <li>
                    <Link to="/alltoy">All toy</Link>
                    </li>
                    <li>
                        {
                            user && <Link to="/mytoy">My toy</Link>
                        }
                    </li>
                    <li>
                            {
                            user ? 
                            <>
                            <img style={{height:"20px",width:"20px"}}src={user.photoURL} alt="" />
                            </>
                            : <Link to="/login">Login</Link>
                            }
                    </li>
                    <li>
                    <button onClick = {handlelogout} className="btn btn-secondary">Sign out</button>
                    </li>
                    <li>
                    <Link to="/registration">Registration</Link>
                    </li>
                </ul>
                </div>
                <a className="w-12">
          <img src={logo} alt="Logo" /></a>
          <a className='text-xl'>Duplo toy</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    {
                        user && <Link to="/addtoy">Add a toy</Link>
                    }
                </li>
                <li>
                    <Link to="/alltoy">All toy</Link>
                    </li>
                    <li>
                        {
                            user && <Link to="/mytoy">My toy</Link>
                        }
                    </li>
                    <li>
                    <button onClick = {handlelogout} className="btn btn-secondary">Sign out</button>
                    </li>
                    <li>
                    <li>
                            {
                            user ? 
                            <>
                            <img style={{height:"20px",width:"20px"}}src={user.photoURL} alt="" />
                            </>
                            : <Link to="/login">Login</Link>
                            }
                    </li>
                    </li>
                    <li>
                    <Link to="/registration">Registration</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;