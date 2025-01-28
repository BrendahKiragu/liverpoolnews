"use client";
import React, { useEffect, useState } from "react";
import Header from "@/component/header";
import Footer from "@/component/footer";

const Fixtures = () => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        const res = await fetch("/api/fixs");
        const data = await res.json();

        const currentDateTime = new Date();

        // Filter upcoming fixtures
        const upcomingFixtures = data.matches
          .filter((match) => new Date(match.utcDate) > currentDateTime)
          .sort((a, b) => new Date(a.utcDate) - new Date(b.utcDate)); // Sort by date ascending

        setFixtures(upcomingFixtures || []);
      } catch (error) {
        console.error("Error fetching fixtures:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFixtures();
  }, []);

  // Group fixtures by month
  const groupedFixtures = fixtures.reduce((acc, match) => {
    const matchMonth = new Date(match.utcDate).toLocaleString("en-GB", {
      month: "long",
      year: "numeric",
    });

    if (!acc[matchMonth]) {
      acc[matchMonth] = [];
    }
    acc[matchMonth].push(match);
    return acc;
  }, {});

  if (loading) {
    return (
      <div className="bg-[#DC0714 text-white text-center py-4">
        <p className="text-lg font-medium">Loading fixtures...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header />
      <main className="p-6">
        <h2 className="text-3xl font-bold text-[#DC0714] text-center mb-8 relative z-10">
          Upcoming Matches
        </h2>
        <img src="/anfield.jpg" className="w-full h-auto" />

        <div className="space-y-12">
          {Object.entries(groupedFixtures).map(([month, matches]) => (
            <div key={month}>
              <h3 className="text-2xl font-bold text-center bg-[#DC0714] mb-4">
                {month}
              </h3>
              <div className="space-y-6">
                {matches.map((match) => (
                  <div
                    key={match.id}
                    className="bg-white text-black p-4 rounded shadow-2xl"
                  >
                    {/* league */}
                    <p className="text-gray-700 font-bold flex items-center">
                      <span className="flex items-center">
                        <img
                          src={match.competition.emblem}
                          alt={match.competition.name}
                          className="w-14 h-14 mr-4"
                        />
                      </span>
                      {new Date(match.utcDate).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        weekday: "short",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>

                    <div className="flex items-center sm:mt-2 justify-between">
                      {/* teams */}
                      <div className="flex items-center justify-between mx-auto">
                        <img
                          src={match.homeTeam.crest}
                          alt={match.homeTeam.name}
                          className="w-10 h-10"
                        />
                        <span>{match.homeTeam.name}</span>

                        <span className="text-lg font-medium bg-gray-300 p-1 mx-2">
                          {new Date(match.utcDate).toLocaleTimeString("en-GB", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                        <img
                          src={match.awayTeam.crest}
                          alt={match.awayTeam.name}
                          className="w-10 h-10"
                        />
                        <span>{match.awayTeam.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <div className="bg-[#DC0714] text-white">
        <Footer />
      </div>
    </div>
  );
};

export default Fixtures;
