import React, { useContext, useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { AuthContext } from '../providers/Authproviders';

const Mytoy = () => {
    const {user} = useContext(AuthContext);
    console.log(user.email);
    const [Data,setData] = useState([]);
    const url = `http://localhost:2000/toy?email=${encodeURIComponent(user.email)}`;
    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data =>console.log(data))
    } , [])
    return (
        <div>
            <Header></Header>
            <h2>This is mytoy page</h2>
            <Footer></Footer>
        </div>
    );
};

export default Mytoy;