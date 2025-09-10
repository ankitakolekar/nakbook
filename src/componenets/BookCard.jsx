import React from "react";

const BookCard = ({ id, title, price, originalPrice, discount, image }) => {
  return (
    <div className="relative group w-[160px] sm:w-[180px] md:w-[200px] rounded-xl overflow-hidden bg-white shadow transition hover:shadow-lg">
      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold rounded-full px-2 py-1">
          -{Math.abs(discount)}%
        </div>
      )}

      {/* Book Image */}
      <div className="flex justify-center">
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
      <div className="p-2 text-left">
        <p className="text-gray-800 font-semibold text-sm line-clamp-2">
          {title}
        </p>

        {/* Ratings (static for now) */}
        <div className="flex items-center text-yellow-400 text-xs">
          ★★★★★ <span className="text-gray-500 ml-1">(0)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <p className="text-[#051d38] font-bold text-sm">₹{price}/-</p>
          {originalPrice && (
            <p className="text-gray-500 line-through text-xs">
              ₹{originalPrice}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
