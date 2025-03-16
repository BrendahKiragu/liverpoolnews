"use client";
import React, { useEffect, useState } from "react";
import Header from "@/component/header";
import Footer from "@/component/footer";
import { FaArrowRight } from "react-icons/fa";

function junior() {
  const [juniors, setjuniors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchjuniorStats = async () => {
      try {
        const res = await fetch("/api/stats");
        const data = await res.json();

        // Ensure we are setting only the juniors
        setjuniors(data.legends || []);

        console.log("Fetched juniors:", data.juniors);
      } catch (error) {
        console.error("Error fetching junior stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchjuniorStats();
  }, []);

  if (loading) {
    return (
      <p className="bg-[#DC0714] text-center py-4 text-white">
        Loading liverpool juniors stats...
      </p>
    );
  }

  if (!juniors || juniors.length === 0) {
    return (
      <div className="min-h-screen bg-white text-black font-sans">
        <Header />
        <p className="text-center py-10">
          junior stats are currently unavailable. Please check back later.
        </p>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header />
      <h2 className="text-2xl font-bold text-center py-6">
        Liverpool FC Junior Team
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 p-4">
        {juniors.map((junior) => (
          <div
            key={junior.id}
            className="bg-white hover:bg-[#DC0714] hover:text-white border-2 border-[#F0F0F0] rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 overflow-hidden flex flex-col"
          >
            <div className="relative">
              <img
                src={junior.image || "/placeholder.jpg"} // Fallback image
                alt={junior.name}
                className="w-full h-auto object-cover rounded-t-lg"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 w-full py-2 text-center">
                <h3 className="text-white font-semibold text-lg">
                  {junior.name}
                </h3>
              </div>
            </div>
            <div className="p-6 flex flex-col justify-between">
              <p className="text-xl">
                <span className="font-semibold">Position:</span>{" "}
                {junior.position}
              </p>
              <p className="text-xl">
                <span className="font-semibold">Nationality:</span>{" "}
                {junior.nationality}
              </p>
              <p className="mt-4 text-center text-lg font-semibold mb-6">
                Click here to see more stats
                <a
                  href="https://www.liverpoolfc.com/team/academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2 mt-3 text-[#DC0714] hover:text-[#800000] transition-colors"
                >
                  <FaArrowRight className="text-black" />
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#DC0714] text-white">
        <Footer />
      </div>
    </div>
  );
}

export default junior;
