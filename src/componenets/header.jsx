// import { Link, NavLink, Outlet } from 'react-router-dom';
// import '../App.css';
// import logo from '../assets/images/logoImage.png';
// import { FaHeart } from "react-icons/fa";
// import { IoMdCall } from "react-icons/io";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import { MdAccountCircle } from "react-icons/md";
// import { useState } from "react";

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//   <>

//     <div className="border-b border-neutral-200 mb-[40px] h-[43px] px-4 py-[11px] text-sm text-gray-700 flex justify-start space-x-6">
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           {/* Dark background */}
//           <div
//             className="absolute inset-0 bg-black/80"
//             onClick={() => setIsOpen(false)} // close on overlay click
//           ></div>

//           {/* Modal box */}
//           <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md">
//             <h2 className="text-xl font-semibold mb-4">Request a Book</h2>
//             <p className="text-gray-600 mb-4">
//               Please fill in your details and book request below.
//             </p>

//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your name"
//                 className="w-full border rounded-lg p-2"
//               />
//               <input
//                 type="text"
//                 placeholder="Book title"
//                 className="w-full border rounded-lg p-2"
//               />
//               <textarea
//                 placeholder="Additional details"
//                 className="w-full border rounded-lg p-2"
//               />
//               <div className="flex justify-end gap-2">
//                 <button
//                   type="button"
//                   onClick={() => setIsOpen(false)}
//                   className="px-4 py-2 rounded-lg border"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 rounded-lg bg-blue-600 text-white"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//       <NavLink to="/one" style={(e) => {
//         return {
//           color: e.isActive ? "red" : "",
//           fontSize: e.isActive ? "18px" : ""
//         }
//       }}>
//         My Account
//       </NavLink>


//       <NavLink to="/two" style={(e) => {
//         console.log(e);
//       }} >Wishlist</NavLink>



//       <NavLink to="/three">Order Tracking</NavLink>
//       {/* <Routes_path/> */}
//       {/* <Outlet/> */}
//     </div>

//     {/* <!-- Logo and Search Section --> */}
//     <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-6 border-b border-neutral-200 space-y-4 lg:space-y-0">

//       {/* <!-- Logo --> */}
//       <Link to='/'>
//         <img src={logo} alt='' className='h-[65px]' />
//       </Link>

//       {/* <!-- Search Bar --> */}
//       <div className="flex relative items-center w-[450px] h-[46px]">

//         <input type="text" placeholder="Search products..." className="w-full pl-[19px] pt-[13px] pb-[13px] pr-[55px] rounded-full bg-gray-100 outline-none" />
//         <button className="bg-[#051d38] w-[73px] absolute right-1 rounded-full text-white pt-[13px] pb-[13px] rounded-r-full">
//           Search
//         </button>

//       </div>

//       {/* <!-- Icons (Wishlist, Cart) --> */}
//       <div className="flex items-center space-x-6">

//         <div className="relative">
//           <Link to="/Favorites"><FaHeart className='h-[25px] w-[25px]' /></Link>
//         </div>

//         <div className="relative">
//           <Link to="/cart"><MdOutlineShoppingBag className='h-[25px] w-[25px]' /></Link>
//         </div>

//       </div>

//     </div>

//     <div className="flex h-[92px] items-center justify-center flex-wrap gap-6 px-4 py-3 text-sm font-semibold text-blue-900">
//       <Link to="/" className="hover:underline">My Orders</Link>
//       <Link to="/MyAccount" className="hover:underline">Profile</Link>
//       <Link className="relative group">
      
//        <button className="hover:underline flex items-center space-x-1 focus:outline-none">
//          Regular Updates
//           <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//           </svg>
//         </button>

//        <div className="absolute left-0 mt-2 w-60  bg-white border-b border-neutral-200 rounded shadow-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity z-50">

//           <a
//             href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block px-4 py-2 text-blue-900 hover:bg-gray-100"
//           >
//            Telegram

//           </a>
//           <a
//             href="https://www.youtube.com/watch?v=9bZkp7q19f0"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block px-4 py-2 text-blue-900 hover:bg-gray-100"
//           >Instagram

//           </a>
//             <a
//             href="https://www.youtube.com/watch?v=9bZkp7q19f0"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block px-4 py-2 text-blue-900 hover:bg-gray-100"
//           >
//           WhatsApp
//           </a>
//         </div>
//       </Link>
//       <button
//         onClick={() => setIsOpen(true)}
//         className="hover:underline text-blue-600"
//       >
//         Ask for book
//       </button>
//       {/* Help Dropdown */}
//       <Link className="relative group">
//         <button className="hover:underline flex items-center space-x-1 focus:outline-none">
//           Help
//           <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//           </svg>
//         </button>

//        <div className="absolute left-0 mt-2 w-60  bg-white border-b border-neutral-200 rounded shadow-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity z-50">

//           <a
//             href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block px-4 py-2 text-blue-900 hover:bg-gray-100"
//           >
//            ऑर्डर कशी करावी?
//           </a>
//           <a
//             href="https://www.youtube.com/watch?v=9bZkp7q19f0"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block px-4 py-2 text-blue-900 hover:bg-gray-100"
//           >
//           पार्सल ट्रॅकिंग कशी करावी?
//           </a>
//         </div>
//       </Link>
//       <Link to="/BooksListing" className="hover:underline">Bookshelf (All Books)</Link>

//       <div className="ml-auto flex items-center space-x-4">
//         <div className="flex items-center space-x-2">
//           <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
//             <MdAccountCircle className='w-full h-full' />
//           </div>
//           <Link to='/Login'>
//             <span className="text-green-700 font-bold">Account</span>
//           </Link>
//         </div>
//         <div className="flex items-center space-x-2">
//           <div className="bg-gray-200 rounded-full p-2">
//             <IoMdCall className='w-[25px] h-[25px] fill-[#051d38]' />
//           </div>
//           <div className="text-sm leading-tight">
//             <div className="font-semibold text-gray-800 text-2xl">0241 3590019</div>
//             <div className="text-gray-600">for orders related help</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </>
//   )
// }

// export default Header

import { Link, NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../assets/images/logoImage.png';
import { FaHeart } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdOutlineShoppingBag, MdAccountCircle } from "react-icons/md";
import auth from '../firebase.init';

function Header() {
  const [isOpen, setIsOpen] = useState(false); // Ask for book modal
  const [updatesOpen, setUpdatesOpen] = useState(false); // Regular Updates dropdown
  const [helpOpen, setHelpOpen] = useState(false); // Help dropdown
  const [isHoverable, setIsHoverable] = useState(false); // Desktop hover support
  const [user] = useAuthState(auth);

  const updatesRef = useRef(null);
  const helpRef = useRef(null);
  const updatesCloseTimer = useRef(null);
  const helpCloseTimer = useRef(null);

  const clearCloseTimer = (which) => {
    const ref = which === 'updates' ? updatesCloseTimer : helpCloseTimer;
    if (ref.current) {
      clearTimeout(ref.current);
      ref.current = null;
    }
  };

  const scheduleClose = (which, delay = 180) => {
    const ref = which === 'updates' ? updatesCloseTimer : helpCloseTimer;
    clearCloseTimer(which);
    ref.current = setTimeout(() => {
      if (which === 'updates') setUpdatesOpen(false);
      else setHelpOpen(false);
    }, delay);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const onOutside = (e) => {
      if (updatesRef.current && !updatesRef.current.contains(e.target)) {
        setUpdatesOpen(false);
      }
      if (helpRef.current && !helpRef.current.contains(e.target)) {
        setHelpOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setUpdatesOpen(false);
        setHelpOpen(false);
      }
    };
    document.addEventListener('click', onOutside, true);
    document.addEventListener('touchstart', onOutside, true);
    document.addEventListener('keydown', onKey, true);
    return () => {
      document.removeEventListener('click', onOutside, true);
      document.removeEventListener('touchstart', onOutside, true);
      document.removeEventListener('keydown', onKey, true);
    };
  }, []);

  // Detect if device supports hover (desktop/laptop with fine pointer)
  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setIsHoverable(query.matches);
    update();
    if (typeof query.addEventListener === 'function') {
      query.addEventListener('change', update);
      return () => query.removeEventListener('change', update);
    } else if (typeof query.addListener === 'function') {
      query.addListener(update);
      return () => query.removeListener(update);
    }
  }, []);

  return (
    <>
      {/* Top navigation */}
  <div className="border-b border-neutral-200 mb-[40px] h-auto px-4 py-[11px] text-sm text-gray-700 flex flex-wrap justify-start gap-x-6 gap-y-2">
        <NavLink
          to="/MyAccount"
          className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold text-[18px]" : ""
          }
        >
          My Account
        </NavLink>

        <NavLink to="/Favorites">Wishlist</NavLink>
        <NavLink to="/OrderTracking">Order Tracking</NavLink>
      </div>

      {/* Logo, Search & Icons */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-6 border-b border-neutral-200 space-y-4 lg:space-y-0">
        
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-[65px]" />
        </Link>

        {/* Search bar */}
        <div className="flex relative items-center w-full max-w-[450px] h-[46px]">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-5 pr-[80px] py-3 rounded-full bg-gray-100 outline-none"
          />
          <button className="bg-[#051d38] w-[73px] absolute right-1 rounded-full text-white py-3">
            Search
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <Link to="/Favorites">
            <FaHeart className="h-[25px] w-[25px]" />
          </Link>
          <Link to="/Cart">
            <MdOutlineShoppingBag className="h-[25px] w-[25px]" />
          </Link>
        </div>
      </div>

      {/* Bottom navigation */}
  <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-4 py-3 text-sm font-semibold text-blue-900">
        
  <Link to="/dashboard" className="hover:underline">Dashboard</Link>
  <Link to="/MyOrders" className="hover:underline">My Orders</Link>
        <Link to="/dashboard" className="hover:underline">Profile</Link>

        {/* Regular Updates dropdown */}
        <div
          className="relative"
          ref={updatesRef}
          onMouseEnter={isHoverable ? () => { clearCloseTimer('updates'); setUpdatesOpen(true); setHelpOpen(false); } : undefined}
          onMouseLeave={isHoverable ? () => scheduleClose('updates') : undefined}
        >
          <button
            className="hover:underline flex items-center"
            type="button"
            onClick={(e) => { e.stopPropagation(); setUpdatesOpen((v) => !v); setHelpOpen(false); }}
            aria-haspopup="menu"
            aria-expanded={updatesOpen}
          >
            Regular Updates
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {updatesOpen && (
            <div
              className="absolute left-0 sm:left-0 mt-2 w-60 max-w-[90vw] bg-white border rounded shadow-lg p-2 z-50"
              role="menu"
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={isHoverable ? () => clearCloseTimer('updates') : undefined}
              onMouseLeave={isHoverable ? () => scheduleClose('updates') : undefined}
            >
              <a href="https://t.me/" target="_blank" rel="noreferrer" role="menuitem" className="block px-4 py-2 text-blue-900 hover:bg-gray-100">Telegram</a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" role="menuitem" className="block px-4 py-2 text-blue-900 hover:bg-gray-100">Instagram</a>
              <a href="https://wa.me/" target="_blank" rel="noreferrer" role="menuitem" className="block px-4 py-2 text-blue-900 hover:bg-gray-100">WhatsApp</a>
            </div>
          )}
        </div>

        {/* Ask for book modal trigger */}
        <button onClick={() => setIsOpen(true)} className="hover:underline text-blue-600">
          Ask for book
        </button>

        {/* Help dropdown */}
        <div
          className="relative"
          ref={helpRef}
          onMouseEnter={isHoverable ? () => { clearCloseTimer('help'); setHelpOpen(true); setUpdatesOpen(false); } : undefined}
          onMouseLeave={isHoverable ? () => scheduleClose('help') : undefined}
        >
          <button
            className="hover:underline flex items-center"
            type="button"
            onClick={(e) => { e.stopPropagation(); setHelpOpen((v) => !v); setUpdatesOpen(false); }}
            aria-haspopup="menu"
            aria-expanded={helpOpen}
          >
            Help
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {helpOpen && (
            <div
              className="absolute right-0 sm:left-0 sm:right-auto mt-2 w-60 max-w-[90vw] bg-white border rounded shadow-lg p-2 z-50"
              role="menu"
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={isHoverable ? () => clearCloseTimer('help') : undefined}
              onMouseLeave={isHoverable ? () => scheduleClose('help') : undefined}
            >
              <a href="#" role="menuitem" className="block px-4 py-2 text-blue-900 hover:bg-gray-100">ऑर्डर कशी करावी?</a>
              <a href="#" role="menuitem" className="block px-4 py-2 text-blue-900 hover:bg-gray-100">पार्सल ट्रॅकिंग कशी करावी?</a>
            </div>
          )}
        </div>

  <Link to="/books" className="hover:underline">Bookshelf (All Books)</Link>

        {/* Right section with Account & Contact */}
        <div className="ml-auto flex items-center space-x-6">
          <Link to={user ? "/dashboard" : "/login"} className="flex items-center space-x-2">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
              <MdAccountCircle className="w-full h-full" />
            </div>
            <span className="text-green-700 font-bold">Account</span>
          </Link>
          <div className="flex items-center space-x-2">
            <div className="bg-gray-200 rounded-full p-2">
              <IoMdCall className="w-[25px] h-[25px] fill-[#051d38]" />
            </div>
            <div className="leading-tight">
              <div className="font-semibold text-gray-800 text-2xl">0241 3590019</div>
              <div className="text-gray-600">for orders related help</div>
            </div>
          </div>
        </div>
      </div>

      {/* Ask for book Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md">
            <h2 className="text-xl font-semibold mb-4">Request a Book</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your name" className="w-full border rounded-lg p-2" />
              <input type="text" placeholder="Book title" className="w-full border rounded-lg p-2" />
              <textarea placeholder="Additional details" className="w-full border rounded-lg p-2" />
              <div className="flex justify-end gap-2">
                <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-lg border">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 rounded-lg bg-blue-600 text-white">
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
