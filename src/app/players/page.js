"use client";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Header from "@/component/header";
import Footer from "@/component/footer";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayerStats = async () => {
      try {
        const res = await fetch("/api/stats");
        const data = await res.json();
        setPlayers(data.squad || []);
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

  return (
    <div className="min-h-screen bg-[#DC0714] text-white font-sans">
      <Header />
      <h2 className="text-2xl font-bold text-center">Liverpool FC Players</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 p-4">
        {players.length > 0 ? (
          players.map((player) => (
            <div
              key={player.id}
              className="bg-[#DC0714] hover:bg-red-700 border-b-2 border-l-2 border-r-2 border-white mb-1 text-white rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden flex flex-col justify-between"
            >
              <div className="p-4">
                <h3 className="font-bold text-lg">{player.name}</h3>
                <p>Position: {player.position}</p>
                <p>Nationality: {player.nationality}</p>
              </div>

              <p className="mt-4 text-center text-lg font-semibold">
                Click here to see more stats{" "}
                <a
                  href="https://www.liverpoolfc.com/team/mens"
                  target="_blank"
                  className="flex items-center justify-end p-4 mt-auto text-white hover:opacity-80"
                >
                  <FaArrowRight className="text-white" />
                </a>
              </p>
            </div>
          ))
        ) : (
          <>
            <p>No players available</p>
            <p className="mt-4 text-center text-lg font-semibold">
              Click here to see more stats{" "}
              <a
                href="https://www.liverpoolfc.com/team/mens"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity duration-200"
              >
                <img
                  src="/logo.webp"
                  alt="Liverpool FC Logo"
                  className="w-12 h-auto inline-block mx-1 align-middle"
                />
              </a>
            </p>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Players;
