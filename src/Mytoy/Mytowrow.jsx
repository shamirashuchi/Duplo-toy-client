import React from 'react';
import { Link } from 'react-router-dom';

const Mytowrow = ({toy,handleDelete,handleToyConfirm}) => {
    const {_id,photo,toyname,sellername,email,category,price,rating,quantity,details,status} = toy;

    
    return (
            <tr>
                <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    </div>
                </div>
                </td>
                <td>
                {toyname}
                </td>
                <td>{sellername}</td>
                <td>{email}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{rating}</td>
                <td>{quantity}</td>
                <td>{details}</td>
                <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
                </th>
                <th>
                <Link to={`/update/${_id}`}><button className="btn btn-ghost btn-xs">Update</button></Link>
                </th>
            </tr>
    );
};

export default Mytowrow;