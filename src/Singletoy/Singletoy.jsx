import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const Singletoy = ({toy}) => {
  useTitle('details');
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
        <td className="font-bold">
          {toy.toyname}
        </td>
        <td className="font-bold">{toy.category}</td>
        <td className="font-bold">{toy.price}</td>
        <td className="font-bold">{toy.quantity}</td>
        <th>
          <button onClick={() => handleViewDetails(toy)} className="btn bg-pink-300 hover:bg-pink-400 btn-xs">details</button>
        </th>
      </tr>
    );
};

export default Singletoy;