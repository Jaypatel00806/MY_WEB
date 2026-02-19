export default function ReviewStep({ data, next }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Review Booking</h2>

      <p>Pickup: {data.pickup}</p>
      <p>Drop: {data.drop}</p>
      <p>Vehicle: {data.vehicle?.name}</p>
      <p>Price: ₹{data.vehicle?.price}</p>
      <p>Name: {data.name}</p>

      <button
        className="bg-green-600 text-white px-4 py-2 mt-4 rounded"
        onClick={() => next({})}
      >
        Confirm Booking
      </button>
    </div>
  );
}
