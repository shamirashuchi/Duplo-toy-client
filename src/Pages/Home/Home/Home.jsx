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
    fetch("http://localhost:2000/toys")
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
  console.log(Data);
  return (
    <div className="bg-pink-100">
      <Header></Header>
      <Item></Item>
      <Slider></Slider>
      <Gallery></Gallery>
      <h2  style={{ fontStyle: 'italic' }} className="text-center text-6xl text-pink-500 mt-40 mb-10 font-bold underline">
            Shop Educational Toys by Category
            </h2>
      <Tabs selectedIndex={activeTabIndex} onSelect={handleTabSelect}>
      <div className="">
    {Data.map((subCategory) => (
      <TabPanel key={subCategory.name} data-aos="fade-right">
        <h2 className="text-center text-6xl mt-20 mb-10 font-bold text-pink-500">{subCategory.name}</h2>
        <div className="toy-list grid grid-cols-1 ml-20   md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:mx-16">
          {subCategory.toys.map((toy) => (
            <div key={toy.id}>
              <div className="mt-5">
                <img onClick={() => handleViewDetails(toy)} src={toy.imageUrl} alt={toy.name} className="h-60 w-60" />
                
              </div>
            </div>
          ))}
        </div>
      </TabPanel>
    ))}
  </div>
  <TabList>
    <div className="grid grid-cols-1 md:grid-cols-3 text-white bg-pink-100 md:mt-5 xl:mt-5 rounded-full md:m-20 md:bg-pink-400  lg:bg-pink-400 lg:rounded-full w-1/2 lg:ml-72">
      {Data.map((subCategory) => (
        <Tab
          className="w-full bg-pink-400 px-10 mt-5 ml-28  md:w-1/2 lg:w-1/3 xl:w-1/4  xl:p-0 md:ml-16  lg:mt-0 lg:p-0"
          key={subCategory.name}
        >
          {subCategory.name}
        </Tab>
      ))}
    </div>
  </TabList>

 
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
