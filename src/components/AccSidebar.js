import React, { useState } from "react";
import './AccSidebar.css';

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
        <div className="sidebar rounded-b-lg animate-slideDown">
            <h2 className="sidebar-header">Categories</h2>
            {data?.map((category, index) => (
                <div key={category.id} className="accordion-item">
                    <div className="accordion-header">
                        <button
                            className={`accordion-button ${openIndex === index ? "open" : ""}`}
                            onClick={() => toggleAccordion(index)}>
                            {category.category}
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
                            ) : (
                                <li>No subcategories available</li>
                            )}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}
