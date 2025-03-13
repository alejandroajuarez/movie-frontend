import axios from "axios";
import { useState } from "react";

export function SignupPage() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);

    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="max-w-lg w-full px-6 py-8 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl">
        
        <h1 className="text-4xl font-bold text-white text-center mb-6">Sign Up</h1>

        {errors.length > 0 && (
          <ul className="mb-4 text-red-400 list-disc list-inside text-center">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">Name</label>
            <input
              name="name"
              type="text"
              className="border p-3 bg-gray-800 text-gray-300 border-gray-600 shadow-md rounded-lg w-full focus:ring-gray-400 focus:border-gray-500 transition-all"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              className="border p-3 bg-gray-800 text-gray-300 border-gray-600 shadow-md rounded-lg w-full focus:ring-gray-400 focus:border-gray-500 transition-all"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">Password</label>
            <input
              name="password"
              type="password"
              className="border p-3 bg-gray-800 text-gray-300 border-gray-600 shadow-md rounded-lg w-full focus:ring-gray-400 focus:border-gray-500 transition-all"
              placeholder="Choose a Password"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">Confirm Password</label>
            <input
              name="password_confirmation"
              type="password"
              className="border p-3 bg-gray-800 text-gray-300 border-gray-600 shadow-md rounded-lg w-full focus:ring-gray-400 focus:border-gray-500 transition-all"
              placeholder="Confirm Password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg transition-all duration-300 hover:scale-105"
          >
            SIGN UP
          </button>
        </form>

        <div className="text-center text-sm mt-4 text-gray-300">
          Already have an account?
          <a href="/login" className="text-blue-400 hover:underline"> Log In</a>
        </div>

        {/* Third-Party Authentication */}
        <div className="flex items-center justify-center mt-6 space-x-3">
          <button className="hover:scale-105 transition transform p-2 rounded-lg bg-gray-800 shadow-md">
            <img className="w-6 h-6" src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/" alt="Google" />
          </button>
          <button className="hover:scale-105 transition transform p-2 rounded-lg bg-gray-800 shadow-md">
            <img className="w-6 h-6" src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/" alt="LinkedIn" />
          </button>
          <button className="hover:scale-105 transition transform p-2 rounded-lg bg-gray-800 shadow-md">
            <img className="w-6 h-6 filter invert" src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/" alt="GitHub" />
          </button>
        </div>

        <div className="text-center text-xs text-gray-400 mt-4">
          By signing up, you agree to our 
          <a href="#" className="text-blue-400 hover:underline"> Terms</a> and 
          <a href="#" className="text-blue-400 hover:underline"> Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
}
