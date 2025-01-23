import React, { useState } from "react";
import './AccSidebar.css';
import { BiArrowToRight } from "react-icons/bi";
import { CgChevronRight } from "react-icons/cg";

// Custom Sidebar Component
export default function Sidebar({ data }) {
    const [openIndex, setOpenIndex] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const toggleItem = (index) => {
        setOpenIndex(selectedSubcategory === index ? null : index);
    };

    return (
        <div className="sidebar rounded-b-lg md:w-[80%] w-[90%] border bg-white shadow-sm">
            {/* <h2 className="sidebar-header">Categories</h2> */}
            {data?.map((category, index) => (
                <div key={category.id} className="accordion-item">
                    <div className="accordion-header">
                        <button
                            className={`accordion-button w-full ${openIndex === index ? "open" : ""}`}
                            onClick={() => toggleAccordion(index)}>
                            <div className=" flex flex-row items-center justify-between w-full leading-normal">
                                <span className="leading-normal">{category.category}</span>
                                <CgChevronRight size={15} />
                            </div>
                        </button>
                    </div>
                    <div
                        className={`accordion-body ${openIndex === index ? "show" : ""}`}
                    >
                        <ul>
                            {category.subCategories?.length ? (
                                category.subCategories.map((subcategory, subIndex) => (
                                    <li key={subIndex} className="subcategory-item"
                                        onClick={() => toggleItem(subcategory)}>
                                        {subcategory}
                                    </li>
                                ))
                            ) : 
                            ''
                            }
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}
