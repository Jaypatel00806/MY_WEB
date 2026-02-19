export default function PaymentStep({ next }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Payment</h2>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => next({ paid: true })}
      >
        Pay Now
      </button>
    </div>
  );
}
