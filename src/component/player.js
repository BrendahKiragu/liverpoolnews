"use client";
import React, { useEffect, useState } from "react";
import Header from "@/component/header";
import Footer from "@/component/footer";
import { FaArrowRight } from "react-icons/fa";

function Player() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayerStats = async () => {
      try {
        const res = await fetch("/api/stats");
        const data = await res.json();
        setPlayers(data.players || []);
        console.log("here are your players", data);
        console.log("HELLO");
      } catch (error) {
        console.error("Error fetching player stats:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlayerStats();
  }, []);

  if (loading) {
    return (
      <p className="bg-[#DC0714] text-center py-4">Loading player stats...</p>
    );
  }

  if (!players) {
    return (
      <div className="min-h-screen bg-white text-black font-sans">
        <Header />
        <p>Player stats are currently under maintenance. Come back later.</p>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header />
      <h2 className="text-2xl font-bold text-center">Liverpool FC Players</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 p-4">
        {players.length > 0 ? (
          players.map((player) => (
            <div
              key={player.id}
              className="bg-white hover:bg-[#DC0714] hover:text-white border-2 border-[#F0F0F0] rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 overflow-hidden flex flex-col"
            >
              <div className="relative">
                <img
                  src={player.image} // Replace with an actual player image source if available
                  alt={player.name}
                  className="w-full h-auto object-cover rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 w-full py-2 text-center">
                  <h3 className="text-white font-semibold text-lg">
                    {player.name}
                  </h3>
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between">
                <p className="text-xl">
                  <span className="font-semibold">Position:</span>{" "}
                  {player.position}
                </p>
                <p className="text-xl">
                  <span className="font-semibold">Nationality:</span>{" "}
                  {player.nationality}
                </p>
                <p className="mt-4 text-center text-lg font-semibold mb-6">
                  Click here to see more stats
                  <a
                    href="https://www.liverpoolfc.com/team/mens"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2 mt-3 text-[#DC0714] hover:text-[#800000] transition-colors"
                  >
                    <FaArrowRight className="text-black" />
                  </a>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No players available</p>
        )}
      </div>
      <div className="bg-[#DC0714] text-white">
        <Footer />
      </div>
    </div>
  );
}

export default Player;
