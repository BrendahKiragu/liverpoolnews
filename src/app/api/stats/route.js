import prisma from "../../../../lib/prisma";

export async function GET(request) {
  try {
    // Fetch players' data from the database
    const players = await prisma.players.findMany();

    // Return a 404 if no players are found
    if (!players || players.length === 0) {
      return new Response(JSON.stringify({ error: "No players found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Return the players' data as JSON
    return new Response(JSON.stringify(players), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching players:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
