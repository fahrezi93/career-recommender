import React from 'react';
import './Blog.css';

interface Props {
  onBack: () => void;
}

const Blog: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1>Blog CareerGuide</h1>
          <p>Wawasan, tips, dan strategi terbaru untuk mengembangkan karir IT Anda</p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="featured-article-section">
        <div className="featured-article-container">
          <div className="featured-article">
            <div className="article-image">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                alt="Featured article" 
              />
              <div className="article-badge">Featured</div>
            </div>
            <div className="article-content">
              <div className="article-meta">
                <span className="article-category">Career Development</span>
                <span className="article-date">15 Januari 2025</span>
              </div>
              <h2>Panduan Lengkap Career Switch ke Data Science di 2025</h2>
              <p>Ingin beralih karir ke data science? Pelajari roadmap lengkap, skill yang dibutuhkan, dan strategi untuk sukses dalam transisi karir ini.</p>
              <div className="article-author">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" 
                  alt="Author" 
                />
                <span>Dr. Ahmad Rizki</span>
              </div>
              <button className="read-more-btn">Baca Selengkapnya</button>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="articles-section">
        <div className="articles-container">
          <div className="section-header">
            <h2>Artikel Terbaru</h2>
            <div className="category-filters">
              <button className="filter-btn active">Semua</button>
              <button className="filter-btn">Career Tips</button>
              <button className="filter-btn">Tech Trends</button>
              <button className="filter-btn">Skill Development</button>
              <button className="filter-btn">Interview</button>
            </div>
          </div>

          <div className="articles-grid">
            <article className="article-card">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop" 
                alt="Article" 
                className="article-image"
              />
              <div className="article-card-content">
                <div className="article-meta">
                  <span className="category">Tech Trends</span>
                  <span className="date">12 Januari 2025</span>
                </div>
                <h3>5 Teknologi AI yang Wajib Dipelajari Developer di 2025</h3>
                <p>Eksplorasi teknologi AI terbaru yang akan mendominasi industri tech dan bagaimana developer bisa mempersiapkan diri.</p>
                <div className="article-footer">
                  <div className="author-mini">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=30&h=30&fit=crop&crop=face" alt="Author" />
                    <span>Sarah Putri</span>
                  </div>
                  <span className="read-time">5 min read</span>
                </div>
              </div>
            </article>

            <article className="article-card">
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=250&fit=crop" 
                alt="Article" 
                className="article-image"
              />
              <div className="article-card-content">
                <div className="article-meta">
                  <span className="category">Career Tips</span>
                  <span className="date">10 Januari 2025</span>
                </div>
                <h3>Cara Negosiasi Gaji yang Efektif untuk IT Professional</h3>
                <p>Strategi dan tips praktis untuk bernegosiasi gaji yang sesuai dengan value dan pengalaman Anda di industri IT.</p>
                <div className="article-footer">
                  <div className="author-mini">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=30&h=30&fit=crop&crop=face" alt="Author" />
                    <span>Budi Santoso</span>
                  </div>
                  <span className="read-time">8 min read</span>
                </div>
              </div>
            </article>

            <article className="article-card">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop" 
                alt="Article" 
                className="article-image"
              />
              <div className="article-card-content">
                <div className="article-meta">
                  <span className="category">Skill Development</span>
                  <span className="date">8 Januari 2025</span>
                </div>
                <h3>Roadmap Belajar Cloud Computing untuk Pemula</h3>
                <p>Panduan step-by-step untuk memulai karir di cloud computing, mulai dari basic hingga advanced level.</p>
                <div className="article-footer">
                  <div className="author-mini">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=30&h=30&fit=crop&crop=face" alt="Author" />
                    <span>Ahmad Fauzi</span>
                  </div>
                  <span className="read-time">12 min read</span>
                </div>
              </div>
            </article>

            <article className="article-card">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop" 
                alt="Article" 
                className="article-image"
              />
              <div className="article-card-content">
                <div className="article-meta">
                  <span className="category">Interview</span>
                  <span className="date">5 Januari 2025</span>
                </div>
                <h3>10 Pertanyaan Interview Technical yang Sering Ditanyakan</h3>
                <p>Persiapan lengkap untuk menghadapi interview technical di perusahaan tech terkemuka.</p>
                <div className="article-footer">
                  <div className="author-mini">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=30&h=30&fit=crop&crop=face" alt="Author" />
                    <span>Siti Nurhaliza</span>
                  </div>
                  <span className="read-time">6 min read</span>
                </div>
              </div>
            </article>

            <article className="article-card">
              <img 
                src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop" 
                alt="Article" 
                className="article-image"
              />
              <div className="article-card-content">
                <div className="article-meta">
                  <span className="category">Career Tips</span>
                  <span className="date">3 Januari 2025</span>
                </div>
                <h3>Building Personal Brand sebagai Developer</h3>
                <p>Cara membangun personal brand yang kuat di industri tech melalui LinkedIn, GitHub, dan platform lainnya.</p>
                <div className="article-footer">
                  <div className="author-mini">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=30&h=30&fit=crop&crop=face" alt="Author" />
                    <span>Dedi Kurniawan</span>
                  </div>
                  <span className="read-time">10 min read</span>
                </div>
              </div>
            </article>

            <article className="article-card">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop" 
                alt="Article" 
                className="article-image"
              />
              <div className="article-card-content">
                <div className="article-meta">
                  <span className="category">Tech Trends</span>
                  <span className="date">1 Januari 2025</span>
                </div>
                <h3>Tren Remote Work di Industri Tech Indonesia 2025</h3>
                <p>Analisis mendalam tentang perkembangan remote work dan peluang karir untuk developer Indonesia.</p>
                <div className="article-footer">
                  <div className="author-mini">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=30&h=30&fit=crop&crop=face" alt="Author" />
                    <span>Andi Wijaya</span>
                  </div>
                  <span className="read-time">7 min read</span>
                </div>
              </div>
            </article>
          </div>

          <div className="load-more-section">
            <button className="load-more-btn">Muat Artikel Lainnya</button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h2>Dapatkan Tips Karir Terbaru</h2>
            <p>Berlangganan newsletter kami dan dapatkan artikel, tips, dan insight terbaru langsung di inbox Anda</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Masukkan email Anda" 
                className="newsletter-input"
              />
              <button className="newsletter-btn">Berlangganan</button>
            </div>
            <p className="newsletter-note">Gratis dan bisa unsubscribe kapan saja</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="blog-cta-section">
        <div className="blog-cta-container">
          <h2>Siap Mengembangkan Karir Anda?</h2>
          <p>Jangan hanya baca artikel, mulai action plan untuk karir impian Anda</p>
          <button onClick={onBack} className="cta-button">
            Mulai Tes Karir Sekarang
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
