import React from "react";
import Footer from "@/component/footer";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/news", {
    cache: "no-store",
  });
  const feed = await response.json();

  return (
    <>
      <div className="min-h-screen bg-[#DC0714] text-white font-sans">
        <header className="flex flex-col items-center justify-center py-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png"
            alt="Liverpool FC Logo"
            className="w-32 mb-4"
          />
          <h1 className="text-4xl font-bold">
            Welcome to Liverpool FC Updates
          </h1>
          <p className="text-xl mt-2">You'll Never Walk Alone</p>

          <nav className="mt-6">
            <ul className="flex gap-6 text-lg">
              <li>
                <a href="/news" className="hover:underline text-white">
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

        {/* Headlines Section */}
        <main className="p-4">
          <button className="text-md font-bold mb-2 p-2 w-auto rounded-full bg-[#b71515]">
            Latest News
          </button>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {feed.length > 0 ? (
              feed.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#DC0714] hover:bg-red-700 border-b-2 border-white mb-1 text-white rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <p className="text-sm text-gray-200">{item.pubDate}</p>
                    <h3 className="text-lg font-bold mt-2">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {item.title}
                      </a>
                    </h3>
                  </div>
                </div>
              ))
            ) : (
              <p>No news available at the moment.</p>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
