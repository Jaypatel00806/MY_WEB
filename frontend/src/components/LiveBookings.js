import { useEffect, useState } from "react";
import axios from "axios";

export default function LiveBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:3001/bookings")
      .then(res => setBookings(res.data));
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Live Bookings</h2>

      {bookings.map(b => (
        <div key={b.id} className="border p-2 mb-2 rounded">
          {b.customerName} — {b.vehicle} — 
          <span className="text-indigo-600"> {b.status}</span>
        </div>
      ))}
    </div>
  );
}
