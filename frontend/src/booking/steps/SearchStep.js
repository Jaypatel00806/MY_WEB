import { useState } from "react";

export default function SearchStep({ next }) {
  const [form, setForm] = useState({});

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Search Ride</h2>

      <input className="border p-2 w-full mb-2"
        placeholder="Pickup location"
        onChange={e => setForm({...form,pickup:e.target.value})}
      />

      <input className="border p-2 w-full mb-2"
        placeholder="Drop location"
        onChange={e => setForm({...form,drop:e.target.value})}
      />

      <input className="border p-2 w-full mb-2"
        type="datetime-local"
        onChange={e => setForm({...form,date:e.target.value})}
      />

      <input className="border p-2 w-full mb-2"
        placeholder="Passengers"
        onChange={e => setForm({...form,passengers:e.target.value})}
      />

      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded"
        onClick={() => next(form)}
      >
        Search
      </button>
    </div>
  );
}
