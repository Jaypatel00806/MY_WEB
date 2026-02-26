import { useEffect, useState } from "react";
import axios from "axios";
import BookingApproval from "./BookingApproval";

export default function LiveBookings() {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const fetchBookings = async () => {
    const res = await axios.get("http://127.0.0.1:3001/bookings");
    setBookings(res.data);
  };

  useEffect(() => {
    fetchBookings();
    const interval = setInterval(fetchBookings, 3000);
    return () => clearInterval(interval);
  }, []);

  const total = bookings.length;
  const approved = bookings.filter(b => b.status === "Approved").length;
  const pending = bookings.filter(b => b.status !== "Approved").length;

  const filteredBookings = bookings.filter((b) => {
    const matchSearch =
      b.customerName?.toLowerCase().includes(search.toLowerCase()) ||
      b.pickup?.toLowerCase().includes(search.toLowerCase()) ||
      b.drop?.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      filter === "All" ? true : b.status === filter;

    return matchSearch && matchFilter;
  });

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">

      <h2 className="text-2xl font-bold mb-4">
        🚕 Admin Dashboard
      </h2>

      {/* ===== STATS ===== */}
      <div className="grid grid-cols-3 gap-4 mb-6">

        <div className="bg-black text-white p-4 rounded-xl">
          <p>Total Bookings</p>
          <h3 className="text-3xl font-bold">{total}</h3>
        </div>

        <div className="bg-yellow-400 p-4 rounded-xl">
          <p>Pending</p>
          <h3 className="text-3xl font-bold">{pending}</h3>
        </div>

        <div className="bg-green-500 text-white p-4 rounded-xl">
          <p>Approved</p>
          <h3 className="text-3xl font-bold">{approved}</h3>
        </div>

      </div>

      {/* ===== SEARCH + FILTER ===== */}
      <div className="flex gap-3 mb-6">
        <input
          placeholder="Search bookings..."
          className="flex-1 border p-3 rounded-xl"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-3 rounded-xl"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Pending</option>
          <option>Approved</option>
        </select>
      </div>

      {/* ===== BOOKINGS ===== */}
      {filteredBookings.map((b) => (
        <div
          key={b.id}
          className="bg-gray-50 p-4 mb-3 rounded-xl shadow-sm"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-lg">{b.customerName}</h3>

            <span
              className={
                b.status === "Approved"
                  ? "bg-green-100 text-green-700 px-3 py-1 rounded-full"
                  : "bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full"
              }
            >
              {b.status}
            </span>
          </div>

          <p><b>Pickup:</b> {b.pickup}</p>
          <p><b>Drop:</b> {b.drop}</p>
          <p><b>Vehicle:</b> {b.vehicle}</p>

          {b.status !== "Approved" && (
            <div className="mt-3">
              <BookingApproval id={b.id} />
            </div>
          )}
        </div>
      ))}

    </div>
  );
}