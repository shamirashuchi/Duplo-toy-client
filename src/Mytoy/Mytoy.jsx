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
    //https://toyworld-bf906.web.app
    const fetchData = async () => {
      try {
        const url = `https://toy-server-side-rho.vercel.app/toyByEmail?email=${user?.email}&sort=${
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
      fetch(`https://toy-server-side-rho.vercel.app/toy/${id}`, {
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
    <div className="bg-pink-100">
      <Header></Header>
      <h2 className="text-5xl flex justify-center text-pink-400 my-10">Your Toys</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-1/2">
          {/* head */}
          <thead>
            <tr>
              <th className="bg-purple-600">Photo</th>
              <th className="bg-purple-600">Toyname</th>
              <th className="bg-purple-600">Sellername</th>
              <th className="bg-purple-600">Email</th>
              <th className="bg-purple-600">Category</th>
              <th className="bg-purple-600">Price</th>
              <th className="bg-purple-600">Rating</th>
              <th className="bg-purple-600">Quantity</th>
              <th className="bg-purple-600">Details</th>
              <th className="bg-purple-600">Delete</th>
              <th className="bg-purple-600">Update</th>
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
      <br />
      <div className="flex justify-center">
        <button className="btn btn-secondary" onClick={sortHandler}>
          {!sort ? "Ascending" : "Descending"}
        </button>
      </div>
      <br />
      <Footer></Footer>
    </div>
  );
};

export default Mytoy;
