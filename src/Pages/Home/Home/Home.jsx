import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Header from "../../../Shared/Header/Header";
import Footer from "../../../Shared/Footer/Footer";
import Slider from "../Slider/Slider";
import Gallery from "../Gallery/Gallery";
import Language from "../Language/Language";
import Engineeringtoys from "../Engineeringtoys/Engineeringtoys";
import ToyDetailsModal from "../ToyDetailsModal/ToyDetailsModal";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import Item from "../../../Item/Item";
import Cars from "../Cars/Cars";

const Home = () => {
  useTitle("Home");
  const navigate = useNavigate();
  const [Data, setData] = useState([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [selectedToy, setSelectedToy] = useState({});

  useEffect(() => {
    fetch("https://toy-server-side-rho.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        AOS.init();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleTabSelect = (index) => {
    setActiveTabIndex(index);
  };

  const handleViewDetails = (toy) => {
    const data = { toy };
    navigate("/toydetails", { state: { data } });
  };

  return (
    <div className="bg-pink-100">
      <Header></Header>
      <Item></Item>
      <Slider></Slider>
      <Gallery></Gallery>
      <h2  style={{ fontStyle: 'italic' }} className="text-center text-6xl text-pink-500 mt-40 mb-10 font-bold">
            Shop Educational Toys by Category
            </h2>
      <Tabs selectedIndex={activeTabIndex} onSelect={handleTabSelect}>
  <TabList>
    <div className="grid grid-cols-1 md:grid-cols-1 text-white mt-10 lg:ml-80">
      {Data.map((subCategory) => (
        <Tab
          className="bg-pink-600 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 gap-4 p-4 mt-10"
          key={subCategory.name}
        >
          {subCategory.name}
        </Tab>
      ))}
    </div>
  </TabList>

  <div className="">
    {Data.map((subCategory) => (
      <TabPanel key={subCategory.name} data-aos="fade-right">
        <h2 className="text-center text-6xl mt-20 mb-10 font-bold text-pink-400">{subCategory.name}</h2>
        <div className="toy-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-20  xl:mx-40">
          {subCategory.toys.map((toy) => (
            <div className="toy shadow-md rounded-md pe-40 bg-pink-400" key={toy.id}>
              <div className="text-white flex">
                <img src={toy.imageUrl} alt={toy.name} className="h-60 w-60" />
                <div className="toy-details ml-5 mt-10">
                  <h3>{toy.name}</h3>
                  <p>Price: ${toy.price}</p>
                  <p>Rating: {toy.rating}</p>
                  <button
                    className="btn bg-pink-100 text-pink-400"
                    onClick={() => handleViewDetails(toy)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TabPanel>
    ))}
  </div>
</Tabs>
<Cars></Cars>

      {/* {selectedToy && <ToyDetailsModal toy={selectedToy}></ToyDetailsModal>} */}
      {/* <Language></Language>
      <Engineeringtoys></Engineeringtoys> */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
