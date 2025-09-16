import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { usercontext } from "../utils/Context";
import BookCard from "./BookCard";

// helper: turn "Trending Now" → "trending-now"
const slugify = (s = "") =>
  s.toLowerCase().trim().replace(/\s+/g, "-");

// helper: turn "trending-now" → "Trending Now"
const deslugify = (s = "") =>
  s
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

const AllBooksPage = () => {
  const [data] = useContext(usercontext);
  const { category } = useParams();

  // If category is present → filter
  const filteredBooks = category
    ? data.filter((book) => slugify(book.category) === category)
    : data;

  const booksToShow = filteredBooks.length ? filteredBooks : data;

  return (
    <section className="p-4 sm:p-6">
      {/* Heading */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold">
          📚 {category ? `${deslugify(category)} Books` : "All Books"}
        </h1>
        <Link
          to="/"
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          ⬅ Back to Home
        </Link>
      </div>

      {/* Book Grid */}
      {booksToShow.length === 0 ? (
        <p>No books found in this category.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {booksToShow.map((book) => (
            <Link key={book.id} to={`/book/${book.id}`}>
              <BookCard {...book} />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default AllBooksPage;
