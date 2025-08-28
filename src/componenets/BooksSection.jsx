// import { useContext } from "react";
// import { Link, Links } from "react-router-dom";
// import { usercontext } from "../utils/Context";





//   const BookCard = ({ title, price, originalPrice }) => (

//     <div className="max-w-sm bg-white rounded-xl shadow-md p-4 relative">

//         <div className="absolute top-2 left-2 bg-yellow-400 text-black text-sm font-bold rounded-full px-2 py-1">
//           -30%
//         </div>
//         <br />
//         <div class="flex flex-col items-center">
//             <img src="/path/to/book-banner.jpg"  className="rounded-lg w-[300px] object-cover h-[300px] bg-yellow-200" />
//             {
//             /*  */}

//         </div>

//         <div class="mt-4 text-xs text-gray-700 border-t pt-2">
//           {/* <div class="text-red-600 font-medium">Nakbook.com</div>
//           <div>शैक्षणिक क्षेत्रातील सर्व काही...</div>
//           <div class="mt-1">📞 0241 3590019</div> */}
//           <div class="mt-4 w-full text-left space-y-2">
              
//               <p class="text-gray-800 font-semibold leading-snug text-base">
//                 सहामाही चालू घडामोडी (जानेवारी ते जून 2025) – देवाकर जाधवर
//               </p>
//               <div class="flex items-center text-yellow-400 text-2xl">
//                 ★★★★★
//                 <span class="text-gray-500 ml-1 text-xs">(0)</span>
//               </div>
//               <div class="flex items-center gap-2">
//                 <p class="text-[#051d38] text-2xl font-bold">₹182/-</p>
//                 <p class="text-gray-500 line-through">₹260.00</p>
//               </div>

//             </div>
//         </div>

//     </div>

//   );

//   const BooksSection = ({ title }) => {
    
//     const [data,setdata] = useContext(usercontext);
//     // console.log(data);

//     return (
//       <section className="p-4">
//         <div className="w-full h-[52px] mb-[44px] flex items-center ">
//         <h2 className="text-4xl font-semibold h=[42px] py-1 ml-[40px]">{title}&nbsp;Book</h2>
//         <hr className="w-[50%] ml-[44px]" />

//         <Link to="" className="ml-[44px]">
//           <div className="inline-block bg-[#011E41] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#022c5a] transition-all duration-300">
//             View All &gt;
//           </div>
//         </Link>

//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {
//             data.map((data, index) => (
//               <Link to={`/details/${data.id}`}>
//                 <BookCard key={index} {...data} />
//               </Link>
//             ))
//           }
//         </div>
//       </section>
//     );
//   };

//   export default BooksSection;
  
import { useContext } from "react";
import { Link } from "react-router-dom";
import { usercontext } from "../utils/Context";

// 🎴 Book Card
const BookCard = ({ id, title, price, originalPrice, discount, image }) => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md p-4 relative group hover:shadow-lg transition">
      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-2 left-2 bg-yellow-400 text-black text-sm font-bold rounded-full px-2 py-1">
          -{Math.abs(discount)}%
        </div>
      )}

      {/* Book Image */}
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt={title}
          className="rounded-lg w-[250px] h-[280px] object-cover bg-gray-100"
        />
      </div>

      {/* Book Info */}
      <div className="mt-4 text-xs text-gray-700 border-t pt-3 space-y-2 text-left">
        <p className="text-gray-800 font-semibold leading-snug text-base line-clamp-2">
          {title}
        </p>

        {/* Ratings */}
        <div className="flex items-center text-yellow-400 text-lg">
          ★★★★★ <span className="text-gray-500 ml-1 text-xs">(0)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <p className="text-[#051d38] text-xl font-bold">₹{price}/-</p>
          {originalPrice && (
            <p className="text-gray-500 line-through">₹{originalPrice}</p>
          )}
        </div>
      </div>
    </div>
  );
};

// 📚 Books Section
const BooksSection = ({ title }) => {
  const [data] = useContext(usercontext);

  return (
    <section className="p-6">
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold">{title} Books</h2>
        <Link to="/books">
          <div className="mt-4 md:mt-0 inline-block bg-[#011E41] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#022c5a] transition-all duration-300">
            View All &gt;
          </div>
        </Link>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((book) => (
          <Link to={`/details/${book.id}`} key={book.id}>
            <BookCard {...book} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BooksSection;
