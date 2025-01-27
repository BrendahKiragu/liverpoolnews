import React from "react";
import Header from "@/component/header";
import Footer from "@/component/footer";

export default async function Home() {
  const apiKey = process.env.NEWS_API_KEY;
  const url = `https://newsapi.org/v2/everything?q=anfield&lfc&arne+slot&language=en&apiKey=${apiKey}`;

  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      console.error(`Failed to fetch news: ${response.statusText}`);
      return <p>News feed is currently under maintenance. Come back later.</p>;
    }

    const data = await response.json();

    const feed = data.articles || [];
    feed.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)); //Sorted by most recent update date-wise

    return (
      <div className="min-h-screen bg-[#DC0714] text-white font-sans">
        <Header />

        <main className="p-4">
          <h3 className="bg-white text-red-700 text-2xl mb-4 rounded text-center font-lobster ">
            Latest News
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {feed.length > 0 ? (
              feed.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#DC0714] hover:bg-red-700 border-b-2 border-white mb-1 text-white rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
                >
                  {item.urlToImage && (
                    <img
                      src={item.urlToImage}
                      alt={item.title}
                      className="w-full h-50 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <p className="text-sm text-gray-200">{item.publishedAt}</p>
                    <h3 className="text-lg font-bold mt-2">
                      <a
                        href={item.url}
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
              <div className="p-4">
                <p className="text-sm text-gray-200">Hello</p>
                <h3 className="text-lg font-bold mt-2">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    news here
                  </a>
                </h3>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error("Error fetching news:", error);
    return (
      <div className="p-4">
        <p className="text-sm text-gray-200">Hello</p>
        <h3 className="text-lg font-bold mt-2">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            news here
          </a>
        </h3>
      </div>
    );
  }
}
