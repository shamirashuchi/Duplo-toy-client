import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Singletoy = ({toy}) => {
  const navigate = useNavigate();
  const handleViewDetails = (toy) => {
    const data = { toy };
    navigate("/detailspage", { state: { data } });
  };
    return (
        <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-bold">{toy.sellername}</div>
            </div>
          </div>
        </td>
        <td>
          {toy.toyname}
        </td>
        <td>{toy.category}</td>
        <td>{toy.price}</td>
        <td>{toy.quantity}</td>
        <th>
          <button onClick={() => handleViewDetails(toy)} className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
};

export default Singletoy;