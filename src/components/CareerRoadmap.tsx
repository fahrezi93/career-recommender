import React from 'react';
import './ServicePage.css';

interface Props {
  onBack: () => void;
}

const CareerRoadmap: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-content">
          <div className="service-icon-large">🗺️</div>
          <h1>Career Roadmap</h1>
          <p>Peta jalan karir yang detail dengan milestone, target, dan strategi untuk mencapai posisi impian Anda di industri IT.</p>
        </div>
      </section>

      <section className="service-details">
        <div className="service-container">
          <div className="service-content">
            <div className="service-info">
              <h2>Apa yang Anda Dapatkan?</h2>
              <ul className="service-features">
                <li>Roadmap visual yang mudah dipahami</li>
                <li>Milestone dan target yang terukur</li>
                <li>Strategi networking dan personal branding</li>
                <li>Update berkala sesuai perkembangan industri</li>
                <li>Timeline realistis untuk setiap tahapan</li>
                <li>KPI dan metrics untuk tracking progress</li>
              </ul>
            </div>
            
            <div className="service-pricing">
              <div className="price-card">
                <h3>Paket Career Roadmap</h3>
                <div className="price">Rp 250.000</div>
                <div className="duration">90 menit</div>
                <button className="cta-button">Buat Roadmap</button>
              </div>
            </div>
          </div>

          <div className="service-process">
            <h2>Proses Pembuatan Roadmap</h2>
            <div className="process-grid">
              <div className="process-item">
                <div className="process-number">1</div>
                <h3>Goal Setting</h3>
                <p>Menentukan tujuan karir jangka pendek dan panjang</p>
              </div>
              <div className="process-item">
                <div className="process-number">2</div>
                <h3>Gap Analysis</h3>
                <p>Analisis kesenjangan antara kondisi saat ini dan target</p>
              </div>
              <div className="process-item">
                <div className="process-number">3</div>
                <h3>Strategy Planning</h3>
                <p>Penyusunan strategi dan milestone untuk mencapai tujuan</p>
              </div>
              <div className="process-item">
                <div className="process-number">4</div>
                <h3>Visual Roadmap</h3>
                <p>Pembuatan roadmap visual yang mudah diikuti</p>
              </div>
            </div>
          </div>

          <div className="service-benefits">
            <h2>Mengapa Memilih Roadmap Kami?</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <h3>🎯 Goal-Oriented</h3>
                <p>Fokus pada pencapaian tujuan karir yang spesifik dan terukur</p>
              </div>
              <div className="benefit-item">
                <h3>📊 Data-Driven</h3>
                <p>Berdasarkan analisis data industri dan tren karir terkini</p>
              </div>
              <div className="benefit-item">
                <h3>🔄 Adaptive</h3>
                <p>Roadmap yang bisa disesuaikan dengan perubahan industri</p>
              </div>
              <div className="benefit-item">
                <h3>📈 Measurable</h3>
                <p>Dengan KPI dan metrics yang jelas untuk tracking progress</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="cta-container">
          <h2>Siap Membuat Peta Jalan Karir Anda?</h2>
          <p>Dapatkan roadmap yang jelas dan terstruktur untuk mencapai posisi impian di industri IT</p>
          <div className="cta-buttons">
            <button className="cta-primary">Buat Roadmap</button>
            <button className="cta-secondary">Konsultasi Gratis</button>
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

export default CareerRoadmap;
