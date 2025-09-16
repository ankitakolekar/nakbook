import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaRegHeart, FaHeart, FaEye, FaCartPlus } from "react-icons/fa";
import { usercontext } from "../utils/Context";

// 🎴 Book Card
const BookCard = ({
  id,
  title,
  price,
  originalPrice,
  discount,
  image,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onView,
}) => {
  const [wishBump, setWishBump] = useState(false);
  const [viewBump, setViewBump] = useState(false);
  const [cartBump, setCartBump] = useState(false);

  const bump = (setter) => {
    setter(true);
    setTimeout(() => setter(false), 220);
  };

  return (
    <div className="relative group w-full rounded-xl overflow-hidden bg-white shadow transition-shadow duration-300 ease-out hover:shadow-2xl focus-within:shadow-2xl">
      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-2 left-2 bg-yellow-400 text-black text-sm font-bold rounded-full px-2 py-1">
          -{Math.abs(discount)}%
        </div>
      )}

      {/* Action Icons */}
      <div className="hidden sm:flex absolute top-2 right-2 flex-col gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
        <button
          type="button"
          title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            bump(setWishBump);
            onToggleWishlist?.({ id, title, price, originalPrice, image });
          }}
          className={`w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50 transition-transform duration-200 hover:scale-110 active:scale-95 ${
            wishBump ? "animate-pop" : ""
          }`}
        >
          {isWishlisted ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-gray-700" />
          )}
        </button>

        <button
          type="button"
          title="View"
          aria-label="View"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            bump(setViewBump);
            onView?.(id);
          }}
          className={`w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50 transition-transform duration-200 hover:scale-110 active:scale-95 ${
            viewBump ? "animate-pop" : ""
          }`}
        >
          <FaEye className="text-gray-700" />
        </button>

        <button
          type="button"
          title="Add to cart"
          aria-label="Add to cart"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            bump(setCartBump);
            onAddToCart?.({ id, title, price, originalPrice, image });
          }}
          className={`w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50 transition-transform duration-200 hover:scale-110 active:scale-95 ${
            cartBump ? "animate-pop" : ""
          }`}
        >
          <FaCartPlus className="text-gray-700" />
        </button>
      </div>

      {/* Book Image */}
      <div className="flex flex-col items-center">
        <img
          src={
            image ||
            "https://www.nakbook.com/wp-content/uploads/2023/09/Photo_1695140150637-768x768.jpg"
          }
          alt={title}
          className="rounded-lg w-full aspect-[3/4] object-cover bg-gray-100"
        />
      </div>

      {/* Book Info */}
      <div className="mt-2 sm:mt-3 text-xs text-gray-700 pt-2 space-y-2 text-left">
        <p className="text-gray-800 font-semibold leading-snug text-xs sm:text-sm line-clamp-2">
          {title}
        </p>

        {/* Ratings */}
        <div className="flex items-center text-yellow-400 text-[10px] sm:text-sm">
          ★★★★★ <span className="text-gray-500 ml-1 text-xs">(0)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <p className="text-[#051d38] text-xs sm:text-base font-bold">₹{price}/-</p>
          {originalPrice && <p className="text-gray-500 line-through">₹{originalPrice}</p>}
        </div>
      </div>
    </div>
  );
};

// 📚 Books Section
const BooksSection = ({ title }) => {
  const [data = []] = useContext(usercontext) || []; // default to empty array
  const navigate = useNavigate();

  const [wishlist, setWishlist] = useState([]);
  const wishlistIds = useMemo(() => new Set(wishlist.map((b) => b.id)), [wishlist]);

  // Load wishlist from localStorage
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("wishlist") || "[]");
      if (Array.isArray(saved)) setWishlist(saved);
    } catch {}
  }, []);

  // Handlers
  const persistWishlist = (items) => {
    setWishlist(items);
    localStorage.setItem("wishlist", JSON.stringify(items));
  };

  const toggleWishlist = (book) => {
    const exists = wishlistIds.has(book.id);
    const next = exists ? wishlist.filter((b) => b.id !== book.id) : [...wishlist, book];
    persistWishlist(next);
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

  const viewBook = (id) => navigate(`/book/${id}`);

  // Scroll logic
  const scrollerRef = useRef(null);
  const scrollByAmount = (dir = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.max(160, Math.floor(el.clientWidth * 0.9));
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  // Auto-scroll
  const AUTO_RESUME_DELAY_MS = 4000;
  const AUTO_INTERVAL_MS = 4000;
  const autoIntervalRef = useRef(null);
  const resumeTimerRef = useRef(null);

  const stopAuto = () => {
    if (autoIntervalRef.current) {
      clearInterval(autoIntervalRef.current);
      autoIntervalRef.current = null;
    }
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  const stepOnce = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (max <= 0) return;
    const amount = Math.max(160, Math.floor(el.clientWidth * 0.9));
    const nearEnd = el.scrollLeft + amount >= max - 4;
    if (nearEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else el.scrollBy({ left: amount, behavior: "smooth" });
  };

  const startAuto = () => {
    stopAuto();
    autoIntervalRef.current = setInterval(stepOnce, AUTO_INTERVAL_MS);
  };

  const pauseAuto = (ms = AUTO_RESUME_DELAY_MS) => {
    stopAuto();
    resumeTimerRef.current = setTimeout(() => startAuto(), ms);
  };

  useEffect(() => {
    if (!data || data.length === 0) return;
    startAuto();
    const el = scrollerRef.current;
    if (!el) return () => stopAuto();

    const pauseAndResume = () => pauseAuto(AUTO_RESUME_DELAY_MS);
    el.addEventListener("pointerdown", pauseAndResume, { passive: true });
    el.addEventListener("wheel", pauseAndResume, { passive: true });
    el.addEventListener("touchstart", pauseAndResume, { passive: true });

    return () => {
      stopAuto();
      if (el) {
        el.removeEventListener("pointerdown", pauseAndResume);
        el.removeEventListener("wheel", pauseAndResume);
        el.removeEventListener("touchstart", pauseAndResume);
      }
    };
  }, [data]);

  return (
    <section className="p-4 sm:p-6">
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold">{title} Books</h2>
        <Link
          to={`/AllBooksPage/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="mt-4 md:mt-0 inline-block bg-[#011E41] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#022c5a] transition-all duration-300"
        >
          View All &gt;
        </Link>
      </div>

      {/* Horizontal scroll on all devices */}
      <div className="relative -mx-2 sm:-mx-3">
        {/* Left overlay + button */}
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1 z-[60]">
          <button
            type="button"
            aria-label="Scroll left"
            onPointerDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              pauseAuto();
              scrollByAmount(-1);
            }}
            className="pointer-events-auto flex w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white shadow border border-gray-200 items-center justify-center"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Scroller */}
        <div
          ref={scrollerRef}
          className="flex gap-6 sm:gap-8 px-10 sm:px-12 overflow-x-auto no-scrollbar snap-x snap-proximity"
        >
          {data.map((book) => (
            <Link
              to={`/book/${book.id}`}
              key={book.id}
              className="relative flex-none w-36 sm:w-44 md:w-52 lg:w-56 snap-start after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:w-px after:h-2/3 after:bg-gray-200 after:-right-3 sm:after:-right-4 last:after:hidden"
            >
              <BookCard
                {...book}
                isWishlisted={wishlistIds.has(book.id)}
                onToggleWishlist={toggleWishlist}
                onAddToCart={addToCart}
                onView={viewBook}
              />
            </Link>
          ))}
        </div>

        {/* Right overlay + button */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1 z-[60]">
          <button
            type="button"
            aria-label="Scroll right"
            onPointerDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              pauseAuto();
              scrollByAmount(1);
            }}
            className="pointer-events-auto flex w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white shadow border border-gray-200 items-center justify-center"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
