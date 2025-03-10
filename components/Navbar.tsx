"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { usePathname } from "next/navigation";
import NewMenu from "./NewMenu";

export default function Navbar({ showSubscribeButton = true }) {
  const pathname = usePathname();
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-6 pt-10 md:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <Link
              href="/"
              className="text-gray-800 font-cormorantGaramond text-2xl"
            >
              Lina's Blog
            </Link>
          </div>

          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-2">
              <div className="hidden sm:flex items-center">
                {showSubscribeButton && (
                  <button className="bg-customColor w-fit px-2 h-3/4 rounded-xl font-poppins text-white text-sm mr-5 hover:bg-orange-500">
                    <Link href={"/subscribe"}>subscribe</Link>
                  </button>
                )}
              </div>
              <Link
                href="/"
                className={`${
                  pathname === "/"
                    ? "text-customColor font-bold"
                    : "text-gray-400 hover:text-gray-900"
                } font-poppins px-3 py-2`}
              >
                Home
              </Link>
              <Link
                href="/posts"
                className={`${
                  pathname === "/posts"
                    ? "text-customColor font-bold"
                    : "text-gray-400 hover:text-gray-900"
                } font-poppins px-3 py-2`}
              >
                Articles
              </Link>
              <Link
                href="/about"
                className={`${
                  pathname === "/about"
                    ? "text-customColor font-bold"
                    : "text-gray-400 hover:text-gray-900"
                } font-poppins px-3 py-2`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`${
                  pathname === "/contact"
                    ? "text-customColor font-bold"
                    : "text-gray-400 hover:text-gray-900"
                } font-poppins px-3 py-2`}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="flex sm:hidden">
            {showSubscribeButton && (
              <button className="bg-customColor w-fit px-2 rounded-xl font-poppins text-white text-sm mr-5 hover:bg-orange-500">
                <Link href={"/subscribe"}>subscribe</Link>
              </button>
            )}
            <button className="cursor-pointer" onClick={toggleMenu}>
              <FontAwesomeIcon
                icon={isMenuOpen ? faXmark : faBars}
                size="2x"
                style={{
                  fontSize: "1.8rem",
                  transition: "transform 0.3s ease, color 0.2s ease",
                }}
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`absolute w-full h-full bg-neutral-100 sm:hidden transform transition-transform z-10 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ transition: "transform 0.3s ease-in-out, opacity 0.3s ease" }}
      >
        <NewMenu />
      </div>
    </nav>
  );
}
