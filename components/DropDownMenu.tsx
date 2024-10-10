import Link from "next/link";

function DropdownMenu() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:hidden">
      <div className="flex space-x-4">
        <Link
          href="/"
          className="text-gray-400 hover:text-gray-900 font-poppins pr-3 text-sm"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-gray-400 hover:text-gray-900 font-poppins pr-3  text-sm"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-gray-400 hover:text-gray-900 font-poppins pr-3 text-sm"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default DropdownMenu;
