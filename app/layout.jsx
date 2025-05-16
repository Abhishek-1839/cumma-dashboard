import './globals.css';

export const metadata = {
  title: 'Cumma Dashboard',
  description: 'Admin interface for managing bookings',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}

