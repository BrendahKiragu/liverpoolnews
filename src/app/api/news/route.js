export async function GET(request) {
  const apiKey = process.env.NEWS_API_KEY; // Get the API key from environment variables

  // Check if the API key exists
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "API Key is missing" }), {
      status: 500,
    });
  }

  const url = `https://newsapi.org/v2/everything?q=Liverpool+FC&language=en&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch news.");
    }

    // Sort articles by date, latest first
    const sortedNews = data.articles.sort(
      (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    );

    // Map news data to match frontend needs
    const news = sortedNews.map((article) => ({
      title: article.title,
      link: article.url,
      pubDate: article.publishedAt,
      image: article.urlToImage,
    }));

    return new Response(JSON.stringify(news), { status: 200 });
  } catch (error) {
    console.error("Error fetching news:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch news: " + error.message }),
      { status: 500 }
    );
  }
}
