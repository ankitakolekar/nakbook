"use client";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import PageHeader from "./PageHeader";
import Footer from "./Footer";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const shippingCharge = 19;

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCartItems(JSON.parse(savedCart));
    else {
      // Example default item (remove in production)
      setCartItems([
        {
          id: 1,
          name: "COURSEWARE ON QUANTITATIVE APTITUDE For CAT - (12Edition) - Arun Sharma",
          price: 735,
          quantity: 1,
          image: "https://via.placeholder.com/80",
        },
      ]);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Update cart item quantity
  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = cartItems.length > 0 ? subtotal + shippingCharge : 0;

  return (
    <>
      <Header />
      <PageHeader label="CART" />

      <div className="p-4 md:p-6 md:mx-10 lg:mx-40">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items Section */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-4">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500 py-6">
                Your cart is empty
              </p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center justify-between border-b border-neutral-200 py-4"
                >
                  {/* Product Info */}
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover border border-neutral-200 rounded"
                    />
                    <div className="flex flex-col">
                      <h2 className="font-semibold text-gray-800 text-sm md:text-base">
                        {item.name}
                      </h2>
                      <p className="text-gray-600 text-sm">
                        ₹{item.price.toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 text-sm hover:underline mt-1 self-start"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Quantity & Price */}
                  <div className="flex items-center gap-4 mt-4 sm:mt-0">
                    <div className="flex items-center border border-neutral-200 rounded">
                      <button
                        aria-label="Decrease quantity"
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-3 py-1 text-lg"
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        aria-label="Increase quantity"
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-3 py-1 text-lg"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-semibold text-gray-800 whitespace-nowrap">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Totals Section */}
          <div className="bg-white rounded-lg shadow-md p-4 h-fit">
            <h2 className="text-lg font-bold mb-4">Cart totals</h2>

            <div className="flex justify-between py-2 border-b border-neutral-200">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            <div className="py-2 border-b border-neutral-200 text-sm">
              <p className="mb-2 font-medium">Shipping</p>
              {cartItems.length > 0 ? (
                <>
                  <p className="text-gray-600 leading-relaxed">
                    भारतीय पोस्ट यांनी त्यांच्या दरात टिपट वाढ केल्याने 80% डिलिव्हरी
                    चार्जेस आम्ही भरत असून 20% चार्जेस ग्राहकांकडून घेत आहोत.
                    <br />
                    शिपिंग: ₹{shippingCharge}
                  </p>
                  <p className="mt-2">
                    Shipping to <strong>Maharashtra</strong>. <br />
                    <button className="text-blue-600 hover:underline">
                      Change address
                    </button>
                  </p>
                </>
              ) : (
                <p className="text-gray-400">No shipping charges</p>
              )}
            </div>

            <div className="flex justify-between py-2 border-b border-neutral-200 font-bold">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

            <a
              href={cartItems.length > 0 ? "/checkout" : "#"}
              className={`block text-center w-full mt-4 py-2 rounded-full transition ${
                cartItems.length > 0
                  ? "bg-blue-900 text-white hover:bg-blue-800"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
            >
              Proceed to checkout
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
