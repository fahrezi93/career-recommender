import React from 'react';
import './ServicePage.css';

interface Props {
  onBack: () => void;
}

const RekomendasiJalurKarir: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-content">
          <div className="service-icon-large">🛤️</div>
          <h1>Rekomendasi Jalur Karir</h1>
          <p>Panduan komprehensif berdasarkan AI untuk menentukan jalur karir IT yang paling sesuai dengan profil dan tujuan Anda.</p>
        </div>
      </section>

      <section className="service-details">
        <div className="service-container">
          <div className="service-content">
            <div className="service-info">
              <h2>Apa yang Anda Dapatkan?</h2>
              <ul className="service-features">
                <li>Roadmap karir 3-5 tahun ke depan</li>
                <li>Skill gap analysis</li>
                <li>Rekomendasi sertifikasi dan training</li>
                <li>Target posisi dan timeline</li>
                <li>Analisis market demand</li>
                <li>Strategi transisi karir</li>
              </ul>
            </div>
            
            <div className="service-pricing">
              <div className="price-card">
                <h3>Paket Rekomendasi Jalur Karir</h3>
                <div className="price">Rp 100.000</div>
                <div className="duration">30 menit</div>
                <button className="cta-button">Dapatkan Rekomendasi</button>
              </div>
            </div>
          </div>

          <div className="service-process">
            <h2>Proses Rekomendasi</h2>
            <div className="process-grid">
              <div className="process-item">
                <div className="process-number">1</div>
                <h3>Profiling</h3>
                <p>Analisis background, skill, dan preferensi karir Anda</p>
              </div>
              <div className="process-item">
                <div className="process-number">2</div>
                <h3>AI Analysis</h3>
                <p>Sistem AI menganalisis data industri dan tren pasar</p>
              </div>
              <div className="process-item">
                <div className="process-number">3</div>
                <h3>Roadmap Creation</h3>
                <p>Pembuatan roadmap karir yang personal dan realistis</p>
              </div>
              <div className="process-item">
                <div className="process-number">4</div>
                <h3>Delivery</h3>
                <p>Terima roadmap lengkap dengan panduan implementasi</p>
              </div>
            </div>
          </div>

          <div className="service-benefits">
            <h2>Mengapa Memilih Rekomendasi Kami?</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <h3>🤖 AI-Powered Analysis</h3>
                <p>Menggunakan data industri real-time untuk rekomendasi akurat</p>
              </div>
              <div className="benefit-item">
                <h3>📊 Data-Driven Insights</h3>
                <p>Berdasarkan analisis 10,000+ profil karir IT</p>
              </div>
              <div className="benefit-item">
                <h3>🎯 Personal & Realistic</h3>
                <p>Roadmap yang disesuaikan dengan kemampuan dan situasi Anda</p>
              </div>
              <div className="benefit-item">
                <h3>📈 Market Aligned</h3>
                <p>Selaras dengan kebutuhan dan tren industri terkini</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="cta-container">
          <h2>Siap Menemukan Jalur Karir IT Terbaik?</h2>
          <p>Dapatkan roadmap karir yang jelas dan terarah untuk mencapai tujuan profesional Anda</p>
          <div className="cta-buttons">
            <button className="cta-primary">Dapatkan Roadmap</button>
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

export default RekomendasiJalurKarir;
