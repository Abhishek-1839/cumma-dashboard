
export function BookingsTable() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="mb-4 font-semibold">Recent Bookings</h3>
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left bg-gray-100">
            <th className="p-2">Customer</th>
            <th className="p-2">Facility</th>
            <th className="p-2">Date</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">John Doe</td>
            <td className="p-2">Gym Hall</td>
            <td className="p-2">2025-05-10</td>
            <td className="p-2 text-green-600">Confirmed</td>
          </tr>
          <tr>
            <td className="p-2">Jane Smith</td>
            <td className="p-2">Swimming Pool</td>
            <td className="p-2">2025-05-12</td>
            <td className="p-2 text-red-500">Cancelled</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
