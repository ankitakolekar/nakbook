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
import Dashboard from "./Dashboard";
import BooksPage from "./BooksPage"; // ✅ for dynamic View All pages
import AllBooksPage from "./AllBooksPage"; // ✅ for category-based listing
import BannerCards from "./BannerCards";
import Searchbar from "./Searchbar";



function Routes_path() {
  return (
    <Routes>
      {/* ✅ Home Page */}
      <Route path="/" element={<Home />} />

      {/* ✅ Book Pages */}
     
      <Route path="/books" element={<BooksListing />} />
      <Route path="/book/:id" element={<Details />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/search" element={<Searchbar />} />

      {/* ✅ Dynamic "View All" Page (New Arrival, Trending, etc.) */}
      <Route path="/bookspage/:category" element={<BooksPage />} />
      <Route path="/AllBooksPage" element={<AllBooksPage />} />
      <Route path="/AllBooksPage/:category" element={<AllBooksPage />} />
      <Route path="/bannercards" element={<BannerCards />} />
  


      {/* ✅ Account & Auth */}
      <Route path="/account" element={<LoginRegistration />} />
      <Route path="/my-account" element={<MyAccount />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />

      {/* ✅ User Actions */}
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />

      {/* ✅ Request a Book */}
      <Route path="/request-book" element={<RequestBook />} />
     
    </Routes>
  );
}

export default Routes_path;
