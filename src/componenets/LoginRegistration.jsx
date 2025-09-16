import Header from "./Header";
import Footer from "./Footer";
import PageHeader from "./PageHeader";

function LoginRegistration() {
  return (
    <>
      <Header />
      <PageHeader label="MY ACCOUNT" />

      <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* ------------------ Login Section ------------------ */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Login</h2>
            <form className="space-y-6">
              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="nakbook_admin"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 bg-[#05264E] text-white font-semibold rounded-full hover:bg-[#041d3d] transition duration-200"
              >
                Log in
              </button>
            </form>
          </div>

          {/* ------------------ Register Section ------------------ */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Register</h2>
            <form className="space-y-6">
              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your 10-digit phone number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Info */}
              <p className="text-sm text-gray-500 leading-relaxed">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-medium"
                >
                  privacy policy
                </a>
                .
              </p>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 bg-[#05264E] text-white font-semibold rounded-full hover:bg-[#041d3d] transition duration-200"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default LoginRegistration;
