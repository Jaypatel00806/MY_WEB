import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import DarkToggle from "./DarkToggle";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex dark:bg-gray-900 dark:text-white">
      <Sidebar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-1 p-8"
      >
        <div className="flex justify-between mb-6">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <DarkToggle />
        </div>

        <p className="mb-6">Welcome back 👋</p>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </motion.div>
    </div>
  );
}
