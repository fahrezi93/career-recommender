import React, { useEffect, useState } from 'react';
import './Home.css';

interface Props {
  onStart: () => void;
}

const Home: React.FC<Props> = ({ onStart }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    // Trigger initial animations
    setTimeout(() => setIsLoaded(true), 100);
    setTimeout(() => setStatsVisible(true), 1200);

    // Counter animation for stats
    const animateCounter = (element: HTMLElement, target: number, suffix: string) => {
      let current = 0;
      const increment = target / 60; // 60 frames for smooth animation
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        
        if (suffix === 'M+') {
          element.textContent = `${(current / 1000000).toFixed(0)}M+`;
        } else if (suffix === 'k+') {
          element.textContent = `${(current / 1000).toFixed(0)}k+`;
        } else {
          element.textContent = `${Math.floor(current)}+`;
        }
      }, 16);
    };

    // Start counter animations when stats become visible
    setTimeout(() => {
      const statNumbers = document.querySelectorAll('.stat-number');
      statNumbers.forEach((stat) => {
        const target = parseInt((stat as HTMLElement).dataset.target || '0');
        const text = (stat as HTMLElement).textContent || '';
        const suffix = text.includes('M+') ? 'M+' : text.includes('k+') ? 'k+' : '+';
        animateCounter(stat as HTMLElement, target, suffix);
      });
    }, 1400);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections that should animate on scroll
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className={`hero-section ${isLoaded ? 'loaded' : ''}`}>
        <div className="hero-content">
          <div className={`hero-left ${isLoaded ? 'animate-in' : ''}`}>
            <div className={`hero-badge ${isLoaded ? 'fade-slide-up' : ''}`}>
              <span className="badge-icon">👨‍💻</span>
              <span>Mulai Konsultasi</span>
            </div>
            <h1 className={`hero-title ${isLoaded ? 'fade-slide-up' : ''}`}>
              Karir Impian Anda Dimulai dari <span className={`highlight-animated ${isLoaded ? 'animate-highlight' : ''}`}>Sini</span>.
            </h1>
            <p className="hero-description">
              Temukan potensi sejati Anda di dunia teknologi dengan rekomendasi karir yang dipersonalisasi 
              dan panduan strategis yang tepat sasaran.
            </p>
            <button onClick={onStart} className={`hero-cta-button ${isLoaded ? 'fade-slide-up' : ''}`}>
              <span>Mulai Tes Karir</span>
              <span className="button-icon">→</span>
            </button>
          </div>
          <div className="hero-right">
            <div className="hero-image-container">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Professional consultant" 
                className="hero-image"
              />
              <div className={`floating-stats ${statsVisible ? 'stats-visible' : ''}`}>
                <div className="stat-card stat-1">
                  <div className="stat-number" data-target="200">0+</div>
                  <div className="stat-label">Pencocokan Sukses</div>
                </div>
                <div className="stat-card stat-2">
                  <div className="stat-number" data-target="8000000">0M+</div>
                  <div className="stat-label">Profil Dihasilkan</div>
                </div>
                <div className="stat-card stat-3">
                  <div className="stat-number" data-target="3000">0k+</div>
                  <div className="stat-label">Klien Puas</div>
                </div>
                <div className="stat-card stat-4">
                  <div className="stat-number" data-target="500">0+</div>
                  <div className="stat-label">Proyek Berhasil</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section scroll-animate">
        <div className="partners-container">
          <h3 className="partners-title">Dipercaya oleh Perusahaan Terkemuka</h3>
          <div className="partners-grid">
            <div className="partner-logo">
              <svg width="120" height="40" viewBox="0 0 120 40" fill="currentColor">
                <text x="60" y="25" textAnchor="middle" fontSize="16" fontWeight="600">Google</text>
              </svg>
            </div>
            <div className="partner-logo">
              <svg width="120" height="40" viewBox="0 0 120 40" fill="currentColor">
                <text x="60" y="25" textAnchor="middle" fontSize="16" fontWeight="600">Microsoft</text>
              </svg>
            </div>
            <div className="partner-logo">
              <svg width="120" height="40" viewBox="0 0 120 40" fill="currentColor">
                <text x="60" y="25" textAnchor="middle" fontSize="16" fontWeight="600">Amazon</text>
              </svg>
            </div>
            <div className="partner-logo">
              <svg width="120" height="40" viewBox="0 0 120 40" fill="currentColor">
                <text x="60" y="25" textAnchor="middle" fontSize="16" fontWeight="600">Meta</text>
              </svg>
            </div>
            <div className="partner-logo">
              <svg width="120" height="40" viewBox="0 0 120 40" fill="currentColor">
                <text x="60" y="25" textAnchor="middle" fontSize="16" fontWeight="600">Netflix</text>
              </svg>
            </div>
            <div className="partner-logo">
              <svg width="120" height="40" viewBox="0 0 120 40" fill="currentColor">
                <text x="60" y="25" textAnchor="middle" fontSize="16" fontWeight="600">Spotify</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section scroll-animate">
        <div className="about-container">
          <div className="about-left">
            <div className="about-badge">
              <span>Tentang CareerGuide</span>
            </div>
            <h2 className="about-title">
              Kami Membantu Anda Membangun <span className="highlight">Karir yang Bermakna</span>
            </h2>
            <p className="about-description">
              Platform bertenaga AI kami menganalisis keahlian, minat, dan tujuan Anda untuk memberikan 
              rekomendasi karir yang dipersonalisasi sesuai dengan potensi sejati Anda.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <span className="feature-icon">🎯</span>
                <div>
                  <h4>Asesmen Personal</h4>
                  <p>Analisis mendalam tentang keahlian dan minat Anda</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🚀</span>
                <div>
                  <h4>Peta Jalan Karir</h4>
                  <p>Panduan langkah demi langkah menuju pekerjaan impian</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💡</span>
                <div>
                  <h4>Wawasan Ahli</h4>
                  <p>Tren industri dan saran profesional</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-right">
            <img 
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
              alt="Kolaborasi tim" 
              className="about-image"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section scroll-animate">
        <div className="services-container">
          <div className="services-header">
            <div className="services-label">Layanan Kami</div>
            <h2>Layanan <span className="services-highlight">Konsultasi Karir</span> yang Disesuaikan untuk Anda</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Tes Minat & Bakat</h3>
              <p>Dapatkan kejelasan tentang kekuatan, nilai, dan posisi karir Anda.</p>
              <a href="#" className="service-link">Pelajari lebih lanjut →</a>
            </div>
            <div className="service-card">
              <div className="service-icon">💼</div>
              <h3>Program Konsultasi Karir</h3>
              <p>Transformasikan strategi karir Anda menjadi cerita, citra, dan kehadiran online yang kuat.</p>
              <a href="#" className="service-link">Pelajari lebih lanjut →</a>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Optimasi Profil LinkedIn & Media Sosial</h3>
              <p>Optimalkan kehadiran digital Anda untuk visibilitas dan dampak maksimal.</p>
              <a href="#" className="service-link">Pelajari lebih lanjut →</a>
            </div>
            <div className="service-card">
              <div className="service-icon">📝</div>
              <h3>Strategi Konten & Coaching Visibilitas</h3>
              <p>Pelajari cara membuat konten menarik yang menunjukkan keahlian dan membangun otoritas.</p>
              <a href="#" className="service-link">Pelajari lebih lanjut →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section scroll-animate">
        <div className="blog-container">
          <div className="blog-header">
            <div className="blog-label">Blog Kami</div>
            <h2>Wawasan & Strategi untuk Membangun <span className="blog-highlight">Karir Impian</span></h2>
            <p>Tips yang dapat ditindaklanjuti, saran ahli, dan pelajaran kehidupan nyata untuk membantu Anda mengembangkan pengaruh, otoritas, dan visibilitas—satu postingan dalam satu waktu.</p>
          </div>
          <div className="blog-grid">
            <div className="blog-card">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop" alt="Blog post" className="blog-image" />
              <div className="blog-content">
                <h3>Wawasan & Strategi untuk Membangun Karir Impian Anda</h3>
                <p>Temukan elemen kunci yang membuat karir Anda menonjol dan membangun kepercayaan dengan audiens.</p>
                <a href="#" className="blog-link">Lihat Semua Artikel →</a>
              </div>
            </div>
            <div className="blog-card">
              <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop" alt="Blog post" className="blog-image" />
              <div className="blog-content">
                <h3>Mengoptimalkan Profil LinkedIn Anda di 2025</h3>
                <p>Pelajari strategi terbaru untuk membuat kehadiran LinkedIn yang kuat, profesional, dan mudah ditemukan.</p>
                <a href="#" className="blog-link">Lihat Semua Artikel →</a>
              </div>
            </div>
            <div className="blog-card">
              <img src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop" alt="Blog post" className="blog-image" />
              <div className="blog-content">
                <h3>Mengapa Konten adalah Mata Uang Personal Branding</h3>
                <p>Pahami bagaimana membuat konten berharga memposisikan Anda sebagai otoritas di bidang Anda.</p>
                <a href="#" className="blog-link">Lihat Semua Artikel →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section scroll-animate">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <div className="testimonials-label">Testimoni</div>
            <h2>Apa yang Dikatakan <span className="testimonials-highlight">Klien Kami</span></h2>
            <p>Dengarkan dari para profesional yang telah mengubah karir dan kepercayaan diri mereka melalui konsultasi karir yang tepat sasaran.</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p>Sebelum bekerja dengan CareerGuide, saya kesulitan mengartikulasikan apa yang membuat saya unik. Sekarang, personal brand saya berbicara untuk saya—bahkan sebelum saya memasuki ruangan.</p>
              <div className="testimonial-author">
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop" alt="David R." className="author-avatar" />
                <div className="author-info">
                  <div className="author-name">David R.</div>
                  <div className="author-title">Manajer Pemasaran</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p>Berkat konsultasi Anda, akhirnya saya memiliki profil LinkedIn dan website pribadi yang mencerminkan siapa saya. Saya sudah menerima dua tawaran kerja dalam beberapa minggu!</p>
              <div className="testimonial-author">
                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop" alt="Nadia S." className="author-avatar" />
                <div className="author-info">
                  <div className="author-name">Nadia S.</div>
                  <div className="author-title">UX Designer</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p>Dulu saya merasa tidak terlihat di industri saya. Sekarang saya diundang ke podcast, panel, dan konferensi—hanya dengan menampilkan diri saya yang autentik. Proses Anda benar-benar berhasil.</p>
              <div className="testimonial-author">
                <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop" alt="James T." className="author-avatar" />
                <div className="author-info">
                  <div className="author-name">James T.</div>
                  <div className="author-title">Konsultan Teknologi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-logo">
                <svg className="logo-icon" width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="14" fill="#07553B" stroke="#CED46A" strokeWidth="2"/>
                  <path d="M12 10h8v2h-8v-2zm0 4h8v2h-8v-2zm0 4h6v2h-6v-2z" fill="#CED46A"/>
                  <circle cx="9" cy="11" r="1" fill="#CED46A"/>
                  <circle cx="9" cy="15" r="1" fill="#CED46A"/>
                  <circle cx="9" cy="19" r="1" fill="#CED46A"/>
                </svg>
                <span className="logo-text">TalentPath</span>
              </div>
              <p className="footer-description">
                Platform rekomendasi karir berbasis AI yang membantu profesional menemukan jalur karir yang tepat sesuai dengan minat, keahlian, dan potensi mereka.
              </p>
              <div className="footer-contact">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>info@talentpath.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+62 812-3456-7890</span>
                </div>
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Layanan Kami</h4>
                <ul>
                  <li><a href="#">Tes Minat & Bakat</a></li>
                  <li><a href="#">Konsultasi Karir</a></li>
                  <li><a href="#">Rekomendasi Jalur Karir</a></li>
                  <li><a href="#">Panduan Skill Development</a></li>
                  <li><a href="#">Career Roadmap</a></li>
                  <li><a href="#">Analisis Potensi Diri</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>&copy; 2025 TalentPath. All rights reserved.</p>
            </div>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/mohammad-fahrezi" className="social-link" title="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/fahrezi93" className="social-link" title="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/moh.fahrezi" className="social-link" title="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
