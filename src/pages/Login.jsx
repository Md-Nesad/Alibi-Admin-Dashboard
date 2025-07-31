import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/alibiLogo.jpg";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("Admin");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    navigate("/adminDashboard");
  };

  return (
    <div className="min-h-screen bg-[#262626] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-[#1A1A1A] space-y-6 text-white px-6 sm:px-12 md:px-24 pt-8 pb-12 sm:pb-16 rounded-lg shadow-lg">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <div className="mb-2">
            <img
              width={80}
              height={80}
              className="rounded"
              src={logo}
              alt="Alibi Logo"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-wider text-center">
            ALIBI
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-4 focus:outline-none focus:border-blue-500 text-lg"
            required
          />
          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-4 focus:outline-none focus:border-blue-500 text-lg"
            required
          />
          {/* 2FA code */}
          <div className="relative">
            <input
              type="number"
              inputMode="numeric"
              placeholder="2FA Code"
              className="no-spinner w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-4 focus:outline-none focus:border-blue-500 text-lg"
            />
            <Link
              to="/password_recovery"
              className="absolute top-1/2 right-3 -translate-y-1/2 text-sm sm:text-md text-gray-400 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold cursor-pointer"
          >
            Log In
          </button>

          {/* Role Dropdown */}
          <div className="relative">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 appearance-none text-white focus:outline-none"
            >
              <option className="text-black" value="Admin">
                Admin
              </option>
              <option className="text-black" value="Supervisor">
                Supervisor
              </option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </form>
      </div>
    </div>
  );
}
