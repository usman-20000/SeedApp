import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import { BaseUrl, categoryData } from "../assets/Data";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import AccSidebar from "../components/AccSidebar";
import { MdMenu } from "react-icons/md";

export default function Home() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [id, setId] = useState();
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState(data);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openCat, setOpenCat] = useState(true);

  const fetchData = async () => {
    const response = await fetch(`${BaseUrl}/add`);
    const json = await response.json();
    setData(json);
    setFilterData(json);
  };

  useEffect(() => {
    fetchData();
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchFilter = (txt) => {
    const data1 = data.filter((item) =>
      item?.heading?.toLowerCase()?.includes(txt?.toLowerCase())
    );
    setFilterData(data1);
  };

  const toggleOffcanvas = (id) => {
    setShowOffcanvas(!showOffcanvas);
    setId(id);
  };

  const handleText = (event) => {
    fetchFilter(event.target.value);
    if (event.target.value === "") {
      setFilterData(data);
    }
  };

  const isMobile = windowWidth <= 768;
  const cardStyle = {
    width: isMobile ? "calc(50% - 20px)" : "calc(25% - 20px)",
    marginBottom: "20px",
    marginLeft: "10px",
    marginRight: "10px",
  };

  return (
    <div>
      <NavBar handleText={handleText} cart={true} search={true} />
      <div className="flex flex-col md:flex-row w-full items-start">
        {/* Sidebar */}
        <div
          className={`flex flex-col w-full md:w-[25%] items-center ${isMobile ? "p-0" : ""
            }`}
        >
          <div className="p-2 bg-[#09288e] md:w-[80%] w-[90%] rounded-t-lg flex flex-row items-center md:justify-start">
            <button
              style={{ background: "none", border: "none", cursor: "pointer" }}
              onClick={()=>setOpenCat(!openCat)}
            >
              <MdMenu size={30} color="white" />
            </button>
            <span className="text-white ml-2">All Categories</span>
          </div>
          {openCat && (<AccSidebar data={categoryData} />)}
        </div>
        {/* Main Content */}
        <div className="flex flex-col w-full md:w-[75%] overflow-y-scroll px-4">
          <Carousel />
          {showOffcanvas && (
            <Modal
              onClose={() => {
                setShowOffcanvas(false);
              }}
              id={id}
            />
          )}

          <div className="flex flex-wrap justify-center md:justify-start mt-6">
            {filterData.map((item, index) => (
              <div key={index} style={cardStyle}>
                <Card
                  image={item.image}
                  title={item.heading}
                  detail={item.detail}
                  price={item.price}
                  onClick={() => {
                    toggleOffcanvas(item._id);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
