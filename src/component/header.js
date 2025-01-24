import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="bg-[#DC0714] text-white font-sans">
        <header className="flex flex-col items-center justify-center py-8">
          <Image
            src="/headerlogo.png"
            alt="Liverpool FC Logo"
            className="w-8 h-8 mb-4"
            width={100}
            height={100}
          />
          <h1 className="text-4xl font-bold">
            Welcome to Liverpool FC Updates
          </h1>
          <p className="text-xl mt-2">You'll Never Walk Alone</p>

          <nav className="mt-6">
            <ul className="flex gap-6 text-lg">
              <li>
                <a href="/" className="hover:underline text-white">
                  Team News
                </a>
              </li>
              <li>
                <a href="/players" className="hover:underline text-white">
                  Players
                </a>
              </li>
              <li>
                <a href="/fixtures" className="hover:underline text-white">
                  Fixtures
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
