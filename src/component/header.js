"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="bg-[#DC0714] text-white">
        <header className="flex flex-col items-center font-oswald justify-center py-8">
          <Image
            src="/headerlogo.png"
            alt="Liverpool FC Logo"
            className="w-8 h-8 mb-4"
            width={100}
            height={100}
          />
          <h1 className="text-9xl font-semibold ">Welcome to Liverpoolnews</h1>
          <p className="text-xl mt-4">You'll Never Walk Alone</p>

          <nav className="mt-4">
            <ul className="flex gap-6 text-lg">
              <li>
                <Link
                  className={`${
                    pathname === "/"
                      ? "underline font-bold decoration-white"
                      : ""
                  }`}
                  href="/"
                >
                  Team News
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathname === "/players"
                      ? "underline font-bold decoration-white"
                      : ""
                  }`}
                  href="/players"
                >
                  Players
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathname === "/fixtures"
                      ? "underline font-bold decoration-white"
                      : ""
                  }`}
                  href="/fixtures"
                >
                  Fixtures
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
