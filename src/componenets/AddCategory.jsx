import { useRef } from "react";
import { Link } from "react-router-dom";

export default function AddCategory({ studyCategories, groupedCategories }) {
  const scrollerRef = useRef(null);

  const scrollByAmount = (dir = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.max(160, Math.floor(el.clientWidth * 0.9));
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const renderCategoryItem = (cat, linkPrefix = "/category") => (
    <Link
      key={cat.title}
      to={`${linkPrefix}/${cat.title.toLowerCase().replace(/\s+/g, "-")}`}
      className="flex-none w-40 sm:w-full md:w-full text-center snap-start"
    >
      <div className="w-full aspect-[3/2]">
        <img
          src={cat.img}
          alt={cat.title}
          className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
        />
      </div>
      <span className="mt-2 block text-sm sm:text-base font-medium text-gray-700">
        {cat.title}
      </span>
    </Link>
  );

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
      {/* First Categories */}
      <div className="relative mb-10">
        {/* Scroll Left Button */}
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1 z-50">
          <button
            onClick={() => scrollByAmount(-1)}
            className="pointer-events-auto hidden sm:flex w-8 h-8 rounded-full bg-white/90 hover:bg-white shadow border border-gray-200 items-center justify-center"
            aria-label="Scroll left"
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

        {/* Categories Container */}
        <div
          ref={scrollerRef}
          className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-x-visible no-scrollbar snap-x sm:snap-none snap-mandatory"
        >
          {studyCategories.map((cat) => renderCategoryItem(cat))}
        </div>

        {/* Scroll Right Button */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1 z-50">
          <button
            onClick={() => scrollByAmount(1)}
            className="pointer-events-auto hidden sm:flex w-8 h-8 rounded-full bg-white/90 hover:bg-white shadow border border-gray-200 items-center justify-center"
            aria-label="Scroll right"
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

      {/* Grouped Categories */}
      {groupedCategories.map((group) => (
        <div key={group.name} className="mb-10">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            {group.name}
          </h3>

          <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-x-visible no-scrollbar snap-x sm:snap-none snap-mandatory">
            {group.sub.map((subcat) =>
              renderCategoryItem(subcat, `/category/${group.name.toLowerCase().replace(/\s+/g, "-")}`)
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
