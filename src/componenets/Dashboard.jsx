// import React from "react";
// import { useNavigate, Link } from "react-router-dom";
// import Header from "./Header";
// import PageHeader from "./PageHeader";
// import Footer from "./Footer";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   // Simple logout → just go back to home
//   const handleLogout = () => {
//     navigate("/", { replace: true });
//   };

//   // Load orders from localStorage
//   const orders = (() => {
//     try {
//       return JSON.parse(localStorage.getItem("orders") || "[]");
//     } catch {
//       return [];
//     }
//   })();

//   return (
//     <>
//       <Header />
//       <PageHeader label="Dashboard" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         {/* Profile Card */}
//         <div className="bg-white border rounded-xl shadow p-4 sm:p-6 mb-6">
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//             <div>
//               <h2 className="text-xl font-semibold">Profile</h2>
//               <div className="mt-2 text-gray-700 text-sm sm:text-base">
//                 <p><span className="font-medium">Name:</span> Guest User</p>
//                 <p><span className="font-medium">Email:</span> guest@example.com</p>
//               </div>
//             </div>
//             <div className="flex gap-3">
//               <Link
//                 to="/"
//                 className="px-4 py-2 rounded-lg border text-blue-700 border-blue-200"
//               >
//                 Edit Profile
//               </Link>
//               <button
//                 onClick={handleLogout}
//                 className="px-4 py-2 rounded-lg bg-red-600 text-white"
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Orders & History */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* Orders */}
//           <section className="bg-white border rounded-xl shadow p-4 sm:p-6">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold">Recent Orders</h3>
//               <Link to="/cart" className="text-sm text-blue-700 hover:underline">
//                 Go to Cart
//               </Link>
//             </div>
//             {orders.length === 0 ? (
//               <p className="text-gray-500 text-sm">
//                 No orders yet. Place your first order from the{" "}
//                 <Link to="/books" className="text-blue-700 underline">
//                   Books
//                 </Link>{" "}
//                 page.
//               </p>
//             ) : (
//               <ul className="divide-y">
//                 {orders.slice(0, 5).map((o) => (
//                   <li
//                     key={o.id}
//                     className="py-3 flex items-start justify-between gap-4"
//                   >
//                     <div>
//                       <p className="font-medium">Order #{o.id}</p>
//                       <p className="text-sm text-gray-500">
//                         {new Date(o.createdAt).toLocaleString()}
//                       </p>
//                       <p className="text-sm text-gray-700 mt-1">
//                         Items: {o.items?.length || 0}
//                       </p>
//                     </div>
//                     <div className="text-right">
//                       <p className="font-semibold">₹{o.total?.toFixed(2)}</p>
//                       <span
//                         className={`inline-block mt-1 text-xs px-2 py-1 rounded-full border ${
//                           o.status === "Delivered"
//                             ? "bg-green-50 border-green-200 text-green-700"
//                             : "bg-yellow-50 border-yellow-200 text-yellow-700"
//                         }`}
//                       >
//                         {o.status || "Processing"}
//                       </span>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </section>

//           {/* Purchase History */}
//           <section className="bg-white border rounded-xl shadow p-4 sm:p-6">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold">Purchase History</h3>
//               <Link
//                 to="/books"
//                 className="text-sm text-blue-700 hover:underline"
//               >
//                 Browse Books
//               </Link>
//             </div>
//             {orders.length === 0 ? (
//               <p className="text-gray-500 text-sm">No purchases yet.</p>
//             ) : (
//               <div className="overflow-x-auto">
//                 <table className="min-w-full text-sm">
//                   <thead>
//                     <tr className="text-left text-gray-500 border-b">
//                       <th className="py-2 pr-4">Order</th>
//                       <th className="py-2 pr-4">Date</th>
//                       <th className="py-2 pr-4">Total</th>
//                       <th className="py-2">Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {orders.map((o) => (
//                       <tr key={o.id} className="border-b">
//                         <td className="py-2 pr-4">#{o.id}</td>
//                         <td className="py-2 pr-4">
//                           {new Date(o.createdAt).toLocaleDateString()}
//                         </td>
//                         <td className="py-2 pr-4">₹{o.total?.toFixed(2)}</td>
//                         <td className="py-2">{o.status || "Processing"}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </section>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Dashboard;


import React from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Header from "./Header";
import PageHeader from "./PageHeader";
import Footer from "./Footer";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  // Simple logout
  const handleLogout = () => {
    auth.signOut(); // logout from firebase
    navigate("/login", { replace: true });
  };

  // If still checking auth state
  if (loading) {
    return <p className="text-center mt-10">Checking authentication...</p>;
  }

  // If user is NOT logged in → redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Load orders from localStorage
  const orders = (() => {
    try {
      return JSON.parse(localStorage.getItem("orders") || "[]");
    } catch {
      return [];
    }
  })();

  return (
    <>
      <Header />
      <PageHeader label="Dashboard" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Profile Card */}
        <div className="bg-white border rounded-xl shadow p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Profile</h2>
              <div className="mt-2 text-gray-700 text-sm sm:text-base">
                <p><span className="font-medium">Name:</span> {user.displayName || "Guest User"}</p>
                <p><span className="font-medium">Email:</span> {user.email}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                to="/profile"
                className="px-4 py-2 rounded-lg border text-blue-700 border-blue-200"
              >
                Edit Profile
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-600 text-white"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Orders & History */}
        {/* (keep your existing orders and history code here) */}
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
