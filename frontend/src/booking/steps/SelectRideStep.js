const rides = [
  { name: "Mini", price: 200, eta: "5 min" },
  { name: "Sedan", price: 350, eta: "3 min" },
  { name: "SUV", price: 500, eta: "7 min" },
];

export default function SelectRideStep({ next }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Select Ride</h2>

      {rides.map((r) => (
        <div
          key={r.name}
          className="border p-3 mb-2 rounded hover:bg-gray-100 cursor-pointer"
          onClick={() => next({ vehicle: r })}
        >
          {r.name} — ₹{r.price} — ETA {r.eta}
        </div>
      ))}
    </div>
  );
}
