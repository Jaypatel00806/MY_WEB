import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = async () => {
    try {
      await axios.post("http://127.0.0.1:3001/auth/register", {
        email,
        password,
      });

      navigate("/login");
    } catch {
      alert("Register failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-600">
          Create Account
        </h2>

        <input
          className="border p-3 w-full mb-3 rounded-lg focus:ring-2 focus:ring-indigo-400"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="border p-3 w-full mb-4 rounded-lg focus:ring-2 focus:ring-indigo-400"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={register}
          className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Register
        </button>

        <p
          onClick={() => navigate("/login")}
          className="text-center mt-4 text-sm text-gray-600 cursor-pointer hover:text-indigo-600"
        >
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}
