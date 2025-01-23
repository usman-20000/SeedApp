import React from "react";
import { colors } from "../assets/Data";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiMobile } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";

export default function Footer() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full bg-[#00308F] py-8 px-4 items-start">
            <div className="flex flex-col items-start">
                <div className="flex flex-row items-center">
                    <FaLocationDot size={12} color="white" />
                    <span className="text-white text-[12px] ml-2">Grain Market, Rahim Yar khan</span>
                </div>
                <div className="flex flex-row items-center mt-2">
                    <MdEmail size={12} color="white" />
                    <span className="text-white text-[12px] ml-2">example@gmail.com</span>
                </div>
                <div className="flex flex-row items-center mt-2">
                    <BiMobile size={12} color="white" />
                    <span className="text-white text-[12px] ml-2">+92 1234567823</span>
                </div>
                <div className="flex flex-row items-center mt-2">
                    <BsTelephone size={12} color="white" />
                    <span className="text-white text-[12px] ml-2">068 123456</span>
                </div>
            </div>
            <div className="flex flex-col items-start">
                <div className="flex flex-row items-center">
                    <span className="text-white text-[14px]">About Us</span>
                </div>
                <div className="flex flex-row items-center">
                    <span className="text-white text-[14px] mt-1">Contact Us</span>
                </div>
                <div className="flex flex-row items-center">
                    <span className="text-white text-[14px] mt-1">Return Policy</span>
                </div>
                <div className="flex flex-row items-center">
                    <span className="text-white text-[14px] mt-1">Privacy Policy</span>
                </div>
            </div>
            <div className="flex flex-col items-start">
                <div className="flex flex-row items-center">
                    <span className="text-white text-[14px]">FAQ's</span>
                </div>
                <div className="flex flex-row items-center">
                    <span className="text-white text-[14px] mt-1">Terms & Conditions</span>
                </div>
            </div>
        </div>
    )
}