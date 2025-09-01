import React from 'react';
import './ServicePage.css';

interface Props {
  onBack: () => void;
}

const AnalisisPotensiDiri: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-content">
          <div className="service-icon-large">🔍</div>
          <h1>Analisis Potensi Diri</h1>
          <p>Evaluasi komprehensif terhadap kekuatan, kelemahan, dan potensi pengembangan diri dalam konteks karir IT.</p>
        </div>
      </section>

      <section className="service-details">
        <div className="service-container">
          <div className="service-content">
            <div className="service-info">
              <h2>Apa yang Anda Dapatkan?</h2>
              <ul className="service-features">
                <li>Assessment 360 derajat</li>
                <li>Analisis SWOT personal</li>
                <li>Identifikasi area pengembangan</li>
                <li>Action plan untuk improvement</li>
                <li>Personality profiling</li>
                <li>Laporan komprehensif</li>
              </ul>
            </div>
            
            <div className="service-pricing">
              <div className="price-card">
                <h3>Paket Analisis Potensi Diri</h3>
                <div className="price">Rp 300.000</div>
                <div className="duration">120 menit</div>
                <button className="cta-button">Mulai Analisis</button>
              </div>
            </div>
          </div>

          <div className="service-process">
            <h2>Proses Analisis</h2>
            <div className="process-grid">
              <div className="process-item">
                <div className="process-number">1</div>
                <h3>Self Assessment</h3>
                <p>Evaluasi diri melalui berbagai instrumen psikometri</p>
              </div>
              <div className="process-item">
                <div className="process-number">2</div>
                <h3>360° Feedback</h3>
                <p>Feedback dari rekan kerja, atasan, dan bawahan (opsional)</p>
              </div>
              <div className="process-item">
                <div className="process-number">3</div>
                <h3>Deep Analysis</h3>
                <p>Analisis mendalam oleh psikolog industrial</p>
              </div>
              <div className="process-item">
                <div className="process-number">4</div>
                <h3>Report & Action Plan</h3>
                <p>Laporan lengkap dengan rencana pengembangan</p>
              </div>
            </div>
          </div>

          <div className="service-benefits">
            <h2>Mengapa Memilih Analisis Kami?</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <h3>🔬 Scientific Approach</h3>
                <p>Menggunakan metode ilmiah dan instrumen tervalidasi</p>
              </div>
              <div className="benefit-item">
                <h3>👥 360° Perspective</h3>
                <p>Pandangan menyeluruh dari berbagai sudut pandang</p>
              </div>
              <div className="benefit-item">
                <h3>📋 Actionable Insights</h3>
                <p>Hasil yang bisa langsung diterapkan untuk pengembangan</p>
              </div>
              <div className="benefit-item">
                <h3>🎯 IT-Focused</h3>
                <p>Analisis yang spesifik untuk konteks industri IT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="cta-container">
          <h2>Siap Menggali Potensi Terbaik Anda?</h2>
          <p>Kenali kekuatan dan area pengembangan untuk memaksimalkan potensi karir IT Anda</p>
          <div className="cta-buttons">
            <button className="cta-primary">Mulai Analisis</button>
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

export default AnalisisPotensiDiri;
