
export function Topbar() {
  return (
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-3 py-1"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Logout</button>
      </div>
    </header>
  );
}
