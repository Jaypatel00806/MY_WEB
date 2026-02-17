import { motion } from "framer-motion";

export default function AdminPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="p-8 flex-1 dark:bg-gray-900 dark:text-white"
    >
      <h1 className="text-4xl font-bold mb-4">Admin Panel</h1>
      <p>Manage users, stats, and system settings.</p>
    </motion.div>
  );
}
