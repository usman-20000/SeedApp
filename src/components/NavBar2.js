import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { colors } from "../assets/Data";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

export default function NavBar2(props) {
    const [showCart, setShowCart] = useState(props.cart);
    const [showSearch, setShowSearch] = useState(props.search);
    const [showCollapse, setShowCollapse] = useState(false);


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-b w-full my-2">
            <div className="container-fluid px-3">
                {/* Social Media Icons */}
                <div className="d-flex align-items-center">
                    <FaFacebook
                        size={16}
                        className="text-black-500 mx-2 hover:text-primary"
                    />
                    <BsInstagram
                        size={16}
                        className="text-black-500 mx-2 hover:text-primary"
                    />
                    <BsTwitter
                        size={16}
                        className="text-black-500 mx-2 hover:text-primary"
                    />
                    <BsYoutube
                        size={16}
                        className="text-black-500 mx-2 hover:text-primary"
                    />
                </div>
                {/* Collapsible Content */}
                {/* Additional Links */}
                {props.showRight && (<div className="d-flex flex-wrap">
                    <span className="text-[14px] text-red-500 font-bold px-3 border-end hover:text-primary">
                        All Product
                    </span>
                    <span className="text-[14px] text-black px-3 border-end hover:text-primary">
                        Contact Us
                    </span>
                    <span className="text-[14px] text-black px-3 border-end hover:text-primary">
                        Signup
                    </span>
                    <span className="text-[14px] text-black px-3 hover:text-primary">
                        Login
                    </span>
                </div>)}
                <button onClick={() => setShowCollapse(!showCollapse)} className="border-2 rounded-md px-2 py-1 flex flex-col items-center justify-center d-md-none">
                    <span class="navbar-toggler-icon"></span>
                </button>
                {showCollapse && (<div className="flex flex-col w-full">
                    <span className="text-[14px] text-red-500 font-bold px-3 py-2 border-end hover:text-primary">
                        All Product
                    </span>
                    <span className="text-[14px] text-black px-3 py-2 border-end hover:text-primary">
                        Contact Us
                    </span>
                    <span className="text-[14px] text-black px-3 py-2 border-end hover:text-primary">
                        Signup
                    </span>
                    <span className="text-[14px] text-black px-3 py-2 hover:text-primary">
                        Login
                    </span>
                </div>)}
            </div>
        </nav>
    );
}
