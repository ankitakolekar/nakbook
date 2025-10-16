// import React from 'react'

// function Searchbar() {
//   return (
  
    
   
//   )
// }

// export default Searchbar


import React, { useState } from "react";

const bookNames = [
  "AADIWASI VIKAS BHARTI (आदिवासी विकास भरती)",
  "aarogya",
  "agniveer",
  "anganwadi",
  "Architecture",
  "ARMY",
  "Banking Exam",
  "Bhugol (भूगोल)",
  "CAT Arun Sharma",
  "CET",
  "Civil Engineering",
  "Current Affairs",
  "DELHI POLICE",
  "english",
  "Ganit",
  "GEOGRAPHY",
  "HINDI",
  "Hotel Management",
  "indian constitution",
  "Itihas",
  "JEE",
  "LAW CET/CLAT/LLB",
  "LLB CET",
  "LOKSEVA",
  "MBA CET",
  "MHT CET",
  "NDA",
  "NEET-CET-JEE",
  "Notes/Mind-map",
  "Police Bharti (पोलिस भरती)",
  "PWD",
  "Quantitative",
  "RAILWAY",
  "RAJYASEVA",
  "samajshastra",
  "SET-NET",
  "ssc cgl",
  "SSC GD",
  "stateboard",
  "talathi",
  "TET",
  "UPSC",
  "Vanrakshak/Vansevak",
  "Vidnyan",
  "zilha parishad"
];

export default function AutocompleteBooks() {
  const [inputValue, setInputValue] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.trim() === "") {
      setFiltered([]);
    } else {
      const filteredItems = bookNames.filter((name) =>
        name.toLowerCase().startsWith(value.toLowerCase())
      );
      setFiltered(filteredItems);
    }
    setActiveIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      setInputValue(filtered[activeIndex]);
      setFiltered([]);
    }
  };

  const handleSelect = (name) => {
    setInputValue(name);
    setFiltered([]);
  };

return (
    <div className="w-full flex justify-center items-start mt-8">
        <form
            className="hidden md:flex relative items-center w-full max-w-[400px] h-[40px]"
            onSubmit={e => {
                e.preventDefault();
                if (inputValue.trim()) {
                    setFiltered([]);
                }
            }}
        >
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Search products..."
                className="w-full pl-4 pr-[70px] py-2 rounded-full bg-gray-100 outline-none"
            />
            <button className="bg-[#051d38] w-[65px] absolute right-1 rounded-full text-white py-1">
                Search
            </button>
            {filtered.length > 0 && (
                <ul className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                    {filtered.map((name, index) => (
                        <li
                            key={name}
                            onClick={() => handleSelect(name)}
                            className={`px-4 py-2 cursor-pointer ${
                                index === activeIndex
                                    ? "bg-blue-500 text-white"
                                    : "hover:bg-gray-100"
                            }`}
                        >
                            {name}
                        </li>
                    ))}
                </ul>
            )}
        </form>
    </div>
);
}
