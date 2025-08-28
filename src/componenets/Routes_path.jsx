// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Footer from './Footer'
// import Details from './Details';
// import Home from './Home';
// import LoginRegistration from './LoginRegistration';
// import Favorites from './Favorites';
// import Cart from './Cart';
// import BooksListing from './BooksListing';
// import RequestBook from './RequestBook';
// import MyAccount from './MyAccount';
// import Product from './Product';
// import Checkout from './Checkout';
// import Login from './Login';
// import SignUp from './SignUp';

// function Routes_path() {
//   return (
//     <>
//         <Routes>
//             <Route path='/' element={<Home/>}/>
//             <Route path='/one' element={<Footer/>}/>
//             <Route path='/two' element={<Footer/>}/>
//             <Route path='/three' element={<Footer/>}/>
//             <Route path='/details/:id' element={<Details/>}/>
//             <Route path='/account' element={<LoginRegistration/>}/>
//             <Route path='/favorites' element={<Favorites/>}/>
//             <Route path='/cart' element={<Cart/>}/>
//             <Route path='/booksListing' element={<BooksListing/>}/>
//             <Route path='/requestBook' element={<RequestBook/>}/>
//             <Route path='/myAccount' element={<MyAccount/>}/>
//             <Route path='/Product/:id' element={<Product/>}/>
//             <Route path='/checkout' element={<Checkout/>}/>
//             <Route path='/login' element={<Login/>}/>
//             <Route path='/signup' element={<SignUp/>}/>
//         </Routes>
//     </>
//   )
// }

// export default Routes_path;

import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Details from "./Details";
import LoginRegistration from "./LoginRegistration";
import Favorites from "./Favorites";
import Cart from "./Cart";
import BooksListing from "./BooksListing";
import RequestBook from "./RequestBook";
import MyAccount from "./MyAccount";
import Product from "./Product";
import Checkout from "./Checkout";
import Login from "./Login";
import SignUp from "./SignUp";

function Routes_path() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Books */}
      <Route path="/books" element={<BooksListing />} />
      <Route path="/book/:id" element={<Details />} />
      <Route path="/product/:id" element={<Product />} />

      {/* Account & Auth */}
      <Route path="/account" element={<LoginRegistration />} />
      <Route path="/my-account" element={<MyAccount />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* User actions */}
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />

      {/* Request a book */}
      <Route path="/request-book" element={<RequestBook />} />
    </Routes>
  );
}

export default Routes_path;
