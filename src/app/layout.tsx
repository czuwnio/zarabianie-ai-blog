import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI & Automation Hub | Najnowsze trendy i narzędzia",
  description: "Zarabiaj i oszczędzaj czas dzięki najnowszym narzędziom sztucznej inteligencji. Recenzje, poradniki, nowości.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className="header">
          <div className="container header-inner">
            <a href="/" className="logo">AI Hub</a>
            <nav className="nav-links">
              <a href="/" className="nav-link">Nowości</a>
              <a href="/narzedzia" className="nav-link">Narzędzia AI</a>
              <a href="/poradniki" className="nav-link">Poradniki</a>
            </nav>
          </div>
        </header>

        <main className="main-content">
          {children}
        </main>

        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} AI & Automation Hub. Wszelkie prawa zastrzeżone.</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
              Niektóre linki na tej stronie mogą być linkami afiliacyjnymi.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
