import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import PageHeader from "./PageHeader";
import Footer from "./Footer";

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "Maharashtra",
    pin: "",
    phone: "",
    email: "",
    password: "",
    notes: "",
  });

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Validation
  const validateForm = () => {
    let newErrors = [];

    if (!formData.firstName.trim())
      newErrors.push("Billing First name is a required field.");
    if (!formData.lastName.trim())
      newErrors.push("Billing Last name is a required field.");
    if (!formData.street.trim())
      newErrors.push("Billing Street address is a required field.");
    if (!formData.city.trim())
      newErrors.push("Billing Town / City is a required field.");
    if (!formData.pin.trim())
      newErrors.push("Billing PIN Code is a required field.");
    if (!formData.phone.trim())
      newErrors.push("Billing Phone Number is a required field.");
    if (!formData.email.trim())
      newErrors.push("Billing Email address is a required field.");
    if (!formData.password.trim())
      newErrors.push("Create account password is a required field.");
    if (formData.phone && !/^\d{10}$/.test(formData.phone))
      newErrors.push("Please enter a valid 10-digit phone number.");

    return newErrors;
  };

  // ✅ Submit handler
  const handlePlaceOrder = () => {
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setErrors([]);
      // Build an order from cart (from localStorage)
      let cart = [];
      try {
        cart = JSON.parse(localStorage.getItem("cart") || "[]");
      } catch {}

      const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
      const shipping = cart.length > 0 ? 19 : 0;
      const order = {
        id: Date.now(),
        items: cart,
        subtotal,
        shipping,
        total: subtotal + shipping,
        status: "Processing",
        createdAt: new Date().toISOString(),
      };

      try {
        const prev = JSON.parse(localStorage.getItem("orders") || "[]");
        localStorage.setItem("orders", JSON.stringify([order, ...prev]));
        // Clear cart after order
        localStorage.removeItem("cart");
      } catch {}

      // Navigate to dashboard
      navigate("/dashboard");
    }
  };

  return (
    <>
      <Header />
      <PageHeader label="Checkout" />

      <div className="min-h-screen bg-white p-4 md:p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT SIDE FORM */}
          <div className="lg:col-span-2 space-y-6 bg-white">
            {errors.length > 0 && (
              <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded-md">
                <ul className="list-disc pl-6 space-y-1">
                  {errors.map((err, i) => (
                    <li key={i}>{err}</li>
                  ))}
                </ul>
              </div>
            )}

            <h2 className="text-2xl font-bold mb-4">Billing details</h2>

            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
            </div>

            {/* Street */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Street address <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
                placeholder="House number and street name"
                className="w-full border border-gray-300 rounded-md p-2 mb-2"
                required
              />
              <input
                type="text"
                placeholder="Apartment, suite, unit, etc. (optional)"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Town / City <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium mb-1">
                State <span className="text-red-600">*</span>
              </label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option>Maharashtra</option>
              </select>
            </div>

            {/* PIN */}
            <div>
              <label className="block text-sm font-medium mb-1">
                PIN Code <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                name="pin"
                value={formData.pin}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Email address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Create account password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Order notes (optional)
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Notes about your order, e.g. special notes for delivery."
                className="w-full border border-gray-300 rounded-md p-2"
                rows="3"
              ></textarea>
            </div>
          </div>

          {/* RIGHT SIDE - Summary */}
          <div className="bg-white border rounded-lg shadow p-6 h-fit space-y-4">
            <h2 className="text-2xl font-bold mb-4">Your order</h2>

            <div className="flex justify-between text-sm font-medium border-b pb-2">
              <span>Product</span>
              <span>Subtotal</span>
            </div>

            <div className="flex justify-between text-sm">
              <div>
                GK Oneliner - Vitthal Bade Sir
                <br />
                <span className="text-gray-600 text-xs">
                  - Maharashtra Publication | GK
                  <br />
                  वनलाईनर - विठ्ठल बडे - महाराष्ट्र पब्लिकेशन × 2
                </span>
              </div>
              <span>₹538.00</span>
            </div>

            <div className="flex justify-between text-sm border-t pt-2">
              <span>Subtotal</span>
              <span>₹538.00</span>
            </div>

            <div className="flex justify-between text-sm border-t pt-2">
              <span>
                Shipping
                <p className="text-xs text-gray-600">
                  भारतीय पोस्ट यांची त्यांच्या दरात तिप्पट वाढ केलीने 80% डिलिव्हरी चार्जेस आमचे
                  भारत असून 20% चार्जेस ग्राहकांकडून घेत आहेत. धन्यवाद.
                </p>
              </span>
              <span>₹38.00</span>
            </div>

            <div className="flex justify-between text-lg font-bold border-t pt-2">
              <span>TOTAL</span>
              <span>₹576.00</span>
            </div>

            {/* Payment Option */}
            <div className="pt-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" defaultChecked />
                <span className="font-bold">Smart Gateway</span>
              </label>
              <p className="text-xs text-gray-500">
                Credit, Debit Card / Net Banking / UPI / Wallets
              </p>
            </div>

            {/* Privacy Note */}
            <p className="text-xs text-gray-500">
              Your personal data will be used to process your order, support your
              experience throughout this website, and for other purposes described in our{" "}
              <a href="#" className="text-blue-600 underline">
                privacy policy
              </a>.
            </p>

            {/* Place Order Button */}
            <button
              className="w-full bg-blue-900 text-white font-bold py-3 rounded-full hover:bg-blue-800 transition"
              onClick={handlePlaceOrder}
            >
              Place order
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
