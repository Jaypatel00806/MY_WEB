import axios from "axios";

export default function BookingApproval({ id }) {

  const approve = async () => {
    await axios.post(
      `http://127.0.0.1:3001/bookings/approve/${id}`
    );
    alert("Booking Approved");
  };

  return (
    <button
      onClick={approve}
      className="bg-green-600 text-white px-3 py-1 rounded"
    >
      Approve
    </button>
  );
}