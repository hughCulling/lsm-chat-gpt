// app/layout.js
import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Live Stream Music</title>
      </head>
      <body>
        <Navbar />
        <header className="bg-gray-100 p-4 text-center">
          <h1 className="text-2xl font-bold">Live Stream Music</h1>
        </header>
        <main className="p-4">{children}</main>
        <footer className="bg-gray-100 p-4 text-center">
          <p>Author: Hugh Wilfred Culling</p>
          <p>hughculling@icloud.com</p>
        </footer>
      </body>
    </html>
  );
}
