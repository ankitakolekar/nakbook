// import React, { useState } from "react";

// const SignUp = () => {
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!phone || !password) {
//       alert("Please fill all required fields!");
//       return;
//     }
//     // 👉 Here you can call your Firebase or API sign-in function
//     console.log("Phone:", phone, "Password:", password);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
//         <h2 className="text-3xl font-bold mb-8 text-center">Register</h2>

//         <form className="space-y-6" onSubmit={handleSubmit}>
//           {/* Phone Number */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email/Phone Number <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               placeholder="Enter your 10-digit phone number or email.."
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
//               required
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Password <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password..."
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
//               required
//             />
//           </div>

//           {/* Privacy Policy */}
//           <p className="text-sm text-gray-500">
//             Your personal data will be used to support your experience
//             throughout this website, to manage access to your account, and for
//             other purposes described in our{" "}
//             <a href="#" className="text-blue-600 underline">
//               privacy policy
//             </a>
//             .
//           </p>

//           {/* Register Button */}
//           <button
//             type="submit"
//             className="w-full py-3 bg-[#05264E] text-white font-semibold rounded-full hover:bg-[#041d3d] transition"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;


import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneOrEmail: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phoneOrEmail, password, confirmPassword } = formData;

    if (!name || !phoneOrEmail || !password || !confirmPassword) {
      alert("⚠️ Please fill all required fields!");
      return;
    }

    if (password !== confirmPassword) {
      alert("⚠️ Passwords do not match!");
      return;
    }

    // 👉 Here you can call your Firebase or API registration function
    console.log("Registering User:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Create Account
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-800 outline-none"
              required
            />
          </div>

          {/* Phone / Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email / Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phoneOrEmail"
              value={formData.phoneOrEmail}
              onChange={handleChange}
              placeholder="Enter your email or phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-800 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-800 outline-none"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-800 outline-none"
              required
            />
          </div>

          {/* Privacy Policy */}
          <p className="text-sm text-gray-500">
            By creating an account, you agree to our{" "}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 underline">
              Terms of Service
            </a>
            .
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#05264E] text-white font-semibold rounded-full hover:bg-[#041d3d] transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
