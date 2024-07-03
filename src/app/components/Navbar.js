// app/components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link href="/" className="text-white hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/broadcast" className="text-white hover:text-gray-400">
            Broadcast
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
