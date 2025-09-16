
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PageHeader from "./PageHeader";
import { FaCartPlus, FaTrashAlt } from "react-icons/fa";

const Favorites = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("wishlist") || "[]");
      if (Array.isArray(saved)) setBooks(saved);
    } catch {
      setBooks([]);
    }
  }, []);

  const persist = (items) => {
    setBooks(items);
    localStorage.setItem("wishlist", JSON.stringify(items));
  };

  const removeFromWishlist = (id) => {
    persist(books.filter((b) => b.id !== id));
  };

  const addToCart = (book) => {
    const item = {
      id: book.id,
      name: book.title,
      price: Number(book.price) || 0,
      image: book.image || "https://via.placeholder.com/200x250.png?text=Book",
      quantity: 1,
    };
    let cart = [];
    try {
      cart = JSON.parse(localStorage.getItem("cart") || "[]");
    } catch {}
    const idx = cart.findIndex((c) => c.id === item.id);
    if (idx >= 0) cart[idx] = { ...cart[idx], quantity: (cart[idx].quantity || 1) + 1 };
    else cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div>
      <Header />
      <PageHeader label="WISHLIST" />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 shadow hover:shadow-lg transition flex flex-col"
            >
              {/* Book Image */}
              <img
        src={book.image || book.img || "https://via.placeholder.com/200x250.png?text=Book+Cover"}
                alt={book.title}
                className="w-full h-56 object-cover rounded-lg mb-4 bg-gray-100"
              />

              {/* Title */}
              <h2 className="text-base font-semibold mb-2 line-clamp-2">
                {book.title}
              </h2>

              {/* Price */}
              <div className="flex items-center gap-2">
                {book.originalPrice ? (
                  <span className="line-through text-gray-500 text-sm">₹{book.originalPrice}</span>
                ) : null}
                <span className="text-red-600 font-bold text-lg">₹{book.price}</span>
              </div>

              {/* Publish Date */}
              <p className="text-sm text-gray-400 mt-1">
                Published: {book.date}
              </p>

              {/* Actions */}
              <div className="mt-auto pt-4 flex flex-wrap gap-2">
                <button
                  onClick={() => addToCart(book)}
                  className="inline-flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition text-sm"
                >
                  <FaCartPlus /> Add to Cart
                </button>
                <button
                  onClick={() => removeFromWishlist(book.id)}
                  className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full hover:bg-red-200 transition text-sm"
                >
                  <FaTrashAlt /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Favorites;
