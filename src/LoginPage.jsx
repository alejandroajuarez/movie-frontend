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
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="login" className="max-w-lg mx-auto p-6 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-white bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent text-center">
        Login
      </h1>
  
      {errors.length > 0 && (
        <ul className="mb-4 text-red-400 list-disc list-inside">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
  
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300">Email</label>
          <input
            name="email"
            type="email"
            className="mt-1 w-full bg-gray-800 text-gray-200 border border-gray-600 rounded-md p-2 focus:ring-gray-400 focus:border-gray-500"
          />
        </div>
  
        <div>
          <label className="block text-sm font-medium text-gray-300">Password</label>
          <input
            name="password"
            type="password"
            className="mt-1 w-full bg-gray-800 text-gray-200 border border-gray-600 rounded-md p-2 focus:ring-gray-400 focus:border-gray-500"
          />
        </div>
  
        <button
          type="submit"
          className="w-full bg-gray-700 text-white font-semibold py-2 rounded-md hover:bg-gray-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
  
}