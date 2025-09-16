
// import { Link, NavLink } from 'react-router-dom';
// import { useEffect, useRef, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import logo from '../assets/images/logoImage.png';
// import { FaHeart } from "react-icons/fa";
// import { IoMdCall } from "react-icons/io";
// import { MdOutlineShoppingBag, MdAccountCircle } from "react-icons/md";
// import auth from '../firebase.init';

// function Header() {
//   const [isOpen, setIsOpen] = useState(false); // Ask for book modal
//   const [updatesOpen, setUpdatesOpen] = useState(false); // Regular Updates dropdown
//   const [helpOpen, setHelpOpen] = useState(false); // Help dropdown
//   const [isHoverable, setIsHoverable] = useState(false); // Desktop hover support
//   const [user] = useAuthState(auth);

//   const updatesRef = useRef(null);
//   const helpRef = useRef(null);
//   const updatesCloseTimer = useRef(null);
//   const helpCloseTimer = useRef(null);

//   const clearCloseTimer = (which) => {
//     const ref = which === 'updates' ? updatesCloseTimer : helpCloseTimer;
//     if (ref.current) {
//       clearTimeout(ref.current);
//       ref.current = null;
//     }
//   };

//   const scheduleClose = (which, delay = 180) => {
//     const ref = which === 'updates' ? updatesCloseTimer : helpCloseTimer;
//     clearCloseTimer(which);
//     ref.current = setTimeout(() => {
//       if (which === 'updates') setUpdatesOpen(false);
//       else setHelpOpen(false);
//     }, delay);
//   };

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const onOutside = (e) => {
//       if (updatesRef.current && !updatesRef.current.contains(e.target)) {
//         setUpdatesOpen(false);
//       }
//       if (helpRef.current && !helpRef.current.contains(e.target)) {
//         setHelpOpen(false);
//       }
//     };
//     const onKey = (e) => {
//       if (e.key === 'Escape') {
//         setUpdatesOpen(false);
//         setHelpOpen(false);
//       }
//     };
//     document.addEventListener('click', onOutside, true);
//     document.addEventListener('touchstart', onOutside, true);
//     document.addEventListener('keydown', onKey, true);
//     return () => {
//       document.removeEventListener('click', onOutside, true);
//       document.removeEventListener('touchstart', onOutside, true);
//       document.removeEventListener('keydown', onKey, true);
//     };
//   }, []);

//   // Detect if device supports hover (desktop/laptop with fine pointer)
//   useEffect(() => {
//     const query = window.matchMedia('(hover: hover) and (pointer: fine)');
//     const update = () => setIsHoverable(query.matches);
//     update();
//     if (typeof query.addEventListener === 'function') {
//       query.addEventListener('change', update);
//       return () => query.removeEventListener('change', update);
//     } else if (typeof query.addListener === 'function') {
//       query.addListener(update);
//       return () => query.removeListener(update);
//     }
//   }, []);

//   return (
//     <>
//       {/* Top navigation */}
//   <div className="border-b border-neutral-200 mb-[40px] h-auto px-4 py-[11px] text-sm text-gray-700 flex flex-wrap justify-start gap-x-6 gap-y-2">
//         <NavLink
//           to="/MyAccount"
//           className={({ isActive }) =>
//             isActive ? "text-red-500 font-semibold text-[18px]" : ""
//           }
//         >
//           My Account
//         </NavLink>

//         <NavLink to="/Favorites">Wishlist</NavLink>
//         <NavLink to="/OrderTracking">Order Tracking</NavLink>
//       </div>

//       {/* Logo, Search & Icons */}
//       <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-6 border-b border-neutral-200 space-y-4 lg:space-y-0">
        
//         {/* Logo */}
//         <Link to="/">
//           <img src={logo} alt="Logo" className="h-[65px]" />
//         </Link>

//         {/* Search bar */}
//         <div className="flex relative items-center w-full max-w-[450px] h-[46px]">
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="w-full pl-5 pr-[80px] py-3 rounded-full bg-gray-100 outline-none"
//           />
//           <button className="bg-[#051d38] w-[73px] absolute right-1 rounded-full text-white py-3">
//             Search
//           </button>
//         </div>

//         {/* Icons */}
//         <div className="flex items-center space-x-6">
//           <Link to="/Favorites">
//             <FaHeart className="h-[25px] w-[25px]" />
//           </Link>
//           <Link to="/Cart">
//             <MdOutlineShoppingBag className="h-[25px] w-[25px]" />
//           </Link>
//         </div>
//       </div>

//       {/* Bottom navigation */}
//   <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-4 py-3 text-sm font-semibold text-blue-900">
        
//   <Link to="/dashboard" className="hover:underline">Dashboard</Link>
//   <Link to="/MyOrders" className="hover:underline">My Orders</Link>
//         <Link to="/dashboard" className="hover:underline">Profile</Link>

//         {/* Regular Updates dropdown */}
//         <div
//           className="relative"
//           ref={updatesRef}
//           onMouseEnter={isHoverable ? () => { clearCloseTimer('updates'); setUpdatesOpen(true); setHelpOpen(false); } : undefined}
//           onMouseLeave={isHoverable ? () => scheduleClose('updates') : undefined}
//         >
//           <button
//             className="hover:underline flex items-center"
//             type="button"
//             onClick={(e) => { e.stopPropagation(); setUpdatesOpen((v) => !v); setHelpOpen(false); }}
//             aria-haspopup="menu"
//             aria-expanded={updatesOpen}
//           >
//             Regular Updates
//             <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//           {updatesOpen && (
//             <div
//               className="absolute left-0 sm:left-0 mt-2 w-60 max-w-[90vw] bg-white border rounded shadow-lg p-2 z-50"
//               role="menu"
//               onClick={(e) => e.stopPropagation()}
//               onMouseEnter={isHoverable ? () => clearCloseTimer('updates') : undefined}
//               onMouseLeave={isHoverable ? () => scheduleClose('updates') : undefined}
//             >
//               <a href="https://t.me/" target="_blank" rel="noreferrer" role="menuitem" className="block px-4 py-2 text-blue-900 hover:bg-gray-100">Telegram</a>
//               <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" role="menuitem" className="block px-4 py-2 text-blue-900 hover:bg-gray-100">Instagram</a>
//               <a href="https://wa.me/" target="_blank" rel="noreferrer" role="menuitem" className="block px-4 py-2 text-blue-900 hover:bg-gray-100">WhatsApp</a>
//             </div>
//           )}
//         </div>

//         {/* Ask for book modal trigger */}
//         <button onClick={() => setIsOpen(true)} className="hover:underline text-blue-600">
//           Ask for book
//         </button>

//         {/* Help dropdown */}
//         <div
//           className="relative"
//           ref={helpRef}
//           onMouseEnter={isHoverable ? () => { clearCloseTimer('help'); setHelpOpen(true); setUpdatesOpen(false); } : undefined}
//           onMouseLeave={isHoverable ? () => scheduleClose('help') : undefined}
//         >
//           <button
//             className="hover:underline flex items-center"
//             type="button"
//             onClick={(e) => { e.stopPropagation(); setHelpOpen((v) => !v); setUpdatesOpen(false); }}
//             aria-haspopup="menu"
//             aria-expanded={helpOpen}
//           >
//             Help
//             <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//           {helpOpen && (
//             <div
//               className="absolute right-0 sm:left-0 sm:right-auto mt-2 w-60 max-w-[90vw] bg-white border rounded shadow-lg p-2 z-50"
//               role="menu"
//               onClick={(e) => e.stopPropagation()}
//               onMouseEnter={isHoverable ? () => clearCloseTimer('help') : undefined}
//               onMouseLeave={isHoverable ? () => scheduleClose('help') : undefined}
//             >
//               <a href="#" role="menuitem" className="block px-4 py-2 text-blue-900 hover:bg-gray-100">ऑर्डर कशी करावी?</a>
//               <a href="#" role="menuitem" className="block px-4 py-2 text-blue-900 hover:bg-gray-100">पार्सल ट्रॅकिंग कशी करावी?</a>
//             </div>
//           )}
//         </div>

//   <Link to="/books" className="hover:underline">Bookshelf (All Books)</Link>

//         {/* Right section with Account & Contact */}
//         <div className="ml-auto flex items-center space-x-6">
//           <Link to={user ? "/dashboard" : "/login"} className="flex items-center space-x-2">
//             <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
//               <MdAccountCircle className="w-full h-full" />
//             </div>
//             <span className="text-green-700 font-bold">Account</span>
//           </Link>
//           <div className="flex items-center space-x-2">
//             <div className="bg-gray-200 rounded-full p-2">
//               <IoMdCall className="w-[25px] h-[25px] fill-[#051d38]" />
//             </div>
//             <div className="leading-tight">
//               <div className="font-semibold text-gray-800 text-2xl">0241 3590019</div>
//               <div className="text-gray-600">for orders related help</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Ask for book Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           <div
//             className="absolute inset-0 bg-black/80"
//             onClick={() => setIsOpen(false)}
//           ></div>
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

// export default Header;


// import { Link } from "react-router-dom";
// import { useState } from "react";
// import logo from "../assets/images/logoImage.png";
// import { FaHeart } from "react-icons/fa";
// import { IoMdCall } from "react-icons/io";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import { IoMdNotificationsOutline } from "react-icons/io";

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="w-full border-b border-gray-200">
//       {/* Top Bar - Removed "Deliver to" */}
//       <div className="flex items-center justify-end px-4 py-2 text-sm gap-3">
//         {/* Mobile Search */}
//         <div className="flex-1 md:hidden relative">
//           <input
//             type="text"
//             placeholder='Search "Midi Skirt"'
//             className="w-full border rounded-full pl-4 pr-10 py-1 text-xs sm:text-sm bg-gray-100"
//           />
//           <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs sm:text-sm">
//             🔍
//           </button>
//         </div>

//         {/* Icons */}
//         <div className="flex items-center gap-3 sm:gap-4">
//           <button className="relative">
//             <IoMdNotificationsOutline className="w-5 h-5 sm:w-6 sm:h-6" />
//             <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">
//               1
//             </span>
//           </button>
//           <Link to="/Favorites">
//             <FaHeart className="w-5 h-5 sm:w-6 sm:h-6" />
//           </Link>
//           <Link to="/Cart">
//             <MdOutlineShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
//           </Link>
//         </div>
//       </div>

//       {/* Middle Section */}
//       <div className="flex flex-col md:flex-row items-center justify-between px-4 py-4 border-t border-gray-100 gap-3 md:gap-4">
//         {/* Logo */}
//         <Link to="/" className="flex justify-center md:justify-start">
//           <img src={logo} alt="Logo" className="h-[50px] sm:h-[60px]" />
//         </Link>

//         {/* Search bar (md+) */}
//         <div className="hidden md:flex relative items-center w-full max-w-[450px] h-[40px] sm:h-[46px]">
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="w-full pl-4 sm:pl-5 pr-[70px] sm:pr-[80px] py-1 sm:py-2 rounded-full bg-gray-100 outline-none text-sm"
//           />
//           <button className="bg-[#051d38] w-[65px] sm:w-[73px] absolute right-1 rounded-full text-white py-1 sm:py-2 text-xs sm:text-sm">
//             Search
//           </button>
//         </div>
//       </div>

//       {/* Bottom Navigation */}
//       <nav className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-2 md:gap-6 px-4 py-3 text-xs sm:text-sm font-semibold text-blue-900">
//         <div className="flex flex-wrap gap-2 md:gap-4 justify-center md:justify-start">
//           <Link to="/Dashboard" className="hover:underline">
//             Dashboard
//           </Link>
//           <Link to="/MyOrders" className="hover:underline">
//             My Orders
//           </Link>
//           <Link to="/MyAccount" className="hover:underline">
//             Profile
//           </Link>

//           {/* Dropdown */}
//           <div className="relative group">
//             <button className="hover:underline flex items-center text-xs sm:text-sm">
//               Regular Updates
//               <svg
//                 className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>
//             <div className="absolute left-0 mt-2 w-36 sm:w-48 bg-white border rounded shadow-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity z-50">
//               <a href="#" className="block px-3 py-2 hover:bg-gray-100 text-xs sm:text-sm">
//                 Telegram
//               </a>
//               <a href="#" className="block px-3 py-2 hover:bg-gray-100 text-xs sm:text-sm">
//                 Instagram
//               </a>
//               <a href="#" className="block px-3 py-2 hover:bg-gray-100 text-xs sm:text-sm">
//                 WhatsApp
//               </a>
//             </div>
//           </div>

//           <button
//             onClick={() => setIsOpen(true)}
//             className="hover:underline text-blue-600 text-xs sm:text-sm"
//           >
//             Ask for book
//           </button>

//           <Link to="/BooksListing" className="hover:underline text-xs sm:text-sm">
//             Bookshelf (All Books)
//           </Link>
//         </div>

        
//       </nav>
//     </header>
//   );
// }

// export default Header;



// import { Link, NavLink } from 'react-router-dom';
// import { useEffect, useRef, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import logo from '../assets/images/logoImage.png';
// import { FaHeart } from "react-icons/fa";
// import { IoMdCall, IoMdNotificationsOutline } from "react-icons/io";
// import { MdOutlineShoppingBag, MdAccountCircle } from "react-icons/md";
// import auth from '../firebase.init';

// function Header() {
//   const [isOpen, setIsOpen] = useState(false); // Ask for book modal
//   const [updatesOpen, setUpdatesOpen] = useState(false); // Regular Updates dropdown
//   const [helpOpen, setHelpOpen] = useState(false); // Help dropdown
//   const [isHoverable, setIsHoverable] = useState(false); // Desktop hover support
//   const [user] = useAuthState(auth);

//   const updatesRef = useRef(null);
//   const helpRef = useRef(null);
//   const updatesCloseTimer = useRef(null);
//   const helpCloseTimer = useRef(null);

//   const clearCloseTimer = (which) => {
//     const ref = which === 'updates' ? updatesCloseTimer : helpCloseTimer;
//     if (ref.current) {
//       clearTimeout(ref.current);
//       ref.current = null;
//     }
//   };

//   const scheduleClose = (which, delay = 180) => {
//     const ref = which === 'updates' ? updatesCloseTimer : helpCloseTimer;
//     clearCloseTimer(which);
//     ref.current = setTimeout(() => {
//       if (which === 'updates') setUpdatesOpen(false);
//       else setHelpOpen(false);
//     }, delay);
//   };

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const onOutside = (e) => {
//       if (updatesRef.current && !updatesRef.current.contains(e.target)) {
//         setUpdatesOpen(false);
//       }
//       if (helpRef.current && !helpRef.current.contains(e.target)) {
//         setHelpOpen(false);
//       }
//     };
//     const onKey = (e) => {
//       if (e.key === 'Escape') {
//         setUpdatesOpen(false);
//         setHelpOpen(false);
//       }
//     };
//     document.addEventListener('click', onOutside, true);
//     document.addEventListener('touchstart', onOutside, true);
//     document.addEventListener('keydown', onKey, true);
//     return () => {
//       document.removeEventListener('click', onOutside, true);
//       document.removeEventListener('touchstart', onOutside, true);
//       document.removeEventListener('keydown', onKey, true);
//     };
//   }, []);

//   // Detect if device supports hover
//   useEffect(() => {
//     const query = window.matchMedia('(hover: hover) and (pointer: fine)');
//     const update = () => setIsHoverable(query.matches);
//     update();
//     if (typeof query.addEventListener === 'function') {
//       query.addEventListener('change', update);
//       return () => query.removeEventListener('change', update);
//     } else if (typeof query.addListener === 'function') {
//       query.addListener(update);
//       return () => query.removeListener(update);
//     }
//   }, []);

//   return (
//     <>
//       {/* 🔹 Top bar: Mobile search + icons */}
//       <div className="border-b border-neutral-200 px-4 py-2 flex items-center justify-between gap-3">
//         {/* Mobile Search */}
//         <div className="flex-1 md:hidden relative">
//           <input
//             type="text"
//             placeholder='Search "Midi Skirt"'
//             className="w-full border rounded-full pl-4 pr-10 py-1 text-xs bg-gray-100"
//           />
//           <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs">
//             🔍
//           </button>
//         </div>

//         {/* Icons */}
//         <div className="flex items-center gap-4">
//           {/* Notifications */}
//           <button className="relative">
//             <IoMdNotificationsOutline className="w-6 h-6" />
//             <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">
//               1
//             </span>
//           </button>
//           <Link to="/Favorites">
//             <FaHeart className="h-6 w-6" />
//           </Link>
//           <Link to="/Cart">
//             <MdOutlineShoppingBag className="h-6 w-6" />
//           </Link>
//         </div>
//       </div>

//       {/* 🔹 Logo, Search & Account/Contact */}
//       <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-6 border-b border-neutral-200 space-y-4 lg:space-y-0">
//         {/* Logo */}
//         <Link to="/">
//           <img src={logo} alt="Logo" className="h-[60px]" />
//         </Link>

//         {/* Desktop Search */}
//         <div className="hidden md:flex relative items-center w-full max-w-[450px] h-[46px]">
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="w-full pl-5 pr-[80px] py-3 rounded-full bg-gray-100 outline-none"
//           />
//           <button className="bg-[#051d38] w-[73px] absolute right-1 rounded-full text-white py-2">
//             Search
//           </button>
//         </div>

//         {/* Account + Contact */}
//         <div className="flex items-center space-x-6">
//           <Link to={user ? "/dashboard" : "/login"} className="flex items-center space-x-2">
//             <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
//               <MdAccountCircle className="w-full h-full" />
//             </div>
//             <span className="text-green-700 font-bold">Account</span>
//           </Link>
//           <div className="hidden sm:flex items-center space-x-2">
//             <div className="bg-gray-200 rounded-full p-2">
//               <IoMdCall className="w-[25px] h-[25px] fill-[#051d38]" />
//             </div>
//             <div className="leading-tight">
//               <div className="font-semibold text-gray-800 text-lg">0241 3590019</div>
//               <div className="text-gray-600 text-sm">for orders related help</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 🔹 Bottom nav with dropdowns */}
//       <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-4 py-3 text-sm font-semibold text-blue-900">
//         <Link to="/dashboard" className="hover:underline">Dashboard</Link>
//         <Link to="/MyOrders" className="hover:underline">My Orders</Link>
//         <Link to="/Profile" className="hover:underline">Profile</Link>

//         {/* Regular Updates Dropdown */}
//         <div
//           className="relative"
//           ref={updatesRef}
//           onMouseEnter={isHoverable ? () => { clearCloseTimer('updates'); setUpdatesOpen(true); setHelpOpen(false); } : undefined}
//           onMouseLeave={isHoverable ? () => scheduleClose('updates') : undefined}
//         >
//           <button
//             className="hover:underline flex items-center"
//             type="button"
//             onClick={(e) => { e.stopPropagation(); setUpdatesOpen((v) => !v); setHelpOpen(false); }}
//           >
//             Regular Updates
//             <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//           {updatesOpen && (
//             <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg p-2 z-50">
//               <a href="#" className="block px-3 py-2 hover:bg-gray-100">Telegram</a>
//               <a href="#" className="block px-3 py-2 hover:bg-gray-100">Instagram</a>
//               <a href="#" className="block px-3 py-2 hover:bg-gray-100">WhatsApp</a>
//             </div>
//           )}
//         </div>

//         {/* Ask for book modal trigger */}
//         <button onClick={() => setIsOpen(true)} className="hover:underline text-blue-600">
//           Ask for book
//         </button>

//         {/* Help Dropdown */}
//         <div
//           className="relative"
//           ref={helpRef}
//           onMouseEnter={isHoverable ? () => { clearCloseTimer('help'); setHelpOpen(true); setUpdatesOpen(false); } : undefined}
//           onMouseLeave={isHoverable ? () => scheduleClose('help') : undefined}
//         >
//           <button
//             className="hover:underline flex items-center"
//             type="button"
//             onClick={(e) => { e.stopPropagation(); setHelpOpen((v) => !v); setUpdatesOpen(false); }}
//           >
//             Help
//             <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//           {helpOpen && (
//             <div className="absolute right-0 mt-2 w-60 bg-white border rounded shadow-lg p-2 z-50">
//               <a href="#" className="block px-4 py-2 hover:bg-gray-100">ऑर्डर कशी करावी?</a>
//               <a href="#" className="block px-4 py-2 hover:bg-gray-100">पार्सल ट्रॅकिंग कशी करावी?</a>
//             </div>
//           )}
//         </div>

//         <Link to="/books" className="hover:underline">Bookshelf (All Books)</Link>
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

// import { Link, NavLink } from 'react-router-dom';
// import { useEffect, useRef, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import logo from '../assets/images/logoImage.png';
// import { FaHeart } from "react-icons/fa";
// import { IoMdCall, IoMdNotificationsOutline } from "react-icons/io";
// import { MdOutlineShoppingBag, MdAccountCircle } from "react-icons/md";
// import auth from '../firebase.init';

// function Header() {
//   const [isOpen, setIsOpen] = useState(false); // Ask for book modal
//   const [updatesOpen, setUpdatesOpen] = useState(false); // Regular Updates dropdown
//   const [helpOpen, setHelpOpen] = useState(false); // Help dropdown
//   const [isHoverable, setIsHoverable] = useState(false); // Desktop hover support
//   const [user] = useAuthState(auth);

//   const updatesRef = useRef(null);
//   const helpRef = useRef(null);
//   const updatesCloseTimer = useRef(null);
//   const helpCloseTimer = useRef(null);

//   const clearCloseTimer = (which) => {
//     const ref = which === 'updates' ? updatesCloseTimer : helpCloseTimer;
//     if (ref.current) {
//       clearTimeout(ref.current);
//       ref.current = null;
//     }
//   };

//   const scheduleClose = (which, delay = 180) => {
//     const ref = which === 'updates' ? updatesCloseTimer : helpCloseTimer;
//     clearCloseTimer(which);
//     ref.current = setTimeout(() => {
//       if (which === 'updates') setUpdatesOpen(false);
//       else setHelpOpen(false);
//     }, delay);
//   };

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const onOutside = (e) => {
//       if (updatesRef.current && !updatesRef.current.contains(e.target)) {
//         setUpdatesOpen(false);
//       }
//       if (helpRef.current && !helpRef.current.contains(e.target)) {
//         setHelpOpen(false);
//       }
//     };
//     const onKey = (e) => {
//       if (e.key === 'Escape') {
//         setUpdatesOpen(false);
//         setHelpOpen(false);
//       }
//     };
//     document.addEventListener('click', onOutside, true);
//     document.addEventListener('touchstart', onOutside, true);
//     document.addEventListener('keydown', onKey, true);
//     return () => {
//       document.removeEventListener('click', onOutside, true);
//       document.removeEventListener('touchstart', onOutside, true);
//       document.removeEventListener('keydown', onKey, true);
//     };
//   }, []);

//   // Detect if device supports hover
//   useEffect(() => {
//     const query = window.matchMedia('(hover: hover) and (pointer: fine)');
//     const update = () => setIsHoverable(query.matches);
//     update();
//     if (typeof query.addEventListener === 'function') {
//       query.addEventListener('change', update);
//       return () => query.removeEventListener('change', update);
//     } else if (typeof query.addListener === 'function') {
//       query.addListener(update);
//       return () => query.removeListener(update);
//     }
//   }, []);

//   return (
//     <header className="w-full border-b border-gray-200 bg-white">
//       {/* Main Row */}
//       <div className="flex items-center justify-between px-6 py-4">
//         <div className="flex flex-col items-start">
//           <div className="flex items-center">
//             <img src={logo} alt="Logo" className="h-[48px] mr-2" />
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="flex relative items-center w-full max-w-[420px] h-[40px] mx-6">
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="w-full pl-5 pr-[80px] py-2 rounded-full bg-gray-100 outline-none text-sm"
//           />
//           <button className="bg-[#051d38] w-[70px] absolute right-1 rounded-full text-white py-2 text-sm">
//             Search
//           </button>
//         </div>

//         {/* Icons */}
//         <div className="flex items-center space-x-6">
//           <Link to="/Favorites">
//             <FaHeart className="h-[25px] w-[25px]" />
//           </Link>
//           <Link to="/Cart">
//             <MdOutlineShoppingBag className="h-[25px] w-[25px]" />
//           </Link>
//           <Link to="/MyAccount">
//             <div className="border-2 border-green-500 rounded-full p-1">
//               <MdAccountCircle className="h-[32px] w-[32px] text-green-600" />
//             </div>
//           </Link>
//         </div>
//       </div>
//       {/* Divider */}
//       <div className="border-t border-gray-200" />
//       {/* 🔹 Bottom Nav */}
//       <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-4 py-3 text-sm font-semibold text-blue-900">
//         <Link to="/dashboard" className="hover:underline">
//           Dashboard
//         </Link>
//         <Link to="/MyOrders" className="hover:underline">
//           My Orders
//         </Link>
//         <Link to="/Profile" className="hover:underline">
//           Profile
//         </Link>

//         {/* Regular Updates */}
//         <Dropdown
//           label="Regular Updates"
//           isOpen={updatesOpen}
//           setIsOpen={setUpdatesOpen}
//           refEl={updatesRef}
//         >
//           <a href="#" className="block px-3 py-2 hover:bg-gray-100">
//             Telegram
//           </a>
//           <a href="#" className="block px-3 py-2 hover:bg-gray-100">
//             Instagram
//           </a>
//           <a href="#" className="block px-3 py-2 hover:bg-gray-100">
//             WhatsApp
//           </a>
//         </Dropdown>

//         {/* Ask for book */}
//         <button
//           onClick={() => setIsOpen(true)}
//           className="hover:underline text-blue-600"
//         >
//           Ask for book
//         </button>

//         {/* Help */}
//         <Dropdown
//           label="Help"
//           isOpen={helpOpen}
//           setIsOpen={setHelpOpen}
//           refEl={helpRef}
//         >
//           <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//             ऑर्डर कशी करावी?
//           </a>
//           <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//             पार्सल ट्रॅकिंग कशी करावी?
//           </a>
//         </Dropdown>

//         <Link to="/books" className="hover:underline">
//           Bookshelf (All Books)
//         </Link>
//       </div>

//       {/* Book Modal */}
//       <BookModal isOpen={isOpen} setIsOpen={setIsOpen} />
//     </header>
//   );
// }

// export default Header;

// // src/components/Header.jsx
// import { Link } from 'react-router-dom';
// import { useEffect, useRef, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import logo from '../assets/images/logoImage.png';
// import { FaHeart } from "react-icons/fa";
// import { IoMdCall, IoMdNotificationsOutline } from "react-icons/io";
// import { MdOutlineShoppingBag, MdAccountCircle } from "react-icons/md";
// import auth from '../firebase.init';

// function Header() {
//   const [isOpen, setIsOpen] = useState(false); // Ask for book modal
//   const [updatesOpen, setUpdatesOpen] = useState(false); // Regular Updates dropdown
//   const [helpOpen, setHelpOpen] = useState(false); // Help dropdown
//   const [isHoverable, setIsHoverable] = useState(false); // Desktop hover support
//   const [user] = useAuthState(auth);

//   const updatesRef = useRef(null);
//   const helpRef = useRef(null);
//   const updatesCloseTimer = useRef(null);
//   const helpCloseTimer = useRef(null);

//   // Clear timer
//   const clearCloseTimer = (which) => {
//     const ref = which === 'updates' ? updatesCloseTimer : helpCloseTimer;
//     if (ref.current) {
//       clearTimeout(ref.current);
//       ref.current = null;
//     }
//   };

//   // Schedule close
//   const scheduleClose = (which, delay = 180) => {
//     const ref = which === 'updates' ? updatesCloseTimer : helpCloseTimer;
//     clearCloseTimer(which);
//     ref.current = setTimeout(() => {
//       if (which === 'updates') setUpdatesOpen(false);
//       else setHelpOpen(false);
//     }, delay);
//   };

//   // Close dropdowns on outside click / escape
//   useEffect(() => {
//     const onOutside = (e) => {
//       if (updatesRef.current && !updatesRef.current.contains(e.target)) {
//         setUpdatesOpen(false);
//       }
//       if (helpRef.current && !helpRef.current.contains(e.target)) {
//         setHelpOpen(false);
//       }
//     };
//     const onKey = (e) => {
//       if (e.key === 'Escape') {
//         setUpdatesOpen(false);
//         setHelpOpen(false);
//       }
//     };
//     document.addEventListener('click', onOutside, true);
//     document.addEventListener('touchstart', onOutside, true);
//     document.addEventListener('keydown', onKey, true);
//     return () => {
//       document.removeEventListener('click', onOutside, true);
//       document.removeEventListener('touchstart', onOutside, true);
//       document.removeEventListener('keydown', onKey, true);
//     };
//   }, []);

//   // Detect if device supports hover
//   useEffect(() => {
//     const query = window.matchMedia('(hover: hover) and (pointer: fine)');
//     const update = () => setIsHoverable(query.matches);
//     update();
//     if (typeof query.addEventListener === 'function') {
//       query.addEventListener('change', update);
//       return () => query.removeEventListener('change', update);
//     } else if (typeof query.addListener === 'function') {
//       query.addListener(update);
//       return () => query.removeListener(update);
//     }
//   }, []);

//   return (
//     <>
//       {/* 🔹 Top bar: Mobile search + icons */}
//       <div className="border-b border-neutral-200 px-4 py-2 flex items-center justify-between gap-3">
//         {/* Mobile Search */}
//         <div className="flex-1 md:hidden relative">
//           <input
//             type="text"
//             placeholder='Search "Midi Skirt"'
//             className="w-full border rounded-full pl-4 pr-10 py-1 text-xs bg-gray-100"
//           />
//           <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs">
//             🔍
//           </button>
//         </div>

//         {/* Icons */}
       
         
//       </div>

//       {/* 🔹 Logo, Search & Account/Contact */}
//       <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-6 border-b border-neutral-200 space-y-4 lg:space-y-0">
//         {/* Logo */}
//         <Link to="/">
//           <img src={logo} alt="Logo" className="h-[60px]" />
//         </Link>

//         {/* Desktop Search */}
//         <div className="hidden md:flex relative items-center w-full max-w-[450px] h-[46px]">
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="w-full pl-5 pr-[80px] py-3 rounded-full bg-gray-100 outline-none"
//           />
//           <button className="bg-[#051d38] w-[73px] absolute right-1 rounded-full text-white py-2">
//             Search
//           </button>
//         </div>

//         {/* Account + Contact */}
//        <div className="flex items-center space-x-6">
//           <Link to="/Favorites">
//             <FaHeart className="h-[22px] w-[22px]" />
//           </Link>
//           <Link to="/Cart">
//             <MdOutlineShoppingBag className="h-[22px] w-[22px]" />
//           </Link>
//           <Link to="/MyAccount">
//             <div className="border-2 border-green-500 rounded-full p-1">
//               <MdAccountCircle className="h-[28px] w-[28px] text-green-600" />
//             </div>
//           </Link>
//         </div>
//       </div>

//       {/* 🔹 Bottom nav with dropdowns */}
//       <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-4 py-3 text-sm font-semibold text-blue-900">
//         <Link to="/dashboard" className="hover:underline">Dashboard</Link>
//         <Link to="/MyOrders" className="hover:underline">My Orders</Link>
//         <Link to="/Profile" className="hover:underline">Profile</Link>

//         {/* Regular Updates Dropdown */}
//         <div
//           className="relative"
//           ref={updatesRef}
//           onMouseEnter={isHoverable ? () => { clearCloseTimer('updates'); setUpdatesOpen(true); setHelpOpen(false); } : undefined}
//           onMouseLeave={isHoverable ? () => scheduleClose('updates') : undefined}
//         >
//           <button
//             className="hover:underline flex items-center"
//             type="button"
//             onClick={(e) => { e.stopPropagation(); setUpdatesOpen((v) => !v); setHelpOpen(false); }}
//           >
//             Regular Updates
//             <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//           {updatesOpen && (
//             <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg p-2 z-50">
//               <a href="#" className="block px-3 py-2 hover:bg-gray-100">Telegram</a>
//               <a href="#" className="block px-3 py-2 hover:bg-gray-100">Instagram</a>
//               <a href="#" className="block px-3 py-2 hover:bg-gray-100">WhatsApp</a>
//             </div>
//           )}
//         </div>

//         {/* Ask for book modal trigger */}
//         <button onClick={() => setIsOpen(true)} className="hover:underline text-blue-600">
//           Ask for book
//         </button>

//         {/* Help Dropdown */}
//         <div
//           className="relative"
//           ref={helpRef}
//           onMouseEnter={isHoverable ? () => { clearCloseTimer('help'); setHelpOpen(true); setUpdatesOpen(false); } : undefined}
//           onMouseLeave={isHoverable ? () => scheduleClose('help') : undefined}
//         >
//           <button
//             className="hover:underline flex items-center"
//             type="button"
//             onClick={(e) => { e.stopPropagation(); setHelpOpen((v) => !v); setUpdatesOpen(false); }}
//           >
//             Help
//             <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//           {helpOpen && (
//             <div className="absolute right-0 mt-2 w-60 bg-white border rounded shadow-lg p-2 z-50">
//               <a href="#" className="block px-4 py-2 hover:bg-gray-100">ऑर्डर कशी करावी?</a>
//               <a href="#" className="block px-4 py-2 hover:bg-gray-100">पार्सल ट्रॅकिंग कशी करावी?</a>
//             </div>
//           )}
//         </div>

//         <Link to="/books" className="hover:underline">Bookshelf (All Books)</Link>
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

// export default Header;


import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../assets/images/logoImage.png';
import { FaHeart } from "react-icons/fa";
import { MdOutlineShoppingBag, MdAccountCircle } from "react-icons/md";
import auth from '../firebase.init';
import { IoMenu, IoClose } from "react-icons/io5";

function Header() {
  const [isOpen, setIsOpen] = useState(false); // Ask for book modal
  const [updatesOpen, setUpdatesOpen] = useState(false); // Regular Updates dropdown
  const [helpOpen, setHelpOpen] = useState(false); // Help dropdown
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu
  const [isHoverable, setIsHoverable] = useState(false);
  const [user] = useAuthState(auth);

  const updatesRef = useRef(null);
  const helpRef = useRef(null);

  // Detect if device supports hover
  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setIsHoverable(query.matches);
    update();
    if (query.addEventListener) {
      query.addEventListener('change', update);
      return () => query.removeEventListener('change', update);
    } else {
      query.addListener(update);
      return () => query.removeListener(update);
    }
  }, []);

  return (
    <>
      {/* 🔹 Top: Logo, Search, Icons, Hamburger */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-[50px]" />
        </Link>

        {/* Desktop Search */}
        <div className="hidden md:flex relative items-center w-full max-w-[400px] h-[40px]">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-4 pr-[70px] py-2 rounded-full bg-gray-100 outline-none"
          />
          <button className="bg-[#051d38] w-[65px] absolute right-1 rounded-full text-white py-1">
            Search
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/Favorites">
            <FaHeart className="h-5 w-5" />
          </Link>
          <Link to="/Cart">
            <MdOutlineShoppingBag className="h-5 w-5" />
          </Link>
          <Link to="/MyAccount">
            <div className="border-2 border-green-500 rounded-full p-1">
              <MdAccountCircle className="h-6 w-6 text-green-600" />
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoClose size={26} /> : <IoMenu size={26} />}
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Search */}
      <div className="md:hidden px-4 py-2 border-b border-neutral-200">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border rounded-full pl-4 pr-10 py-2 bg-gray-100"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            🔍
          </button>
        </div>
      </div>

      {/* 🔹 Navigation */}
      <div className={`md:flex items-center justify-center gap-6 px-4 py-3 text-sm font-semibold text-blue-900
        ${menuOpen ? "block" : "hidden"}`}>
        <Link to="/dashboard" className="block py-2 hover:underline">Dashboard</Link>
        <Link to="/MyOrders" className="block py-2 hover:underline">My Orders</Link>
        <Link to="/Profile" className="block py-2 hover:underline">Profile</Link>

        {/* Regular Updates Dropdown */}
        <div className="relative block py-2" ref={updatesRef}>
          <button
            className="hover:underline flex items-center"
            type="button"
            onClick={() => setUpdatesOpen((v) => !v)}
          >
            Regular Updates
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {updatesOpen && (
            <div className="absolute mt-2 w-48 bg-white border rounded shadow-lg p-2 z-50">
              <a href="#" className="block px-3 py-2 hover:bg-gray-100">Telegram</a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-100">Instagram</a>
              <a href="#" className="block px-3 py-2 hover:bg-gray-100">WhatsApp</a>
            </div>
          )}
        </div>

        {/* Ask for book modal trigger */}
        <button onClick={() => setIsOpen(true)} className="block py-2 hover:underline text-blue-600">
          Ask for book
        </button>

        {/* Help Dropdown */}
        <div className="relative block py-2" ref={helpRef}>
          <button
            className="hover:underline flex items-center"
            type="button"
            onClick={() => setHelpOpen((v) => !v)}
          >
            Help
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {helpOpen && (
            <div className="absolute mt-2 w-60 bg-white border rounded shadow-lg p-2 z-50">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">ऑर्डर कशी करावी?</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">पार्सल ट्रॅकिंग कशी करावी?</a>
            </div>
          )}
        </div>

        <Link to="/books" className="block py-2 hover:underline">Bookshelf (All Books)</Link>
      </div>

      {/* 🔹 Ask for book Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/80" onClick={() => setIsOpen(false)}></div>
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
