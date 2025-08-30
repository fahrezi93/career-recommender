import React, { useEffect } from 'react';
import './Services.css';

interface Props {
  onBack: () => void;
}

const Services: React.FC<Props> = ({ onBack }) => {
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

    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Layanan Kami</h1>
          <p>Solusi komprehensif untuk mengembangkan karir IT Anda dengan panduan ahli dan teknologi AI terdepan</p>
        </div>
      </section>

      {/* Main Services */}
      <section className="main-services-section scroll-animate">
        <div className="main-services-container">
          <div className="services-grid">
            <div className="service-detail-card">
              <div className="service-icon">🎯</div>
              <h3>Tes Minat & Bakat</h3>
              <p className="service-description">
                Analisis mendalam tentang minat, bakat, dan preferensi karir Anda menggunakan algoritma AI yang canggih.
              </p>
              <ul className="service-features">
                <li>Tes psikometri komprehensif</li>
                <li>Analisis kepribadian profesional</li>
                <li>Pemetaan minat vs industri IT</li>
                <li>Laporan detail dengan visualisasi</li>
              </ul>
              <div className="service-price">
                <span className="price">Rp 299.000</span>
                <span className="duration">/ sekali tes</span>
              </div>
              <button className="service-cta">Mulai Tes</button>
            </div>

            <div className="service-detail-card featured">
              <div className="featured-badge">Paling Populer</div>
              <div className="service-icon">💼</div>
              <h3>Program Konsultasi Karir</h3>
              <p className="service-description">
                Bimbingan personal dari konsultan karir berpengalaman untuk merencanakan dan mengembangkan jalur karir IT Anda.
              </p>
              <ul className="service-features">
                <li>3x sesi konsultasi 1-on-1</li>
                <li>Penyusunan roadmap karir personal</li>
                <li>Review CV dan LinkedIn profile</li>
                <li>Strategi interview dan negosiasi gaji</li>
                <li>Follow-up support selama 3 bulan</li>
              </ul>
              <div className="service-price">
                <span className="price">Rp 1.499.000</span>
                <span className="duration">/ paket 3 bulan</span>
              </div>
              <button className="service-cta">Pilih Paket</button>
            </div>

            <div className="service-detail-card">
              <div className="service-icon">📱</div>
              <h3>Optimasi Profil LinkedIn & Media Sosial</h3>
              <p className="service-description">
                Tingkatkan visibilitas profesional Anda dengan optimasi profil LinkedIn dan strategi personal branding.
              </p>
              <ul className="service-features">
                <li>Audit profil LinkedIn lengkap</li>
                <li>Penulisan headline dan summary</li>
                <li>Optimasi kata kunci SEO</li>
                <li>Strategi konten dan posting</li>
              </ul>
              <div className="service-price">
                <span className="price">Rp 799.000</span>
                <span className="duration">/ sekali optimasi</span>
              </div>
              <button className="service-cta">Optimasi Sekarang</button>
            </div>

            <div className="service-detail-card">
              <div className="service-icon">📝</div>
              <h3>Strategi Konten & Coaching Visibilitas</h3>
              <p className="service-description">
                Bangun otoritas dan kredibilitas di industri IT melalui strategi konten yang tepat sasaran.
              </p>
              <ul className="service-features">
                <li>Perencanaan konten bulanan</li>
                <li>Template artikel dan post</li>
                <li>Coaching public speaking</li>
                <li>Networking strategy</li>
              </ul>
              <div className="service-price">
                <span className="price">Rp 999.000</span>
                <span className="duration">/ bulan</span>
              </div>
              <button className="service-cta">Mulai Coaching</button>
            </div>

            <div className="service-detail-card">
              <div className="service-icon">🚀</div>
              <h3>Career Roadmap</h3>
              <p className="service-description">
                Peta jalan karir yang detail dan terstruktur untuk mencapai posisi impian Anda di industri IT.
              </p>
              <ul className="service-features">
                <li>Analisis gap skill saat ini</li>
                <li>Timeline pengembangan karir</li>
                <li>Rekomendasi sertifikasi</li>
                <li>Target posisi dan gaji</li>
              </ul>
              <div className="service-price">
                <span className="price">Rp 599.000</span>
                <span className="duration">/ roadmap</span>
              </div>
              <button className="service-cta">Buat Roadmap</button>
            </div>

            <div className="service-detail-card">
              <div className="service-icon">📊</div>
              <h3>Analisis Potensi Diri</h3>
              <p className="service-description">
                Evaluasi mendalam tentang kekuatan, kelemahan, dan potensi pengembangan karir Anda.
              </p>
              <ul className="service-features">
                <li>Assessment 360 derajat</li>
                <li>Analisis soft skills</li>
                <li>Rekomendasi pengembangan</li>
                <li>Benchmarking industri</li>
              </ul>
              <div className="service-price">
                <span className="price">Rp 399.000</span>
                <span className="duration">/ analisis</span>
              </div>
              <button className="service-cta">Analisis Sekarang</button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section scroll-animate">
        <div className="process-container">
          <h2>Bagaimana Cara Kerjanya?</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Konsultasi Awal</h3>
              <p>Diskusi kebutuhan dan tujuan karir Anda dengan tim ahli kami</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Assessment & Analisis</h3>
              <p>Tes komprehensif dan analisis mendalam tentang profil karir Anda</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Rekomendasi Personal</h3>
              <p>Menerima rekomendasi dan strategi yang disesuaikan dengan profil Anda</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Implementasi & Follow-up</h3>
              <p>Bimbingan implementasi dan monitoring progress secara berkelanjutan</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section scroll-animate">
        <div className="faq-container">
          <h2>Pertanyaan Umum</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Berapa lama proses konsultasi?</h3>
              <p>Proses konsultasi bervariasi tergantung paket yang dipilih, mulai dari 1 minggu hingga 3 bulan untuk program lengkap.</p>
            </div>
            <div className="faq-item">
              <h3>Apakah ada garansi hasil?</h3>
              <p>Kami memberikan garansi kepuasan 100%. Jika tidak puas dengan hasil konsultasi, kami akan memberikan sesi tambahan gratis.</p>
            </div>
            <div className="faq-item">
              <h3>Bagaimana metode pembayaran?</h3>
              <p>Kami menerima pembayaran melalui transfer bank, e-wallet, dan kartu kredit dengan sistem cicilan tersedia.</p>
            </div>
            <div className="faq-item">
              <h3>Apakah cocok untuk fresh graduate?</h3>
              <p>Sangat cocok! Kami memiliki program khusus untuk fresh graduate yang ingin memulai karir di industri IT.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section scroll-animate">
        <div className="services-cta-container">
          <h2>Siap Mengembangkan Karir IT Anda?</h2>
          <p>Mulai perjalanan karir impian Anda bersama tim ahli CareerGuide</p>
          <div className="cta-buttons">
            <button onClick={onBack} className="cta-primary">Mulai Tes Gratis</button>
            <button className="cta-secondary">Konsultasi Gratis</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
