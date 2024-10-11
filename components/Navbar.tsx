"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faXmark } from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from "./DropDownMenu";
import { useState } from "react";

export default function Navbar() {
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
            <div className="flex space-x-4">
              <Link
                href="/"
                className={`text-gray-400 hover:text-gray-900 font-poppins px-3 py-2`}
              >
                Home
              </Link>
              <Link
                href="/"
                className="text-gray-400 hover:text-gray-900 font-poppins px-3 py-2"
              >
                Articles
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-gray-900 font-poppins px-3 py-2"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-gray-900 font-poppins px-3 py-2"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="flex sm:hidden">
            <button className="cursor-pointer" onClick={toggleMenu}>
              <FontAwesomeIcon
                icon={isMenuOpen ? faXmark : faStar}
                size="2x"
                style={{
                  color: isMenuOpen ? "#1F2937" : "#facc15",
                  transition: "transform 0.3s ease, color 0.2s ease",
                }}
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`absolute w-full h-full bg-neutral-100 sm:hidden transform transition-transform ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ transition: "transform 0.3s ease-in-out, opacity 0.3s ease" }}
      >
        <DropdownMenu />
      </div>
    </nav>
  );
}
