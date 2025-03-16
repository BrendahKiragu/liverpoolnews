import prisma from "../../../../lib/prisma";

export async function GET(request) {
  try {
    // Fetch players' data from the database
    const players = await prisma.players.findMany();
    const legends = await prisma.legends.findMany(); // Fetch legends data

    // Check if data exists
    if (
      (!players || players.length === 0) &&
      (!legends || legends.length === 0)
    ) {
      return new Response(
        JSON.stringify({ error: "No players or legends found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Return the players and legends data as JSON
    return new Response(JSON.stringify({ players, legends }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
