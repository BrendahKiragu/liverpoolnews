export async function GET() {
  try {
    const response = await fetch("http://api.football-data.org/v4/teams/64", {
      headers: {
        "X-Auth-Token": process.env.PLAYERS_API_KEY,
      },
    });

    if (!response.ok) {
      return new Response("Failed to fetch player stats", { status: 500 });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Error fetching player stats", { status: 500 });
  }
}
