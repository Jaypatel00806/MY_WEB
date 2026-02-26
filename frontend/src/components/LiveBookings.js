import { useEffect, useState } from "react";
import axios from "axios";
import BookingApproval from "./BookingApproval";

export default function LiveBookings() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    const res = await axios.get("http://127.0.0.1:3001/bookings");
    setBookings(res.data);
  };

  useEffect(() => {
    fetchBookings();
    const interval = setInterval(fetchBookings, 3000); // auto refresh
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Live Bookings</h2>

      {bookings.map((b) => (
        <div key={b.id} className="border p-3 mb-2 rounded">
          <p><b>Name:</b> {b.customerName}</p>
          <p><b>Pickup:</b> {b.pickup}</p>
          <p><b>Drop:</b> {b.drop}</p>
          <p><b>Vehicle:</b> {b.vehicle}</p>

          <p
            className={
              b.status === "Approved"
                ? "text-green-600 font-bold"
                : "text-orange-500 font-bold"
            }
          >
            <b>Status:</b> {b.status}
          </p>

          {/* Approve Button */}
          {b.status !== "Approved" && (
            <BookingApproval id={b.id} />
          )}
        </div>
      ))}
    </div>
  );
}