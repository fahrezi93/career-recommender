import React, { useEffect } from 'react';
import './Home.css';

interface Props {
  onStart: () => void;
}

const Home: React.FC<Props> = ({ onStart }) => {
  useEffect(() => {
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
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="badge-icon">🎯</span>
              <span>Mulai Konsultasi</span>
            </div>
            <h1 className="hero-title">
              Karir Impian Anda Dimulai dari <span className="highlight">Sini</span>.
            </h1>
            <p className="hero-description">
              Temukan potensi sejati Anda di dunia teknologi dengan rekomendasi karir yang dipersonalisasi 
              dan panduan strategis yang tepat sasaran.
            </p>
            <button onClick={onStart} className="hero-cta-button">
              <span>Mulai Tes Karir</span>
              <span className="button-icon">→</span>
            </button>
          </div>
          <div className="hero-right">
            <div className="hero-image-container">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop" 
                alt="Professional consultant" 
                className="hero-image"
              />
              <div className="floating-stats">
                <div className="stat-card">
                  <div className="stat-number">200+</div>
                  <div className="stat-label">Pencocokan Sukses</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">8M+</div>
                  <div className="stat-label">Profil Dihasilkan</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">3k+</div>
                  <div className="stat-label">Klien Puas</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">500+</div>
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
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
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
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop" alt="Blog post" className="blog-image" />
              <div className="blog-content">
                <h3>Wawasan & Strategi untuk Membangun Karir Impian Anda</h3>
                <p>Temukan elemen kunci yang membuat karir Anda menonjol dan membangun kepercayaan dengan audiens.</p>
                <a href="#" className="blog-link">Lihat Semua Artikel →</a>
              </div>
            </div>
            <div className="blog-card">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop" alt="Blog post" className="blog-image" />
              <div className="blog-content">
                <h3>Mengoptimalkan Profil LinkedIn Anda di 2025</h3>
                <p>Pelajari strategi terbaru untuk membuat kehadiran LinkedIn yang kuat, profesional, dan mudah ditemukan.</p>
                <a href="#" className="blog-link">Lihat Semua Artikel →</a>
              </div>
            </div>
            <div className="blog-card">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop" alt="Blog post" className="blog-image" />
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
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" alt="David R." className="author-avatar" />
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
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face" alt="Nadia S." className="author-avatar" />
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
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" alt="James T." className="author-avatar" />
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
              <a href="#" className="social-link" title="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="social-link" title="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="social-link" title="Instagram">
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
