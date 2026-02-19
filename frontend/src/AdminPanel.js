import LiveBookings from "./components/LiveBookings";
import DriverTracking from "./components/DriverTracking";

export default function AdminPanel() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        Transport Admin Panel
      </h1>

      <LiveBookings />
      <DriverTracking />
    </div>
  );
}
