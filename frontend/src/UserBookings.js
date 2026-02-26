import { useEffect, useState } from "react";
import axios from "axios";

export default function UserBookings() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    const userId = localStorage.getItem("userId");

    const res = await axios.get(
      `http://127.0.0.1:3001/bookings/user/${userId}`
    );

    setBookings(res.data);
  };

  useEffect(() => {
    fetchBookings();
    const interval = setInterval(fetchBookings, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="text-xl font-bold mb-4">My Bookings</h2>

      {bookings.map((b) => (
        <div key={b.id} className="border p-3 mb-2 rounded">
          <p><b>{b.pickup}</b> → {b.drop}</p>

          <span
            className={
              b.status === "Approved"
                ? "text-green-600 font-bold"
                : "text-orange-500 font-bold"
            }
          >
            {b.status}
          </span>
        </div>
      ))}
    </div>
  );
}