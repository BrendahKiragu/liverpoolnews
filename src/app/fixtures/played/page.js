"use client";
import React, { useEffect, useState } from "react";
import Header from "@/component/header";
import Footer from "@/component/footer";

export default function Played() {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const finishedFixtures = async () => {
      try {
        const res = await fetch("/api/fixs");
        const data = await res.json();

        const currentDateTime = new Date();

        // Filter upcoming fixtures
        const playedFixtures = data.matches
          .filter((match) => new Date(match.utcDate) < currentDateTime)
          .sort((a, b) => new Date(b.utcDate) - new Date(a.utcDate)); // Sort by date ascending

        setFixtures(playedFixtures || []);
      } catch (error) {
        console.error("Error fetching played fixtures:", error);
      } finally {
        setLoading(false);
      }
    };

    finishedFixtures();
  }, []);

  // Group the played fixtures by month
  const groupedFixtures = fixtures.reduce((acc, match) => {
    const matchMonth = new Date(match.utcDate).toLocaleDateString("en-GB", {
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
        <p className="text-lg font-medium">Loading Played Fixtures ⚽⚽⚽</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <h2 className="text-xl font-bold text-[#DC0714] text-center mb-8 relative z-10">
          ✅Finished Premier League & Champions League Matches✅
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
                      <span className="flex items-center text-sm">
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
                      {/* <span className="text-sm bg-gray-300 p-1 mx-2">
                        Referee:
                        {match.referees?.[0].name || "No Referee"}
                      </span> */}
                      ✅
                    </p>

                    <div className="flex items-center sm:mt-2 justify-between">
                      {/* teams */}
                      <div className="flex items-center justify-between mx-auto">
                        <img
                          src={match.homeTeam.crest}
                          alt={match.homeTeam.name}
                          className="w-10 h-10"
                        />
                        <span className="text-sm">{match.homeTeam.name}</span>

                        <span className="text-md font-medium bg-gray-300 p-1 mx-2">
                          {match.score.fullTime.home} -{" "}
                          {match.score.fullTime.away}
                        </span>

                        <img
                          src={match.awayTeam.crest}
                          alt={match.awayTeam.name}
                          className="w-10 h-10"
                        />
                        <span className="text-sm">{match.awayTeam.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <div className="bg-[#DC0714] text-white]">
        <Footer />
      </div>
    </div>
  );
}
