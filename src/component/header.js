"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Header = () => {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <div className="bg-[#DC0714] text-white">
      <header className="flex flex-col items-center font-oswald justify-center py-8">
        <Image
          src="/headerlogo.png"
          alt="Liverpool FC Logo"
          className="w-8 h-8 mb-4"
          width={100}
          height={100}
        />
        <h1 className="text-xl font-semibold">Welcome to Liverpoolnews</h1>
        <p className="text-xl mt-4">You'll Never Walk Alone</p>

        <nav className="mt-4">
          <ul className="flex gap-6 text-lg">
            {[
              {
                name: "Team News",
                links: [
                  { href: "/", label: "Current News" },
                  { href: "/", label: "Transfers" },
                ],
                key: "teamNews",
              },
              {
                name: "Players",
                links: [
                  { href: "/players", label: "Current Squad" },
                  { href: "/playerss", label: "Legends" },
                ],
                key: "players",
              },
              {
                name: "Fixtures",
                links: [
                  { href: "/fixtures", label: "Upcoming Fixtures" },
                  { href: "/fixtures/played", label: "Played" },
                ],
                key: "fixtures",
              },
            ].map((item) => (
              <li key={item.key} className="relative">
                {/* Main Nav Button */}
                <button
                  className="px-6 py-2 rounded-md font-bold"
                  onClick={() => toggleDropdown(item.key)}
                >
                  {item.name}
                </button>

                {/* Modal Dropdown */}
                {activeDropdown === item.key && (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={() => setActiveDropdown(null)} // Click outside to close
                  >
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="w-[75%] max-w-lg bg-white text-[#DC0714] rounded-lg shadow-xl border border-gray-200 p-6"
                      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >
                      {item.links.map((link, index) => (
                        <li key={index}>
                          <Link
                            href={link.href}
                            className="block px-6 py-3 text-sm font-medium text-center hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
