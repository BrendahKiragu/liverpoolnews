import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="bg-[#DC0714] text-white font-cinzel">
        <header className="flex flex-col items-center justify-center py-8">
          <Image
            src="/headerlogo.png"
            alt="Liverpool FC Logo"
            className="w-8 h-8 mb-4"
            width={100}
            height={100}
          />
          <h1 className="text-4xl font-semibold font-dancing">
            Welcome to Liverpoolnews
          </h1>
          <p className="text-xl mt-4 font-roboto">You'll Never Walk Alone</p>

          <nav className="mt-4">
            <ul className="flex gap-6 text-lg">
              <li>
                <Link href="/" className="hover:underline text-white">
                  Team News
                </Link>
              </li>
              <li>
                <Link href="/players" className="hover:underline text-white">
                  Players
                </Link>
              </li>
              <li>
                <Link href="/fixtures" className="hover:underline text-white">
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
