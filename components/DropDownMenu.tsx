import Link from "next/link";

function DropdownMenu() {
  return (
    <div className="flex flex-col gap-10 font-poppins text-lg pt-10 items-center">
      <Link href="/" className="text-gray-400 hover:text-gray-900">
        Home
      </Link>
      <Link href="/about" className="text-gray-400 hover:text-gray-900">
        About
      </Link>
      <Link href="/contact" className="text-gray-400 hover:text-gray-900 ">
        Contact
      </Link>
    </div>
  );
}

export default DropdownMenu;
