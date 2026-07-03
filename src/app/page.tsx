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
        <button className="btn">Bądź na bieżąco</button>
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
