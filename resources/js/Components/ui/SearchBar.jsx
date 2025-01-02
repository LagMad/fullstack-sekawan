import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ className, onSearch, fillColor, placeholder }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            onSearch(searchTerm);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center font-Poppins w-full"
        >
            <div className="relative flex items-center w-full">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    className={`${className} border-[1.5px] border-cust-orange-normal px-16 py-2 rounded-md outline-none w-full`}
                />
                <button
                    type="submit"
                    className="absolute left-1 top-0 h-full px-4 flex items-center"
                    style={{ backgroundColor: "transparent" }}
                >
                    <FaSearch color={fillColor} />
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
