"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import DropdownMenu from "./DropDownMenu";
import { useState } from "react";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
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
            <div className="flex space-x-4">
              <Link
                href="/"
                className="text-gray-400 hover:text-gray-900 font-poppins px-3 py-2 text-sm"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-gray-900 font-poppins px-3 py-2 text-sm"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-gray-900 font-poppins px-3 py-2 text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="flex sm:hidden">
            <button className="cursor-pointer" onClick={toggleMenu}>
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-400 text-3xl"
              />
            </button>
          </div>
        </div>
      </div>
      {isActive && <DropdownMenu />}
    </nav>
  );
}
