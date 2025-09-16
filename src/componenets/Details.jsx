import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

// Mock data (replace with API later)
const booksData = [
  {
    id: "1",
    title: "Indian Governance Tatha Bhartiya Prashasan",
    description: "Comprehensive book on Indian Governance and Public Administration.",
    price: 380,
    oldPrice: 475,
    stock: true,
    img: "https://via.placeholder.com/400x500.png?text=Book+Cover",
  },
  {
    id: "2",
    title: "GK Oneliner - Vitthal Bade Sir",
    description: "वनलाईनर - विठ्ठल बडे - महाराष्ट्र पब्लिकेशन",
    price: 269,
    oldPrice: 300,
    stock: true,
    img: "https://via.placeholder.com/400x500.png?text=GK+Book",
  },
];

function Details() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const foundBook = booksData.find((b) => b.id === id);
    setBook(foundBook || null);
  }, [id]);

  if (!book) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-600 text-lg">Book not found.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="px-6 py-10">
        <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
          {/* LEFT - Book Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={book.img}
              alt={book.title}
              className="w-full max-w-md rounded-lg shadow border border-gray-200"
            />
          </div>

          {/* RIGHT - Book Details */}
          <div className="md:w-1/2 flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-bold">{book.title}</h2>
            <p
              className={`font-medium ${
                book.stock ? "text-green-600" : "text-red-500"
              }`}
            >
              {book.stock ? "IN STOCK" : "OUT OF STOCK"}
            </p>
            <p className="text-lg font-bold text-blue-800">
              ₹{book.price.toFixed(2)}{" "}
              <span className="line-through text-sm text-gray-500">
                ₹{book.oldPrice.toFixed(2)}
              </span>
            </p>
            <p className="text-gray-700">{book.description}</p>

            <div className="flex items-center gap-3 mt-4">
              <button className="bg-blue-900 text-white px-5 py-2 rounded hover:bg-blue-800 transition">
                Add to Cart
              </button>
              <button className="border border-blue-900 text-blue-900 px-5 py-2 rounded hover:bg-blue-100 transition">
                Buy Now
              </button>
            </div>

            <div className="flex gap-4 mt-6 text-blue-600 text-sm">
              <a href="#" className="hover:underline">WhatsApp</a>
              <a href="#" className="hover:underline">Telegram</a>
              <a href="#" className="hover:underline">Facebook</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Details;
