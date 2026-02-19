import { useState } from "react";

export default function PassengerStep({ next }) {
  const [form, setForm] = useState({});

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Passenger Details</h2>

      <input className="border p-2 w-full mb-2"
        placeholder="Name"
        onChange={e=>setForm({...form,name:e.target.value})}
      />

      <input className="border p-2 w-full mb-2"
        placeholder="Phone"
        onChange={e=>setForm({...form,phone:e.target.value})}
      />

      <input className="border p-2 w-full mb-2"
        placeholder="Email"
        onChange={e=>setForm({...form,email:e.target.value})}
      />

      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded"
        onClick={() => next(form)}
      >
        Continue
      </button>
    </div>
  );
}
