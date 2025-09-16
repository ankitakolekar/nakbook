import Header from "./Header";
import Banner from "./Banner";
import BooksSection from "./BooksSection";
import BannerCards from "./BannerCards";
import Footer from "./Footer";
import AddCategory from "./AddCategory";
import banner_one from "../assets/images/ikigai.webp";

// Define categories outside the component
const studyCategories = [
  { title: "Engineering" },
  { title: "Medical"},
  { title: "UPSC / MPSC"},
  { title: "Programming" },
];

studyCategories[0].img = banner_one;
studyCategories[1].img = banner_one;
studyCategories[2].img = banner_one;
studyCategories[3].img = banner_one;


const groupedCategories = [
  {
    name: "Famous Books",
    sub: [
      { title: "Harry Potter", img: "/images/hp.jpg" },
      { title: "The Alchemist", img: "/images/alch.jpg" },
      { title: "Rich Dad Poor Dad", img: "/images/rdpd.jpg" },
      { title: "Wings of Fire", img: "/images/wings.jpg" },
    ],
  },
  {
    name: "Novels",
    sub: [
      { title: "Romantic", img: "/images/romantic.jpg" },
      { title: "Thriller", img: "/images/thriller.jpg" },
      { title: "Historical", img: "/images/historical.jpg" },
      { title: "Fantasy", img: "/images/fantasy.jpg" },
    ],
  },
];

function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero / Banner */}
      <section>
        <Banner />
      </section>

      {/* Categories Section */}
      <section className="px-3 sm:px-6 lg:px-12 py-8">
        <AddCategory
          studyCategories={studyCategories}
          groupedCategories={groupedCategories}
        />
      </section>

      {/* Book Sections */}
      <main className="space-y-10 px-3 sm:px-6 lg:px-12 py-8">
        <BooksSection title="New Arrivals" />
        <BooksSection title="Trending Now" />
        <BannerCards />
        <BooksSection title="Bestselling" />
        <BooksSection title="Popular" />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
