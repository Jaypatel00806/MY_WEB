import { useEffect, useState } from "react";
import axios from "axios";

export default function UserBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:3001/bookings")
      .then(res => setBookings(res.data));
  }, []);

  return (
    <div>
      <h2>My Bookings</h2>

      {bookings.map(b => (
        <div key={b.id}>
          {b.pickup} → {b.drop} ({b.status})
        </div>
      ))}
    </div>
  );
}