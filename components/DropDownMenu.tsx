import Link from "next/link";
import Socials from "./Socials";

function DropdownMenu() {
  return (
    <div>
      <div className="flex flex-col gap-10 font-poppins text-lg pt-10 items-center">
        <Link href="/" className="text-gray-400 hover:text-gray-900">
          Home
        </Link>
        <Link href="/about" className="text-gray-400 hover:text-gray-900">
          Articles
        </Link>
        <Link href="/about" className="text-gray-400 hover:text-gray-900">
          About
        </Link>
        <Link href="/contact" className="text-gray-400 hover:text-gray-900 ">
          Contact
        </Link>
      </div>
      <div className="pt-20">
        <Socials />
      </div>
    </div>
  );
}

export default DropdownMenu;
