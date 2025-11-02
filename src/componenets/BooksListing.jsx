import React, { useMemo, useState } from "react";
import Header from "./Header";
import PageHeader from "./PageHeader";
import Footer from "./Footer";
import { Link } from "react-router-dom";

/* -------------------------- MOCK DATA -------------------------- */
const CATEGORIES = [
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

const PRODUCTS = Array.from({ length: 56 }).map((_, i) => {
  // Assign categories to products in a distributed manner
  const categoryIndex = i % CATEGORIES.length;
  const category = CATEGORIES[categoryIndex];
  
  return {
    id: i + 1,
    title:
      i % 3 === 0
        ? "101 प्रश्नसंच 2007 ते 2023 पर्यंत झालेल्या परीक्षांसाठी"
        : i % 3 === 1
        ? "100 जम्बो पोलीस भरती – सिद्धेश्वर हाडवळ"
        : "21 अपेक्षित प्रश्नसंच द्वितीय खाटोळे सर स्टेप",
    image:
      i % 4 === 0
        ? "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600"
        : i % 4 === 1
        ? "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600"
        : i % 4 === 2
        ? "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600"
        : "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=600",
    rating: Math.floor(Math.random() * 5),
    price: [99, 180, 225, 195, 367, 65, 196, 299, 325][i % 9],
    oldPrice: [170, 240, 450, 390, 525, 130, 280, 435, 650][i % 9],
    discount: [-42, -25, -50, -40, -30, -50, -31, -50, -30][i % 9],
    category: category,
  };
});

/* --------------------------- UTILITIES --------------------------- */
const sortProducts = (list, sortKey) => {
  const c = [...list];
  switch (sortKey) {
    case "priceLow":
      return c.sort((a, b) => a.price - b.price);
    case "priceHigh":
      return c.sort((a, b) => b.price - a.price);
    case "newest":
      return c.sort((a, b) => b.id - a.id);
    default:
      return c;
  }
};

const RatingStars = ({ rating = 0 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.034a1 1 0 00-1.176 0l-2.802 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

/* ------------------------- SUBCOMPONENTS ------------------------- */
const Sidebar = ({ selectedCategories, setSelectedCategories, price, setPrice }) => {
  const toggleCategory = (name) => {
    setSelectedCategories((prev) =>
      prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name]
    );
  };

  return (
    <aside className="bg-white rounded-lg border shadow-sm p-4 md:p-5 sticky top-4 h-fit">
      {/* Genre */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Genre</h3>
        <div className="max-h-[300px] md:max-h-[420px] overflow-y-auto pr-2 space-y-2">
          {CATEGORIES.map((cat) => (
            <label className="flex items-center gap-3 text-sm" key={cat}>
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-600"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
              />
              <span className="text-gray-700">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mt-6 pt-6 border-t">
        <h3 className="text-lg font-semibold mb-3">Filter By Price</h3>
        <input
          type="range"
          min="0"
          max="1680"
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
          className="w-full accent-blue-600"
        />
        <div className="text-sm mt-2 text-gray-600">Price: ₹0 — ₹{price}</div>
      </div>
    </aside>
  );
};

const SortingBar = ({ sort, setSort, perPage, setPerPage, view, setView, total }) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 bg-white border rounded-lg shadow-sm p-3 md:p-4">
      {/* Left */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span className="hidden sm:block">Showing</span>
        <select
          className="border rounded-md px-2 py-1 text-sm"
          value={perPage}
          onChange={(e) => setPerPage(parseInt(e.target.value))}
        >
          {[6, 9, 12, 15, 18].map((n) => (
            <option key={n} value={n}>
              Show {n}
            </option>
          ))}
        </select>
        <span className="hidden sm:block">of {total} results</span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 sm:gap-4">
        <select
          className="border rounded-md px-2 py-1 text-sm"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="priceLow">Price: Low → High</option>
          <option value="priceHigh">Price: High → Low</option>
          <option value="newest">Newest</option>
        </select>

        {/* View toggle */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded ${view === "grid" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3h6v6H2V3zm10 0h6v6h-6V3zM2 11h6v6H2v-6zm10 0h6v6h-6v-6z" />
            </svg>
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded ${view === "list" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 6h12v2H4V6zm0 4h12v2H4v-2zm0 4h12v2H4v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ item, view = "grid" }) => (
  <div
    className={`relative bg-white border rounded-lg shadow-sm overflow-hidden ${
      view === "list" ? "flex gap-4" : ""
    }`}
  >
    {/* Discount */}
    <div className="absolute left-2 top-2 bg-yellow-400 text-black text-xs font-semibold rounded-full px-2 py-1">
      {item.discount}%
    </div>

    <img
      src={item.image}
      alt={item.title}
      className={`${view === "list" ? "w-32 h-32 sm:w-40 sm:h-40" : "w-full h-56 sm:h-64"} object-cover`}
    />
    <div className={`p-3 ${view === "list" ? "flex-1" : ""}`}>
      <h3 className="font-medium line-clamp-2 text-sm sm:text-base">{item.title}</h3>
      <div className="flex items-center gap-2 mt-2">
        <RatingStars rating={item.rating} />
        <span className="text-xs text-gray-500">(0)</span>
      </div>
      <div className="mt-2 flex items-center gap-3">
        <span className="text-lg font-semibold">₹{item.price}</span>
        <span className="text-sm text-gray-400 line-through">₹{item.oldPrice}</span>
      </div>
    </div>
  </div>
);

/* ------------------------------ PAGE ------------------------------ */
const BooksListing = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [price, setPrice] = useState(1680);
  const [sort, setSort] = useState("default");
  const [perPage, setPerPage] = useState(12);
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = PRODUCTS;
    
    // Filter by selected categories
    if (selectedCategories.length > 0) {
      list = list.filter((product) => selectedCategories.includes(product.category));
    }
    
    // Filter by price
    list = list.filter((p) => p.price <= price);
    
    return sortProducts(list, sort);
  }, [price, sort, selectedCategories]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <>
      <Header />
      <PageHeader label="Shop" />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto p-3 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <Sidebar
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                price={price}
                setPrice={(v) => {
                  setPage(1);
                  setPrice(v);
                }}
              />
            </div>

            {/* Main */}
            <div className="lg:col-span-9 space-y-4">
              <SortingBar
                sort={sort}
                setSort={(v) => {
                  setPage(1);
                  setSort(v);
                }}
                perPage={perPage}
                setPerPage={(v) => {
                  setPage(1);
                  setPerPage(v);
                }}
                view={view}
                setView={setView}
                total={filtered.length}
              />

              {/* Products */}
              <div
                className={`grid gap-4 ${
                  view === "grid"
                    ? "grid-cols-2 sm:grid-cols-2 md:grid-cols-3"
                    : "grid-cols-1"
                }`}
              >
                {paginated.map((p) => (
                  <ProductCard key={p.id} item={p} view={view} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Floating Button */}
        <a
          href="#"
          className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700"
          title="WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 0 5.38 0 12a11.86 11.86 0 001.64 6.04L0 24l6.08-1.6A11.94 11.94 0 0012 24c6.627 0 12-5.38 12-12 0-3.18-1.234-6.168-3.48-8.52zM12 22a10 10 0 01-5.22-1.44l-.37-.22-3.48.92.93-3.39-.24-.38A10 10 0 1122 12 10 10 0 0112 22zm5.44-7.36c-.3-.15-1.77-.87-2.05-.96-.28-.1-.48-.15-.68.15-.19.3-.75.96-.92 1.16-.17.2-.34.23-.64.08-.3-.15-1.26-.46-2.4-1.46-.89-.78-1.48-1.74-1.66-2.03-.17-.3-.02-.46.13-.6.14-.14.3-.34.45-.51.15-.17.19-.29.29-.49.1-.2.05-.37-.02-.52-.08-.15-.68-1.63-.93-2.23-.25-.6-.5-.52-.68-.53l-.58-.01c-.2 0-.52.08-.79.37-.27.3-1.05 1.03-1.05 2.52s1.08 2.93 1.23 3.13c.15.2 2.12 3.22 5.12 4.52.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.3-.2-.61-.36z" />
          </svg>
        </a>
      </div>
      <Footer />
    </>
  );
};

export default BooksListing;
