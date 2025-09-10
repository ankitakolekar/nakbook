import React from "react";
import Header from "./header";
import Banner from "./Banner";
import BooksSection from "./BooksSection";
import Footer from "./Footer";

function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero / Banner */}
      <section>
        <Banner />
      </section>

      {/* Book Sections */}
  <main className="space-y-10 px-3 sm:px-6 lg:px-12 py-8">
        <BooksSection title="New Arrivals" />
        <BooksSection title="Trending Now" />
        <BooksSection title="Bestselling" />
        <BooksSection title="Popular" />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
