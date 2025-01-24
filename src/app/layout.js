// app/layout.js
import "./globals.css"; // Include global CSS file

export const metadata = {
  title: "Liverpool News",
  description: "Stay up-to-date with Liverpool FC!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Pacifico&family=Dancing+Script&family=Cinzel:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
