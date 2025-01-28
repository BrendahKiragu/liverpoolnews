import React from "react";
import Header from "@/component/header";
import Footer from "@/component/footer";

const newsItems = [
  {
    image: "/anfield.jpg",
    title: "Liverpool FC wins the Premier League",
    publishedAt: "2025-03-01",
    url: "#",
  },
  {
    image: "/player.jpeg",
    title: "Virgil Van Dijk “Proud” Of 300 Appearances For Liverpool",
    publishedAt: "2025-02-02",
    url: "#",
  },
  {
    image: "/anfield.jpg",
    title:
      "Premier League round-up: Cody Gapko double keeps Liverpool well clear of the pack",
    publishedAt: "2025-01-28",
    url: "#",
  },
  {
    image: "/player.jpeg",
    title: "Liverpool 4, Ipswich 1 - Match Recap: An Easy Win at Anfield",
    publishedAt: "01/20/2025",
    url: "#",
  },
  {
    image: "/anfield.jpg",
    title: "One year after Jurgen Klopp's exit news, how have Liverpool coped?",
    publishedAt: "01/05/2025",
    url: "#",
  },
];

const News = () => {
  return (
    <div className="min-h-screen bg-[#DC0714] text-white font-sans">
      <Header />
      <main className="p-4">
        <h3 className="bg-white text-red-700 text-2xl mb-4 rounded text-center">
          Latest News
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#DC0714] hover:bg-red-700 border-b-2 border-white mb-1 text-white rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 object-cover"
                />
              )}
              <div className="p-4">
                <p className="text-sm text-gray-200">
                  {new Date(item.publishedAt).toLocaleDateString()}
                </p>
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
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;
