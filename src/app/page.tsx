import { getAllArticles } from "../lib/api";

export default function Home() {
  const articles = getAllArticles();

  return (
    <div className="container">
      <section className="hero">
        <h1 className="hero-title">Zarabiaj więcej i pracuj mniej dzięki AI</h1>
        <p className="hero-subtitle">
          Odkryj najnowsze narzędzia sztucznej inteligencji, automatyzacje oraz strategie biznesowe, które pozwolą Ci zbudować nowoczesny pasywny dochód.
        </p>
      </section>

      {/* Sekcja Bestseller */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '3rem', borderRadius: 'var(--radius-xl)', border: '2px solid var(--primary)', display: 'flex', gap: '3rem', alignItems: 'center', marginBottom: '4rem', boxShadow: 'var(--shadow-lg)' }}>
        <img src="/images/database_cover.png" alt="Baza Mega-Promptów" style={{ width: '250px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }} />
        <div>
          <span className="article-tag" style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-sm)' }}>🔥 Narzędzie Premium</span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '1rem', color: 'var(--foreground)' }}>Baza Mega-Promptów AI (Katalog)</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>Oszczędź setki godzin pracy. Pobierz gotowy arkusz z najbardziej zaawansowanymi poleceniami do ChatGPT, Midjourney i Claude. Skopiuj, wklej, zarabiaj.</p>
          <a href="#" className="btn" style={{ padding: '1rem 2rem', fontSize: '1.2rem', display: 'inline-block' }}>Odbierz dostęp za jedyne 39 PLN</a>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>👉 (Podmień ten link '#' na swój link ze sklepu)</p>
        </div>
      </section>

      <section>
        <h2>Najnowsze artykuły</h2>
        <div className="articles-grid">
          {articles.map((article) => (
            <article key={article.slug} className="article-card">
              <img src={article.imageUrl} alt={article.title} className="article-image" />
              <div className="article-content">
                <span className="article-tag">{article.tag}</span>
                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>
                <div className="article-meta">
                  <span>{article.date}</span>
                  <a href={`/artykul/${article.slug}`}>Czytaj dalej &rarr;</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
