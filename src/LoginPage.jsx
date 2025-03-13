import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function LoginPage() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);

    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="max-w-lg w-full px-6 py-8 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl">
        
        <h1 className="text-4xl font-bold text-white text-center mb-6">Log in</h1>

        {errors.length > 0 && (
          <ul className="mb-4 text-red-400 list-disc list-inside text-center">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              className="border p-3 bg-gray-800 text-gray-300 border-gray-600 shadow-md rounded-lg w-full focus:ring-gray-400 focus:border-gray-500 transition-all"
              placeholder="Email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">Password</label>
            <input
              name="password"
              type="password"
              className="border p-3 bg-gray-800 text-gray-300 border-gray-600 shadow-md rounded-lg w-full focus:ring-gray-400 focus:border-gray-500 transition-all"
              placeholder="Password"
              required
            />
          </div>

          <a href="#" className="text-blue-400 text-sm hover:underline block text-center">Forgot your password?</a>

          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg transition-all duration-300 hover:scale-105"
          >
            LOG IN
          </button>
        </form>

        <div className="text-center text-sm mt-4 text-gray-300">
          Don&apos;t have an account?
          <a href="/signup" className="text-blue-400 hover:underline"> Sign Up</a>
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
          By signing in, you agree to our 
          <a href="#" className="text-blue-400 hover:underline"> Terms</a> and 
          <a href="#" className="text-blue-400 hover:underline"> Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
}
