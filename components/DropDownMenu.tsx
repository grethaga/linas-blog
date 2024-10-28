import Link from "next/link";
import Socials from "./Socials";
import { usePathname } from "next/navigation";

export default function DropdownMenu() {
  const pathname = usePathname();

  return (
    <div>
      <div className="flex flex-col gap-10 font-poppins text-lg pt-10 items-center">
        <Link
          href="/"
          className={`${
            pathname === "/"
              ? "text-customColor font-bold hover:text-orange-600"
              : "text-gray-400 hover:text-gray-900"
          } `}
        >
          Home
        </Link>
        <Link
          href="/posts"
          className={`${
            pathname === "/posts"
              ? "text-customColor font-bold hover:text-orange-600"
              : "text-gray-400 hover:text-gray-900"
          } `}
        >
          Articles
        </Link>
        <Link
          href="/about"
          className={`${
            pathname === "/about"
              ? "text-customColor font-bold hover:text-orange-600"
              : "text-gray-400 hover:text-gray-900"
          } `}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`${
            pathname === "/contact"
              ? "text-customColor font-bold "
              : "text-gray-400 hover:text-gray-900"
          } `}
        >
          Contact
        </Link>
      </div>
      <div className="pt-20">
        <Socials />
      </div>
    </div>
  );
}
