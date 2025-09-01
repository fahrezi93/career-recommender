import React from 'react';
import './ServicePage.css';

interface Props {
  onBack: () => void;
}

const PanduanSkillDevelopment: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-content">
          <div className="service-icon-large">📚</div>
          <h1>Panduan Skill Development</h1>
          <p>Program pembelajaran terstruktur untuk mengembangkan keterampilan teknis dan soft skills yang dibutuhkan industri.</p>
        </div>
      </section>

      <section className="service-details">
        <div className="service-container">
          <div className="service-content">
            <div className="service-info">
              <h2>Apa yang Anda Dapatkan?</h2>
              <ul className="service-features">
                <li>Kurikulum disesuaikan dengan tren industri</li>
                <li>Learning path yang dipersonalisasi</li>
                <li>Project-based learning</li>
                <li>Mentoring dari praktisi berpengalaman</li>
                <li>Portfolio development guidance</li>
                <li>Sertifikat completion</li>
              </ul>
            </div>
            
            <div className="service-pricing">
              <div className="price-card">
                <h3>Paket Skill Development</h3>
                <div className="price">Rp 500.000</div>
                <div className="duration">3-6 bulan</div>
                <button className="cta-button">Mulai Program</button>
              </div>
            </div>
          </div>

          <div className="service-process">
            <h2>Proses Program</h2>
            <div className="process-grid">
              <div className="process-item">
                <div className="process-number">1</div>
                <h3>Skill Assessment</h3>
                <p>Evaluasi kemampuan saat ini untuk menentukan starting point</p>
              </div>
              <div className="process-item">
                <div className="process-number">2</div>
                <h3>Custom Learning Path</h3>
                <p>Pembuatan jalur pembelajaran yang disesuaikan dengan tujuan</p>
              </div>
              <div className="process-item">
                <div className="process-number">3</div>
                <h3>Guided Learning</h3>
                <p>Pembelajaran dengan mentor dan project-based approach</p>
              </div>
              <div className="process-item">
                <div className="process-number">4</div>
                <h3>Portfolio Building</h3>
                <p>Membangun portfolio yang menarik untuk employer</p>
              </div>
            </div>
          </div>

          <div className="service-benefits">
            <h2>Mengapa Memilih Program Kami?</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <h3>👨‍🏫 Expert Mentors</h3>
                <p>Belajar langsung dari praktisi industri berpengalaman</p>
              </div>
              <div className="benefit-item">
                <h3>🎯 Industry Relevant</h3>
                <p>Kurikulum yang selalu update dengan kebutuhan industri</p>
              </div>
              <div className="benefit-item">
                <h3>🛠️ Hands-on Projects</h3>
                <p>Pembelajaran praktis dengan project real-world</p>
              </div>
              <div className="benefit-item">
                <h3>📜 Certified Learning</h3>
                <p>Sertifikat yang diakui industri untuk meningkatkan kredibilitas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="cta-container">
          <h2>Siap Mengembangkan Skill IT Anda?</h2>
          <p>Investasi terbaik untuk karir IT adalah mengembangkan skill yang relevan dengan industri</p>
          <div className="cta-buttons">
            <button className="cta-primary">Mulai Program</button>
            <button className="cta-secondary">Info Lengkap</button>
          </div>
        </div>
      </section>

      <div className="back-section">
        <button onClick={onBack} className="back-button">
          Kembali ke Layanan
        </button>
      </div>
    </div>
  );
};

export default PanduanSkillDevelopment;
