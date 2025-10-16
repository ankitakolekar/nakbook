// import { Link } from 'react-router-dom';
// import { useEffect, useRef, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import logo from '../assets/images/logoImage.png';
// import { FaHeart } from "react-icons/fa";
// import { MdOutlineShoppingBag, MdAccountCircle } from "react-icons/md";
// import auth from '../firebase.init';
// import { IoMenu, IoClose } from "react-icons/io5";
// import Searchbar from './Searchbar';

// function Header() {
//   const [isOpen, setIsOpen] = useState(false); // Ask for book modal
//   const [updatesOpen, setUpdatesOpen] = useState(false); // Regular Updates dropdown
//   const [helpOpen, setHelpOpen] = useState(false); // Help dropdown
//   const [menuOpen, setMenuOpen] = useState(false); // Mobile menu
//   const [isHoverable, setIsHoverable] = useState(false);
//   const [user] = useAuthState(auth);

//   const updatesRef = useRef(null);
//   const helpRef = useRef(null);
//   const bookNames = [
//           "AADIWASI VIKAS BHARTI (आदिवासी विकास भरती)",
//           "aarogya",
//           "agniveer",
//           "anganwadi",
//           "Architecture",
//           "ARMY",
//           "Banking Exam",
//           "Bhugol (भूगोल)",
//           "CAT Arun Sharma",
//           "CET",
//           "Civil Engineering",
//           "Current Affairs",
//           "DELHI POLICE",
//           "english",
//           "Ganit",
//           "GEOGRAPHY",
//           "HINDI",
//           "Hotel Management",
//           "indian constitution",
//           "Itihas",
//           "JEE",
//           "LAW CET/CLAT/LLB",
//           "LLB CET",
//           "LOKSEVA",
//           "MBA CET",
//           "MHT CET",
//           "NDA",
//           "NEET-CET-JEE",
//           "Notes/Mind-map",
//           "Police Bharti (पोलिस भरती)",
//           "PWD",
//           "Quantitative",
//           "RAILWAY",
//           "RAJYASEVA",
//           "samajshastra",
//           "SET-NET",
//           "ssc cgl",
//           "SSC GD",
//           "stateboard",
//           "talathi",
//           "TET",
//           "UPSC",
//           "Vanrakshak/Vansevak",
//           "Vidnyan",
//           "zilha parishad"
//         ];

//   // Detect if device supports hover
//   useEffect(() => {
//     const query = window.matchMedia('(hover: hover) and (pointer: fine)');
//     const update = () => setIsHoverable(query.matches);
//     update();
//     if (query.addEventListener) {
//       query.addEventListener('change', update);
//       return () => query.removeEventListener('change', update);
//     } else {
//       query.addListener(update);
//       return () => query.removeListener(update);
//     }
//   }, []);

//   return (
//     <>
//       {/* 🔹 Top: Logo, Search, Icons, Hamburger */}
//       <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
//         {/* Logo */}
//         <Link to="/">
//           <img src={logo} alt="Logo" className="h-[50px]" />
//         </Link>

//         {/* Desktop Search */}
        
        
        
//         export default function AutocompleteBooks() {
//           const [inputValue, setInputValue] = useState("");
//           const [filtered, setFiltered] = useState([]);
//           const [activeIndex, setActiveIndex] = useState(-1);
        
//           const handleChange = (e) => {
//             const value = e.target.value;
//             setInputValue(value);
//             if (value.trim() === "") {
//               setFiltered([]);
//             } else {
//               const filteredItems = bookNames.filter((name) =>
//                 name.toLowerCase().startsWith(value.toLowerCase())
//               );
//               setFiltered(filteredItems);
//             }
//             setActiveIndex(-1);
//           };
        
//           const handleKeyDown = (e) => {
//             if (e.key === "ArrowDown") {
//               setActiveIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
//             } else if (e.key === "ArrowUp") {
//               setActiveIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
//             } else if (e.key === "Enter" && activeIndex >= 0) {
//               setInputValue(filtered[activeIndex]);
//               setFiltered([]);
//             }
//           };
        
//           const handleSelect = (name) => {
//             setInputValue(name);
//             setFiltered([]);
//           };
        
//         return (
//             <div className="w-full flex justify-center items-start mt-8">
//                 <form
//                     className="hidden md:flex relative items-center w-full max-w-[400px] h-[40px]"
//                     onSubmit={e => {
//                         e.preventDefault();
//                         if (inputValue.trim()) {
//                             setFiltered([]);
//                         }
//                     }}
//                 >
//                     <input
//                         type="text"
//                         value={inputValue}
//                         onChange={handleChange}
//                         onKeyDown={handleKeyDown}
//                         placeholder="Search products..."
//                         className="w-full pl-4 pr-[70px] py-2 rounded-full bg-gray-100 outline-none"
//                     />
//                     <button className="bg-[#051d38] w-[65px] absolute right-1 rounded-full text-white py-1">
//                         Search
//                     </button>
//                     {filtered.length > 0 && (
//                         <ul className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
//                             {filtered.map((name, index) => (
//                                 <li
//                                     key={name}
//                                     onClick={() => handleSelect(name)}
//                                     className={`px-4 py-2 cursor-pointer ${
//                                         index === activeIndex
//                                             ? "bg-blue-500 text-white"
//                                             : "hover:bg-gray-100"
//                                     }`}
//                                 >
//                                     {name}
//                                 </li>
//                             ))}
//                         </ul>
//                     )}
//                 </form>
//             </div>
     

      //   {/* Icons */}
      //   <div className="flex items-center space-x-4">
      //     <Link to="/Favorites">
      //       <FaHeart className="h-5 w-5" />
      //     </Link>
      //     <Link to="/Cart">
      //       <MdOutlineShoppingBag className="h-5 w-5" />
      //     </Link>
      //     <Link to="/MyAccount">
      //       <div className="border-2 border-green-500 rounded-full p-1">
      //         <MdAccountCircle className="h-6 w-6 text-green-600" />
      //       </div>
      //     </Link>

      //     {/* Mobile Menu Toggle */}
      //     <button
      //       className="md:hidden"
      //       onClick={() => setMenuOpen(!menuOpen)}
      //     >
      //       {menuOpen ? <IoClose size={26} /> : <IoMenu size={26} />}
      //     </button>
      //   </div>
      // </div>

//       {/* 🔹 Mobile Search */}
//       <div className="md:hidden px-4 py-2 border-b border-neutral-200">
//         <div className="relative w-full">
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="w-full border rounded-full pl-4 pr-10 py-2 bg-gray-100"
//           />
//           <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
//             🔍
//           </button>
//         </div>
//       </div>

//       {/* 🔹 Navigation */}
//       <div className={`md:flex items-center justify-center gap-6 px-4 py-3 text-sm font-semibold text-blue-900
//         ${menuOpen ? "block" : "hidden"}`}>
//         <Link to="/dashboard" className="block py-2 hover:underline">Dashboard</Link>
//         <Link to="/MyOrders" className="block py-2 hover:underline">My Orders</Link>
//         <Link to="/Profile" className="block py-2 hover:underline">Profile</Link>

//         {/* Regular Updates Dropdown */}
//         <div className="relative block py-2" ref={updatesRef}>
//           <button
//             className="hover:underline flex items-center"
//             type="button"
//             onClick={() => setUpdatesOpen((v) => !v)}
//           >
//             Regular Updates
//             <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//           {updatesOpen && (
//             <div className="absolute mt-2 w-48 bg-white border rounded shadow-lg p-2 z-50">
//               <a href="#" className="block px-3 py-2 hover:bg-gray-100">Telegram</a>
//               <a href="#" className="block px-3 py-2 hover:bg-gray-100">Instagram</a>
//               <a href="#" className="block px-3 py-2 hover:bg-gray-100">WhatsApp</a>
//             </div>
//           )}
//         </div>

//         {/* Ask for book modal trigger */}
//         <button onClick={() => setIsOpen(true)} className="block py-2 hover:underline text-blue-600">
//           Ask for book
//         </button>

//         {/* Help Dropdown */}
//         <div className="relative block py-2" ref={helpRef}>
//           <button
//             className="hover:underline flex items-center"
//             type="button"
//             onClick={() => setHelpOpen((v) => !v)}
//           >
//             Help
//             <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//           {helpOpen && (
//             <div className="absolute mt-2 w-60 bg-white border rounded shadow-lg p-2 z-50">
//               <a href="#" className="block px-4 py-2 hover:bg-gray-100">ऑर्डर कशी करावी?</a>
//               <a href="#" className="block px-4 py-2 hover:bg-gray-100">पार्सल ट्रॅकिंग कशी करावी?</a>
//             </div>
//           )}
//         </div>

//         <Link to="/books" className="block py-2 hover:underline">Bookshelf (All Books)</Link>
//       </div>

//       {/* 🔹 Ask for book Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           <div className="absolute inset-0 bg-black/80" onClick={() => setIsOpen(false)}></div>
//           <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md">
//             <h2 className="text-xl font-semibold mb-4">Request a Book</h2>
//             <form className="space-y-4">
//               <input type="text" placeholder="Your name" className="w-full border rounded-lg p-2" />
//               <input type="text" placeholder="Book title" className="w-full border rounded-lg p-2" />
//               <textarea placeholder="Additional details" className="w-full border rounded-lg p-2" />
//               <div className="flex justify-end gap-2">
//                 <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-lg border">
//                   Cancel
//                 </button>
//                 <button type="submit" className="px-4 py-2 rounded-lg bg-blue-600 text-white">
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


// import { Link } from 'react-router-dom';
// import { useRef, useState } from 'react';
// import logo from '../assets/images/logoImage.png';
// import { FaHeart } from "react-icons/fa";
// import { MdOutlineShoppingBag, MdAccountCircle } from "react-icons/md";
// import { IoMenu, IoClose } from "react-icons/io5";

// function Header() {
//   const [isOpen, setIsOpen] = useState(false); // Ask for book modal
//   const [updatesOpen, setUpdatesOpen] = useState(false);
//   const [helpOpen, setHelpOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const updatesRef = useRef(null);
//   const helpRef = useRef(null);

//   const bookNames = [
//     "AADIWASI VIKAS BHARTI (आदिवासी विकास भरती)",
//     "aarogya",
//     "agniveer",
//     "anganwadi",
//     "Architecture",
//     "ARMY",
//     "Banking Exam",
//     "Bhugol (भूगोल)",
//     "CAT Arun Sharma",
//     "CET",
//     "Civil Engineering",
//     "Current Affairs",
//     "DELHI POLICE",
//     "english",
//     "Ganit",
//     "GEOGRAPHY",
//     "HINDI",
//     "Hotel Management",
//     "indian constitution",
//     "Itihas",
//     "JEE",
//     "LAW CET/CLAT/LLB",
//     "LLB CET",
//     "LOKSEVA",
//     "MBA CET",
//     "MHT CET",
//     "NDA",
//     "NEET-CET-JEE",
//     "Notes/Mind-map",
//     "Police Bharti (पोलिस भरती)",
//     "PWD",
//     "Quantitative",
//     "RAILWAY",
//     "RAJYASEVA",
//     "samajshastra",
//     "SET-NET",
//     "ssc cgl",
//     "SSC GD",
//     "stateboard",
//     "talathi",
//     "TET",
//     "UPSC",
//     "Vanrakshak/Vansevak",
//     "Vidnyan",
//     "zilha parishad"
//   ];

//   // Desktop autocomplete
//   const [inputValue, setInputValue] = useState("");
//   const [filtered, setFiltered] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(-1);

//   // Mobile autocomplete
//   const [mobileInput, setMobileInput] = useState("");
//   const [mobileFiltered, setMobileFiltered] = useState([]);
//   const [mobileActiveIndex, setMobileActiveIndex] = useState(-1);

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setInputValue(value);
//     if (value.trim() === "") {
//       setFiltered([]);
//     } else {
//       const filteredItems = bookNames.filter((name) =>
//         name.toLowerCase().startsWith(value.toLowerCase()) ||
//         name.toLowerCase().includes(value.toLowerCase())
//       );
//       setFiltered(filteredItems);
//     }
//     setActiveIndex(-1);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "ArrowDown") {
//       setActiveIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
//     } else if (e.key === "ArrowUp") {
//       setActiveIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
//     } else if (e.key === "Enter" && activeIndex >= 0) {
//       setInputValue(filtered[activeIndex]);
//       setFiltered([]);
//     }
//   };

//   const handleSelect = (name) => {
//     setInputValue(name);
//     setFiltered([]);
//   };

//   const handleMobileChange = (e) => {
//     const value = e.target.value;
//     setMobileInput(value);
//     if (value.trim() === "") {
//       setMobileFiltered([]);
//     } else {
//       const filteredItems = bookNames.filter((name) =>
//         name.toLowerCase().startsWith(value.toLowerCase()) ||
//         name.toLowerCase().includes(value.toLowerCase())
//       );
//       setMobileFiltered(filteredItems);
//     }
//     setMobileActiveIndex(-1);
//   };

//   const handleMobileKeyDown = (e) => {
//     if (e.key === "ArrowDown") {
//       setMobileActiveIndex((prev) => (prev < mobileFiltered.length - 1 ? prev + 1 : 0));
//     } else if (e.key === "ArrowUp") {
//       setMobileActiveIndex((prev) => (prev > 0 ? prev - 1 : mobileFiltered.length - 1));
//     } else if (e.key === "Enter" && mobileActiveIndex >= 0) {
//       setMobileInput(mobileFiltered[mobileActiveIndex]);
//       setMobileFiltered([]);
//     }
//   };

//   const handleMobileSelect = (name) => {
//     setMobileInput(name);
//     setMobileFiltered([]);
//   };

//   return (
//     <>
//       {/* Top: Logo, Search, Icons */}
//       <div className="flex flex-col md:flex-row items-center justify-between px-4 py-3 border-b border-neutral-200 gap-2">
//         {/* Logo */}
//         <div className="flex items-center w-full md:w-auto">
//           <Link to="/">
//             <img src={logo} alt="Logo" className="h-[50px]" />
//           </Link>

//            <div className="flex items-center space-x-4 md:space-x-6">
//           <Link to="/favorites">
//             <FaHeart className="text-black w-5 h-5 md:w-6 md:h-6" />
//           </Link>
//           <Link to="/cart">
//             <MdOutlineShoppingBag className="text-black w-5 h-5 md:w-6 md:h-6" />
//           </Link>
//           <Link to="/account">
//             <MdAccountCircle className="text-green-600 w-6 h-6 md:w-7 md:h-7" />
//           </Link>
//           {/* Mobile Menu Toggle */}
//           <button className="md:hidden ml-auto" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <IoClose size={26} /> : <IoMenu size={26} />}
//           </button>
//         </div>

//         {/* Desktop Search */}
//         <div className="hidden md:flex relative items-center w-full max-w-[400px] h-[40px] mx-4">
//           <input
//             type="text"
//             value={inputValue}
//             onChange={handleChange}
//             onKeyDown={handleKeyDown}
//             placeholder="Search products..."
//             className="w-full pl-4 pr-[40px] py-2 rounded-full bg-gray-100 outline-none"
//           />
//           <button className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600">
//             🔍
//           </button>
//           {filtered.length > 0 && (
//             <ul className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
//               {filtered.map((name, index) => (
//                 <li
//                   key={name}
//                   onClick={() => handleSelect(name)}
//                   className={`px-4 py-2 cursor-pointer ${
//                     index === activeIndex ? "bg-blue-500 text-white" : "hover:bg-gray-100"
//                   }`}
//                 >
//                   {name}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Icons */}
//         {/* <div className="flex items-center space-x-4">
//           <Link to="/Favorites">
//             <FaHeart className="h-5 w-5" />
//           </Link>
//           <Link to="/Cart">
//             <MdOutlineShoppingBag className="h-5 w-5" />
//           </Link>
//           <Link to="/MyAccount">
//             <div className="border-2 border-green-500 rounded-full p-1">
//               <MdAccountCircle className="h-6 w-6 text-green-600" />
//             </div>
//           </Link>
//         </div>
//       </div> */}

//         {/* Icons */}
      

//       {/* Mobile Search */}
//       <div className="md:hidden px-4 py-2 border-b border-neutral-200">
//         <div className="relative w-full">
//           <input
//             type="text"
//             value={mobileInput}
//             onChange={handleMobileChange}
//             onKeyDown={handleMobileKeyDown}
//             placeholder="Search products..."
//             className="w-full border rounded-full pl-4 pr-10 py-2 bg-gray-100"
//           />
//           <button className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600">🔍</button>
//           {mobileFiltered.length > 0 && (
//             <ul className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
//               {mobileFiltered.map((name, index) => (
//                 <li
//                   key={name}
//                   onClick={() => handleMobileSelect(name)}
//                   className={`px-4 py-2 cursor-pointer ${
//                     index === mobileActiveIndex ? "bg-blue-500 text-white" : "hover:bg-gray-100"
//                   }`}
//                 >
//                   {name}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>

//       {/* Navigation */}
//       <div className={`md:flex items-center justify-center gap-6 px-4 py-3 text-sm font-semibold text-blue-900 ${menuOpen ? "block" : "hidden"}`}>
//         <Link to="/dashboard" className="block py-2 hover:underline">Dashboard</Link>
//         <Link to="/MyOrders" className="block py-2 hover:underline">My Orders</Link>
//         <Link to="/Profile" className="block py-2 hover:underline">Profile</Link>

//         {/* Regular Updates */}
//         <div className="relative block py-2" ref={updatesRef}>
//           <button className="hover:underline flex items-center" type="button" onClick={() => setUpdatesOpen(v => !v)}>
//             Regular Updates
//             <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//           {updatesOpen && (
//             <div className="absolute mt-2 w-48 bg-white border rounded shadow-lg p-2 z-50">
//               <a href="#" className="block px-3 py-2 hover:bg-gray-100">Telegram</a>
//               <a href="#" className="block px-3 py-2 hover:bg-gray-100">Instagram</a>
//               <a href="#" className="block px-3 py-2 hover:bg-gray-100">WhatsApp</a>
//             </div>
//           )}
//         </div>

//         {/* Ask for book */}
//         <button onClick={() => setIsOpen(true)} className="block py-2 hover:underline text-blue-600">Ask for book</button>

//         {/* Help */}
//         <div className="relative block py-2" ref={helpRef}>
//           <button className="hover:underline flex items-center" type="button" onClick={() => setHelpOpen(v => !v)}>
//             Help
//             <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//           {helpOpen && (
//             <div className="absolute mt-2 w-60 bg-white border rounded shadow-lg p-2 z-50">
//               <a href="#" className="block px-4 py-2 hover:bg-gray-100">ऑर्डर कशी करावी?</a>
//               <a href="#" className="block px-4 py-2 hover:bg-gray-100">पार्सल ट्रॅकिंग कशी करावी?</a>
//             </div>
//           )}
//         </div>

//         <Link to="/books" className="block py-2 hover:underline">Bookshelf (All Books)</Link>
//       </div>

//       {/* Ask for book Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           <div className="absolute inset-0 bg-black/80" onClick={() => setIsOpen(false)}></div>
//           <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md">
//             <h2 className="text-xl font-semibold mb-4">Request a Book</h2>
//             <form className="space-y-4">
//               <input type="text" placeholder="Your name" className="w-full border rounded-lg p-2" />
//               <input type="text" placeholder="Book title" className="w-full border rounded-lg p-2" />
//               <textarea placeholder="Additional details" className="w-full border rounded-lg p-2" />
//               <div className="flex justify-end gap-2">
//                 <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-lg border">Cancel</button>
//                 <button type="submit" className="px-4 py-2 rounded-lg bg-blue-600 text-white">Submit</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//       </div>
//     </>
//   );
// }

// export default Header;


import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import logo from "../assets/images/logoImage.png";
import { FaHeart } from "react-icons/fa";
import { MdOutlineShoppingBag, MdAccountCircle } from "react-icons/md";
import { IoMenu, IoClose } from "react-icons/io5";

function Header() {
  const [isOpen, setIsOpen] = useState(false); // Ask for book modal
  const [updatesOpen, setUpdatesOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const updatesRef = useRef(null);
  const helpRef = useRef(null);

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
    "zilha parishad",
  ];

  // Desktop search
  const [inputValue, setInputValue] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  // Mobile search
  const [mobileInput, setMobileInput] = useState("");
  const [mobileFiltered, setMobileFiltered] = useState([]);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(-1);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.trim() === "") {
      setFiltered([]);
    } else {
      const filteredItems = bookNames.filter((name) =>
        name.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(filteredItems);
    }
    setActiveIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) =>
        prev < filtered.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) =>
        prev > 0 ? prev - 1 : filtered.length - 1
      );
    } else if (e.key === "Enter" && activeIndex >= 0) {
      setInputValue(filtered[activeIndex]);
      setFiltered([]);
    }
  };

  const handleSelect = (name) => {
    setInputValue(name);
    setFiltered([]);
  };

  const handleMobileChange = (e) => {
    const value = e.target.value;
    setMobileInput(value);
    if (value.trim() === "") {
      setMobileFiltered([]);
    } else {
      const filteredItems = bookNames.filter((name) =>
        name.toLowerCase().includes(value.toLowerCase())
      );
      setMobileFiltered(filteredItems);
    }
    setMobileActiveIndex(-1);
  };

  const handleMobileKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setMobileActiveIndex((prev) =>
        prev < mobileFiltered.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      setMobileActiveIndex((prev) =>
        prev > 0 ? prev - 1 : mobileFiltered.length - 1
      );
    } else if (e.key === "Enter" && mobileActiveIndex >= 0) {
      setMobileInput(mobileFiltered[mobileActiveIndex]);
      setMobileFiltered([]);
    }
  };

  const handleMobileSelect = (name) => {
    setMobileInput(name);
    setMobileFiltered([]);
  };

  return (
    <>
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-3 border-b border-gray-200 gap-3">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-[50px]" />
          </Link>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <Link to="/favorites">
              <FaHeart className="text-black w-5 h-5 md:w-6 md:h-6" />
            </Link>
            <Link to="/cart">
              <MdOutlineShoppingBag className="text-black w-5 h-5 md:w-6 md:h-6" />
            </Link>
            <Link to="/account">
              <div className="border-2 border-green-500 rounded-full p-1">
                <MdAccountCircle className="text-green-600 w-6 h-6 md:w-7 md:h-7" />
              </div>
            </Link>
            {/* Mobile Menu */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <IoClose size={26} /> : <IoMenu size={26} />}
            </button>
          </div>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex relative items-center w-full max-w-[400px] h-[40px] mx-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Search products..."
            className="w-full pl-4 pr-[40px] py-2 rounded-full bg-gray-100 outline-none"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600">
            🔍
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
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 py-2 border-b border-gray-200">
        <div className="relative w-full">
          <input
            type="text"
            value={mobileInput}
            onChange={handleMobileChange}
            onKeyDown={handleMobileKeyDown}
            placeholder="Search products..."
            className="w-full border rounded-full pl-4 pr-10 py-2 bg-gray-100"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600">
            🔍
          </button>
          {mobileFiltered.length > 0 && (
            <ul className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
              {mobileFiltered.map((name, index) => (
                <li
                  key={name}
                  onClick={() => handleMobileSelect(name)}
                  className={`px-4 py-2 cursor-pointer ${
                    index === mobileActiveIndex
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Navigation Menu */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex items-center justify-center gap-6 px-4 py-3 text-sm font-semibold text-blue-900`}
      >
        <Link to="/dashboard" className="block py-2 hover:underline">
          Dashboard
        </Link>
        <Link to="/MyOrders" className="block py-2 hover:underline">
          My Orders
        </Link>
        <Link to="/Profile" className="block py-2 hover:underline">
          Profile
        </Link>

        {/* Regular Updates */}
        <div className="relative block py-2" ref={updatesRef}>
          <button
            className="hover:underline flex items-center"
            type="button"
            onClick={() => setUpdatesOpen((v) => !v)}
          >
            Regular Updates
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {updatesOpen && (
            <div className="absolute mt-2 w-48 bg-white border rounded shadow-lg p-2 z-50">
              <a href="#" className="block px-3 py-2 hover:bg-gray-100">
                Telegram
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-100">
                Instagram
              </a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-100">
                WhatsApp
              </a>
            </div>
          )}
        </div>

        {/* Ask for Book */}
        <button
          onClick={() => setIsOpen(true)}
          className="block py-2 hover:underline text-blue-600"
        >
          Ask for book
        </button>

        {/* Help */}
        <div className="relative block py-2" ref={helpRef}>
          <button
            className="hover:underline flex items-center"
            type="button"
            onClick={() => setHelpOpen((v) => !v)}
          >
            Help
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {helpOpen && (
            <div className="absolute mt-2 w-60 bg-white border rounded shadow-lg p-2 z-50">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                ऑर्डर कशी करावी?
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                पार्सल ट्रॅकिंग कशी करावी?
              </a>
            </div>
          )}
        </div>

        <Link to="/books" className="block py-2 hover:underline">
          Bookshelf (All Books)
        </Link>
      </div>

      {/* Ask for Book Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md">
            <h2 className="text-xl font-semibold mb-4">Request a Book</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full border rounded-lg p-2"
              />
              <input
                type="text"
                placeholder="Book title"
                className="w-full border rounded-lg p-2"
              />
              <textarea
                placeholder="Additional details"
                className="w-full border rounded-lg p-2"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg border"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
