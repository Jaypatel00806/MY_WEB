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
    <div className="flex h-screen overflow-hidden bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 fixed left-0 top-0 h-screen">
        <Sidebar />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-1 ml-64 overflow-y-auto p-8"
      >

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-700">
            Ride Booking
          </h1>

          <div className="flex gap-3">
            <DarkToggle />

            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Booking Flow */}
        <BookingFlow />

      </motion.div>
    </div>
  );
}