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
import NavBar2 from "../components/NavBar2";
import { BsCartDash, BsSearch, BsWhatsapp } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import CatCard from "../components/CatCard";
import { Dots } from "react-activity";
import "react-activity/dist/Dots.css";

export default function Products() {

    const { category } = useParams();

    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [id, setId] = useState();
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState(data);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [openCat, setOpenCat] = useState(true);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${BaseUrl}/add`);
            const json = await response.json();
            console.log('filter:', category);
            const selectedCat = await json.filter((item) => item.category?.toLowerCase() === category?.toLowerCase());
            setData(selectedCat);
            setFilterData(selectedCat);
        } catch (e) {
            console.log('error fetching data', e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        fetchData();
    }, [category]);

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

    return (
        <div className="w-full min-h-screen flex flex-col bg-white items-center mx-auto">
            <div className="md:w-[90%] w-full min-h-screen flex flex-col bg-white items-center mx-auto">
                {/* Navbar */}
                <NavBar2 cart={true} search={true} showRight={!isMobile} />
                <img src={require('../../src/assets/images/image4.jpeg')} className="h-[250px] w-full rounded-md" />
                <div className="flex flex-row items-center w-full justify-center">
                    <div className="md:w-[40%] w-[60%] flex flex-row items-center border rounded-lg h-[40px]">
                        <input className="w-[90%] border-none outline-none h-[35px] pl-4 rounded-l-lg" type="search" onChange={handleText} placeholder="Search" aria-label="Search" />
                        <div className="w-[10%] items-center flex flex-col bg-[#347928] h-full justify-center rounded-r-lg">
                            <BsSearch size={15} className="text-white" />
                        </div>
                    </div>
                    <div className="h-[40px] w-[40px] bg-[#347928] flex flex-col items-center justify-center rounded-lg ml-8 my-2">
                        <Link to="/Cart">
                            <BsCartDash size={22} className="text-white" />
                        </Link>
                    </div>
                </div>
                {/* Main Container */}
                <div className="flex flex-col md:flex-row w-full md:justify-center ">
                    {/* Sidebar */}
                    <div className={`flex flex-col w-full md:w-[30%] items-center ${isMobile ? "p-0" : "px-2 py-6"}  md:h-[490px]`}>
                        <div className="p-2 bg-[#347928] w-[90%] md:w-[80%] rounded-t-lg flex items-center shadow-sm">
                            <button
                                style={{ background: "none", border: "none", cursor: "pointer" }}
                                onClick={() => setOpenCat(!openCat)}>
                                <MdMenu size={30} color="white" />
                            </button>
                            <span className="text-white ml-2">All Categories</span>
                        </div>
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out w-full items-center flex flex-col ${openCat ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <AccSidebar data={categoryData} />
                        </div>
                    </div>
                    {/* Main Content */}
                    <div className="flex flex-col w-full md:w-[70%] pr-4 py-6">
                        <div className="w-full flex flex-row items-center justify-between mb-1">
                            <div className="d-flex flex-wrap py-2 pb-2 bg-white mb-2">
                                <span className="text-[16px] text-black px-3 hover:text-primary">
                                    Home
                                </span>
                                <span className="text-[16px] text-black px-3 hover:text-primary">
                                    Blogs
                                </span>
                                <span className="text-[16px] text-black px-3 hover:text-primary">
                                    Companies
                                </span>
                            </div>
                            <div className="flex flex-row items-center">
                                <BsWhatsapp size={30} className="text-[#347928] mr-2" />
                                <div className="flex flex-col items-center justify-center">
                                    <span className="text-[16px] text-black leading-normal">+92 3489598799</span>
                                    <span className="text-[14px] text-black leading-normal">Customer Support</span>
                                </div>
                            </div>
                        </div>
                        {/* Carousel */}
                        {/* <Carousel /> */}
                        <h4 className="w-full p-2 bg-[#347928] text-white rounded-t-md">{category}</h4>
                        {/* Cards */}
                        {loading ? <Dots className="self-center text-[#347928] mt-[10%]"/> : <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-0 w-full mb-4 bg-[#C0EBA6] p-2">
                            {filterData.map((item, index) => (
                                <Card
                                    key={index}
                                    image={item.image}
                                    title={item.heading}
                                    detail={item.detail}
                                    price={item.price}
                                    onClick={() => toggleOffcanvas(item._id)}
                                />
                            ))}
                        </div>}
                        {/* Modal */}
                        {showOffcanvas && (
                            <Modal
                                onClose={() => setShowOffcanvas(false)}
                                id={id}
                            />
                        )}
                    </div>
                </div>
                {/* <div className="w-[95%] flex flex-col md:flex-row items-center justify-between mb-4 mx-auto">
          <img src={require("../../src/assets/images/image1.jpeg")} className="h-[170px] md:w-[49%] w-full mt-4 md:mt-0 rounded-md object-cover animate-slideFromLeft" />
          <img src={require("../../src/assets/images/image2.jpeg")} className="h-[170px] md:w-[49%] w-full mt-4 md:mt-0 rounded-md object-cover animate-slideFromRight" />
        </div> */}
                {/* Footer */}
            </div>
            {/* <div className="w-[85%] flex flex-col md:flex-row items-center justify-between mb-4 mx-auto">
                <img src={require("../../src/assets/images/image1.jpeg")} className="h-[170px] md:w-[49%] w-full mt-4 md:mt-0 rounded-md object-cover animate-slideFromLeft" />
                <img src={require("../../src/assets/images/image2.jpeg")} className="h-[170px] md:w-[49%] w-full mt-4 md:mt-0 rounded-md object-cover animate-slideFromRight" />
            </div> */}
            {/* <h2 className="w-[85%] pb-2">Categories</h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mt-0 w-[85%] bg-[#FFFBE6] mb-4 p-2">
                {categoryData.map((item, index) => (
                    <CatCard
                        key={index}
                        image={item.image}
                        title={item.category}
                    />
                ))}
            </div> */}
            <Footer />
        </div>
    );
}
