import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { usercontext } from "../utils/Context";
import BookCard from "./BookCard";

const BooksPage = () => {
  const { category } = useParams();
  const [data] = useContext(usercontext);

  // Mapping route slug → readable title
  const categoryTitles = {
    "new-arrival": "📚 All New Arrival Books",
    "popular-books": "🔥 Popular Books",
    "bestselling-books": "🏆 Bestselling Books",
    "trending-now": "⚡ Trending Now Books",
  };

  const pageTitle = categoryTitles[category] || "📖 All Books";

  // ✅ Instead of slice(), just show all books
  // Later you can filter by book.category if available
  const filteredBooks = data;

  return (
    <section className="p-4 sm:p-6">
      {/* Page Heading */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">{pageTitle}</h1>
        <Link
          to="/"
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </section>
  );
};

export default BooksPage;
