
import { Sidebar } from "@/components/dashboard/sidebar";
import { Topbar } from "@/components/dashboard/topbar";
import { BarChart } from "@/components/dashboard/charts/BarChart";
import { PieChart } from "@/components/dashboard/charts/PieChart";
import { BookingsTable } from "@/components/dashboard/BookingsTable";

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <Topbar />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-green-100 p-4 rounded">
            <h3 className="text-sm text-gray-700">Total Bookings</h3>
            <p className="text-2xl font-bold text-green-800">300</p>
          </div>
          <div className="bg-blue-100 p-4 rounded">
            <h3 className="text-sm text-gray-700">Total Earnings</h3>
            <p className="text-2xl font-bold text-blue-800">$140,000</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded">
            <h3 className="text-sm text-gray-700">Confirmed Bookings</h3>
            <p className="text-2xl font-bold text-yellow-800">120</p>
          </div>
          <div className="bg-red-100 p-4 rounded">
            <h3 className="text-sm text-gray-700">Cancelled / Refunded</h3>
            <p className="text-2xl font-bold text-red-800">21</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="mb-2 font-semibold">Total Bookings</h3>
            <BarChart />
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="mb-2 font-semibold">Booking Status</h3>
            <PieChart />
          </div>
        </div>

        <BookingsTable />
      </main>
    </div>
  );
}
