export default function ConfirmationStep() {
  return (
    <div className="text-center p-6">
      <h2 className="text-3xl font-bold text-green-600 mb-3">
        🎉 Booking Confirmed
      </h2>

      <p className="text-gray-600">
        Your transport is booked successfully.
      </p>

      <p className="mt-2 text-indigo-600 font-semibold">
        Wait for Admin Approval
      </p>
    </div>
  );
}