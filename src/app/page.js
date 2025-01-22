import React from "react";
import Header from "@/component/header";
import Footer from "@/component/footer";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/news", {
    cache: "no-store",
  });
  const feed = await response.json();

  return (
    <>
      <div className="min-h-screen bg-[#DC0714] text-white font-sans">
        <Header />

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
                      className="w-full h-50 object-cover"
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
