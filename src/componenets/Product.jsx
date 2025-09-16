import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PageHeader from "./PageHeader";
import { HeartIcon, EyeIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

const Product = () => {
  const [activeTab, setActiveTab] = useState("Description");
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [popupProduct, setPopupProduct] = useState(null);

  const handleOpen = (product) => {
    setPopupProduct(product);
    setIsOpen(true);
  };
  const handleClose = () => {
    setPopupProduct(null);
    setIsOpen(false);
  };

  // ✅ All products
  const products = [
    {
      id: 1,
      title: "GK Oneliner – Vitthal Bade Sir",
      price: 269,
      oldPrice: 420,
      inStock: true,
      description: "GK Oneliner – Vitthal Bade Sir – Maharashtra Publication",
      keywords: ["MPSC", "पोलीस भरती", "इतिहास", "भूगोल", "विज्ञान", "राज्यशास्त्र"],
      img: "https://via.placeholder.com/700x820"
    },
    {
      id: 2,
      title: "Marathi Grammar Guide",
      price: 199,
      oldPrice: 300,
      inStock: false,
      description: "Marathi Grammar Guide – Exam Prep",
      keywords: ["Grammar", "Marathi", "Language", "UPSC"],
      img: "https://via.placeholder.com/700x820"
    },
    {
      id: 3,
      title: "History Crash Course",
      price: 350,
      oldPrice: 500,
      inStock: true,
      description: "Crash Course for History Exams",
      keywords: ["History", "MPSC", "UPSC"],
      img: "https://via.placeholder.com/700x820"
    },
    {
      id: 4,
      title: "Mathematics (Tricks and Techniques) – Pandharinath Rane Sir",
      price: 350,
      oldPrice: 500,
      inStock: true,
      description: "Crash Course for Mathematics Exams",
      keywords: ["Mathematics", "MPSC", "UPSC"],
      img: "https://via.placeholder.com/700x820"
    }
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      <Header />
      <PageHeader label="PRODUCT DETAILS" />

      <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-10">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4">
          <h2 className="text-lg font-bold mb-4">New This Week</h2>
          <div className="flex flex-col gap-4">
            {products.map((p) => (
              <div
                key={p.id}
                className="flex items-center gap-3 p-2 border rounded-lg hover:shadow cursor-pointer"
                onClick={() => setSelectedProduct(p)}
              >
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold">
                  {p.id}
                </div>
                <span className="text-sm font-medium">{p.title}</span>
              </div>
            ))}
          </div>

          {/* Trust / Support card */}
          <div className="mt-6 rounded-xl border p-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border">
                🔒
              </span>
              <p className="font-medium">100% Secure Payment</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border">
                🎧
              </span>
              <p className="font-medium">Expert Customer Service</p>
            </div>
            <p className="text-xs text-gray-400 pt-2">WE OFFER SECURE PAYMENT</p>
          </div>
        </aside>

        {/* Main Content */}
        <section className="w-full lg:w-3/4 flex flex-col gap-8">
          {/* Product Details */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Product Image */}
            <div className="w-full lg:w-1/2 border rounded-lg overflow-hidden relative">
              <span className="absolute top-2 left-2 bg-yellow-300 px-2 py-1 rounded text-xs font-semibold">
                -{Math.round(((selectedProduct.oldPrice - selectedProduct.price) / selectedProduct.oldPrice) * 100)}%
              </span>
              <img src={selectedProduct.img} alt={selectedProduct.title} className="w-full h-auto" />
            </div>

            {/* Product Info */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <p
                className={`text-xs font-semibold tracking-wide ${
                  selectedProduct.inStock ? "text-green-600" : "text-red-600"
                }`}
              >
                {selectedProduct.inStock ? "IN STOCK" : "OUT OF STOCK"}
              </p>
              <h1 className="text-xl md:text-2xl font-bold leading-snug">{selectedProduct.title}</h1>
              <div className="flex items-end gap-3">
                <span className="text-2xl md:text-3xl font-bold">₹{selectedProduct.price}</span>
                <span className="line-through text-gray-500 text-lg">₹{selectedProduct.oldPrice}</span>
              </div>

              {/* Quantity */}
              {selectedProduct.inStock && (
                <div className="mt-2">
                  <p className="text-sm font-medium mb-2">Quantity</p>
                  <div className="inline-flex items-center border rounded-lg">
                    <button onClick={decreaseQty} className="px-4 py-2 border-r hover:bg-gray-50">
                      -
                    </button>
                    <span className="px-6">{quantity}</span>
                    <button onClick={increaseQty} className="px-4 py-2 border-l hover:bg-gray-50">
                      +
                    </button>
                  </div>
                </div>
              )}

              {/* Keywords */}
              <div className="mt-4 text-gray-700 space-y-2">
                <ul className="list-disc list-inside space-y-1">
                  {selectedProduct.keywords.map((kw, index) => (
                    <li key={index}>{kw}</li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              {selectedProduct.inStock ? (
                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <button className="bg-[#0b2344] text-white px-6 py-3 rounded-xl hover:opacity-90">
                    Add to cart
                  </button>
                  <button className="bg-[#0b2344] text-white px-6 py-3 rounded-xl hover:opacity-90">
                    Buy Now
                  </button>
                </div>
              ) : (
                <p className="mt-4 text-red-600 font-semibold">This product is currently unavailable.</p>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6 border-t border-gray-200">
            <div className="flex gap-6 border-b border-gray-200">
              {["Description", "Additional information", "Reviews (0)"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 text-sm font-medium ${
                    activeTab === tab ? "text-black border-b-2 border-black" : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="mt-4 text-gray-700 space-y-2">
              {activeTab === "Description" && <p>{selectedProduct.description}</p>}
              {activeTab === "Additional information" && (
                <table className="min-w-full border border-gray-200">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-2 font-medium text-gray-900 border-r border-gray-200">Weight</td>
                      <td className="px-4 py-2 text-gray-700">875 g</td>
                    </tr>
                  </tbody>
                </table>
              )}
              {activeTab === "Reviews (0)" && <p>No reviews yet.</p>}
            </div>
          </div>

          {/* Related Products */}
          <div className="px-4 md:px-8 lg:px-16 py-8">
            <h2 className="text-2xl font-semibold mb-6">Related Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => {
                const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
                return (
                  <div
                    key={product.id}
                    className="bg-white shadow rounded-xl overflow-hidden relative group"
                  >
                    {/* Discount Badge */}
                    <span className="absolute top-2 left-2 bg-yellow-400 text-black text-sm font-bold px-2 py-1 rounded-full z-10">
                      -{discount}%
                    </span>

                    {/* Product Image */}
                    <div className="relative">
                      <img src={product.img} alt={product.title} className="w-full h-56 object-cover" />

                      {/* Hover Buttons */}
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-end gap-3 pr-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
                        <button className="bg-white p-2 rounded-full shadow hover:scale-110 transition pointer-events-auto">
                          <HeartIcon className="h-4 w-4 text-gray-700" />
                        </button>
                        <button
                          onClick={() => handleOpen(product)}
                          className="bg-white p-2 rounded-full shadow hover:scale-110 transition pointer-events-auto"
                        >
                          <EyeIcon className="h-4 w-4 text-gray-700" />
                        </button>
                        <button className="bg-white p-2 rounded-full shadow hover:scale-110 transition pointer-events-auto">
                          <ShoppingBagIcon className="h-4 w-4 text-gray-700" />
                        </button>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="p-4">
                      <h3 className="text-sm font-semibold truncate">{product.title}</h3>
                      <div className="flex items-center mt-2 text-gray-400 text-xs">
                        {"★".repeat(0)}{"☆".repeat(5)} <span className="ml-2">0</span>
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="text-lg font-bold text-blue-800">₹{product.price}.00</span>
                        <span className="text-gray-500 line-through">₹{product.oldPrice}.00</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* Popup Dialog */}
      {isOpen && popupProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-lg max-w-sm w-11/12 text-center"
          >
            <h2 className="text-lg font-bold">{popupProduct.title}</h2>
            <p className="mt-2">{popupProduct.description}</p>
            <p className="mt-2">
              <strong>₹{popupProduct.price}</strong>{" "}
              <del className="text-gray-500">₹{popupProduct.oldPrice}</del>
            </p>
            <button
              className="mt-4 bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800"
              onClick={handleClose}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Product;
