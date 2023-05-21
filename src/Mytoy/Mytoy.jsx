import React, { useContext, useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { AuthContext } from "../providers/Authproviders";
import Mytowrow from "./Mytowrow";
import useTitle from "../hooks/useTitle";

const Mytoy = () => {
  useTitle('Mytoy');
  const { user } = useContext(AuthContext);
  const [Data, setData] = useState([]);
  const [sort, setSort] = useState(true);
  const userMail = "mama@mami.com";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:2000/toyByEmail?email=${user?.email}&sort=${
          sort ? "asc" : "desc"
        }`;
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [user, sort]);

  const sortHandler = () => {
    setSort((prev) => !prev);
  };

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:2000/toy/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
        //   console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = Data.filter((singletoy) => singletoy._id !== id);
            setData(remaining);
          }
        });
    }
  };

  return (
    <div>
      <Header></Header>
      <h2 className="text-5xl">Your Toys:{Data.length}</h2>
      <br />
      <div>
        <button className="btn btn-secondary" onClick={sortHandler}>
          {!sort ? "Ascending" : "Descending"}
        </button>
      </div>
      <br />
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
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((toy) => (
              <Mytowrow
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}
              ></Mytowrow>
            ))}
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Mytoy;
