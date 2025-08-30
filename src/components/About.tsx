import React, { useEffect } from 'react';
import './About.css';

interface Props {
  onBack: () => void;
}

const About: React.FC<Props> = ({ onBack }) => {
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
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Tentang CareerGuide</h1>
          <p>Platform rekomendasi karir berbasis AI yang membantu profesional menemukan jalur karir yang tepat sesuai dengan minat, keahlian, dan potensi mereka.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section scroll-animate">
        <div className="mission-container">
          <div className="mission-content">
            <div className="mission-left">
              <h2>Misi Kami</h2>
              <p>Membantu setiap individu menemukan dan mengembangkan potensi terbaik mereka di dunia teknologi melalui panduan karir yang personal dan berbasis data.</p>
              
              <div className="mission-points">
                <div className="mission-point">
                  <span className="point-icon">🎯</span>
                  <div>
                    <h4>Personalisasi</h4>
                    <p>Setiap rekomendasi disesuaikan dengan profil unik pengguna</p>
                  </div>
                </div>
                <div className="mission-point">
                  <span className="point-icon">📊</span>
                  <div>
                    <h4>Berbasis Data</h4>
                    <p>Menggunakan analisis mendalam dari tren industri terkini</p>
                  </div>
                </div>
                <div className="mission-point">
                  <span className="point-icon">🚀</span>
                  <div>
                    <h4>Pertumbuhan</h4>
                    <p>Fokus pada pengembangan jangka panjang karir pengguna</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mission-right">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="Tim kerja" 
                className="mission-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section scroll-animate">
        <div className="team-container">
          <h2>Tim Ahli Kami</h2>
          <p>Didukung oleh para profesional berpengalaman di bidang teknologi dan pengembangan karir</p>
          
          <div className="team-grid">
            <div className="team-card">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
                alt="Dr. Ahmad Rizki" 
                className="team-photo"
              />
              <h3>Dr. Ahmad Rizki</h3>
              <p className="team-role">CEO & Founder</p>
              <p>15+ tahun pengalaman di industri teknologi dan konsultasi karir</p>
            </div>
            
            <div className="team-card">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face" 
                alt="Sarah Putri" 
                className="team-photo"
              />
              <h3>Sarah Putri</h3>
              <p className="team-role">Head of AI Development</p>
              <p>Spesialis machine learning dan data science dengan 10+ tahun pengalaman</p>
            </div>
            
            <div className="team-card">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" 
                alt="Budi Santoso" 
                className="team-photo"
              />
              <h3>Budi Santoso</h3>
              <p className="team-role">Career Consultant</p>
              <p>Konsultan karir bersertifikat dengan track record 500+ klien sukses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section scroll-animate">
        <div className="values-container">
          <h2>Nilai-Nilai Kami</h2>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-icon">🤝</span>
              <h3>Integritas</h3>
              <p>Memberikan saran yang jujur dan transparan untuk kepentingan terbaik klien</p>
            </div>
            <div className="value-card">
              <span className="value-icon">💡</span>
              <h3>Inovasi</h3>
              <p>Terus mengembangkan teknologi AI untuk memberikan hasil yang lebih akurat</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🎓</span>
              <h3>Pembelajaran</h3>
              <p>Berkomitmen pada pengembangan berkelanjutan dan adaptasi dengan tren industri</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🌟</span>
              <h3>Keunggulan</h3>
              <p>Berusaha memberikan layanan terbaik dengan standar kualitas tertinggi</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section scroll-animate">
        <div className="about-cta-container">
          <h2>Siap Memulai Perjalanan Karir Anda?</h2>
          <p>Bergabunglah dengan ribuan profesional yang telah menemukan jalur karir impian mereka</p>
          <button onClick={onBack} className="cta-button">
            Mulai Tes Karir Sekarang
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
