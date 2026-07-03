import { getArticleBySlug, getArticleSlugs } from "../../../lib/api";
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  try {
    const article = getArticleBySlug(slug);
    return {
      title: `${article.title} | AI Hub`,
      description: article.excerpt,
    };
  } catch {
    return {
      title: "Artykuł nie znaleziony",
    };
  }
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  
  let article;
  try {
    article = getArticleBySlug(slug);
  } catch (e) {
    notFound();
  }

  return (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <article style={{ padding: '3rem 0' }}>
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: 'var(--radius-xl)', marginBottom: '2rem' }} 
        />
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: '1.2' }}>{article.title}</h1>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '0.9rem' }}>
          <span>{article.date}</span>
          <span style={{ padding: '0.25rem 0.75rem', backgroundColor: 'var(--surface-border)', borderRadius: 'var(--radius-full)' }}>
            {article.tag}
          </span>
        </div>

        <div className="article-body" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>

        {/* E-book Banner */}
        <div style={{ marginTop: '4rem', padding: '2.5rem', backgroundColor: 'var(--surface)', borderLeft: '5px solid var(--primary)', borderRadius: 'var(--radius-lg)', display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <img src="/images/ebook_cover.png" alt="E-book" style={{ width: '150px', borderRadius: 'var(--radius-sm)' }} />
          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Chcesz wejść na wyższy poziom? 🚀</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Pobierz nasz E-book "Prompt Engineering 101" i naucz się jak wykorzystać 100% możliwości sztucznej inteligencji w biznesie.</p>
            <a href="#" className="btn">Kup teraz za 29 PLN</a>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '1rem' }}>(Podmień '#' na link do kasy)</span>
          </div>
        </div>
      </article>

      {/* AdSense Placeholder */}
      <div style={{ margin: '4rem 0', padding: '2rem', textAlign: 'center', backgroundColor: 'var(--surface)', border: '1px dashed var(--text-muted)', borderRadius: 'var(--radius-lg)' }}>
        <p style={{ color: 'var(--text-muted)' }}>MIEJSCE NA REKLAMĘ (np. Google AdSense)</p>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Wklej kod reklamy w pliku src/app/artykul/[slug]/page.tsx</p>
      </div>
    </div>
  );
}
