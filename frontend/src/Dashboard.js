import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import DarkToggle from "./DarkToggle";
import { useNavigate } from "react-router-dom";
import BookingFlow from "./booking/BookingFlow";

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen dark:bg-gray-900 dark:text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-1 p-8 bg-gray-100 dark:bg-gray-900"
      >
        {/* Top Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-600 dark:text-white">
            Transportation Dashboard
          </h1>

          <div className="flex gap-3">
            <DarkToggle />

            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Welcome */}
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Welcome back 👋 Manage your transport bookings below.
        </p>

        {/* 🚀 Booking Flow */}
        <BookingFlow />
      </motion.div>
    </div>
  );
}
