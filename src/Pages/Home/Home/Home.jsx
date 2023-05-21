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

const Home = () => {
  useTitle('Home');
  const navigate = useNavigate();
  const [Data, setData] = useState([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [selectedToy, setSelectedToy] = useState({});

  useEffect(() => {
    fetch("http://localhost:2000/toys")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
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
    <div>
      <Header></Header>
      <Slider></Slider>
      <Gallery></Gallery>
      <Tabs selectedIndex={activeTabIndex} onSelect={handleTabSelect}>
        <TabList>
          <div className="grid justify-items-center text-pink-600 underline underline-offset-4">
            {Data.map((subCategory) => (
              <Tab key={subCategory.name}>{subCategory.name}</Tab>
            ))}
          </div>
        </TabList>

        <div className="flex">
          {Data.map((subCategory) => (
            <TabPanel key={subCategory.name} data-aos="fade-up">
              <h2>{subCategory.name}</h2>
              <div className="toy-list">
                {subCategory.toys.map((toy) => (
                  <div className="toy" key={toy.id}>
                    <img src={toy.imageUrl} alt={toy.name} />
                    <div className="toy-details">
                      <h3>{toy.name}</h3>
                      <p>Price: ${toy.price}</p>
                      <p>Rating: {toy.rating}</p>
                      <button
                        className="btn btn-secondary"
                        onClick={() => handleViewDetails(toy)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </div>
      </Tabs>
      {/* {selectedToy && <ToyDetailsModal toy={selectedToy}></ToyDetailsModal>} */}
      <Language></Language>
      <Engineeringtoys></Engineeringtoys>
      <Footer></Footer>
    </div>
  );
};

export default Home;
