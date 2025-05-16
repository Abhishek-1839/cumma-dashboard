
export function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Cumma Admin</h2>
      <ul className="space-y-5">
        <li><a href="#" className="text-red-500 font-semibold text-2xl">Dashboard</a></li>
        <li><a href="#">Bookings</a></li>
        <li><a href="#">Facilities</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </aside>
  );
}
