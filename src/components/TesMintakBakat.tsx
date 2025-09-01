import React from 'react';
import './ServicePage.css';

interface Props {
  onBack: () => void;
}

const TesMintakBakat: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-content">
          <div className="service-icon-large">🎯</div>
          <h1>Tes Minat & Bakat</h1>
          <p>Analisis mendalam untuk menemukan passion dan bakat alami Anda di bidang teknologi menggunakan metode psikometri modern.</p>
        </div>
      </section>

      <section className="service-details">
        <div className="service-container">
          <div className="service-content">
            <div className="service-info">
              <h2>Apa yang Anda Dapatkan?</h2>
              <ul className="service-features">
                <li>Assessment berbasis AI dengan 50+ parameter</li>
                <li>Analisis kepribadian dan preferensi kerja</li>
                <li>Laporan detail dengan visualisasi interaktif</li>
                <li>Rekomendasi bidang spesialisasi</li>
                <li>Identifikasi kekuatan dan area pengembangan</li>
                <li>Panduan langkah selanjutnya</li>
              </ul>
            </div>
            
            <div className="service-pricing">
              <div className="price-card">
                <h3>Paket Tes Minat & Bakat</h3>
                <div className="price">Rp 150.000</div>
                <div className="duration">45-60 menit</div>
                <button className="cta-button">Mulai Tes Sekarang</button>
              </div>
            </div>
          </div>

          <div className="service-process">
            <h2>Proses Tes</h2>
            <div className="process-grid">
              <div className="process-item">
                <div className="process-number">1</div>
                <h3>Registrasi</h3>
                <p>Daftar dan isi data diri untuk memulai assessment</p>
              </div>
              <div className="process-item">
                <div className="process-number">2</div>
                <h3>Assessment Online</h3>
                <p>Kerjakan tes minat dan bakat secara online (45-60 menit)</p>
              </div>
              <div className="process-item">
                <div className="process-number">3</div>
                <h3>Analisis AI</h3>
                <p>Sistem AI menganalisis jawaban Anda dengan 50+ parameter</p>
              </div>
              <div className="process-item">
                <div className="process-number">4</div>
                <h3>Laporan Hasil</h3>
                <p>Terima laporan lengkap dengan rekomendasi karir IT</p>
              </div>
            </div>
          </div>

          <div className="service-benefits">
            <h2>Mengapa Memilih Tes Kami?</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <h3>🤖 Teknologi AI Terdepan</h3>
                <p>Menggunakan algoritma machine learning untuk analisis yang akurat</p>
              </div>
              <div className="benefit-item">
                <h3>📊 Data Industri Terkini</h3>
                <p>Berdasarkan tren dan kebutuhan industri IT terbaru</p>
              </div>
              <div className="benefit-item">
                <h3>🎯 Personal & Akurat</h3>
                <p>Hasil yang disesuaikan dengan profil dan preferensi unik Anda</p>
              </div>
              <div className="benefit-item">
                <h3>📈 Actionable Insights</h3>
                <p>Rekomendasi konkret yang bisa langsung diterapkan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="cta-container">
          <h2>Siap Menemukan Passion Anda di Dunia IT?</h2>
          <p>Mulai perjalanan karir IT Anda dengan memahami minat dan bakat alami Anda</p>
          <div className="cta-buttons">
            <button className="cta-primary">Mulai Tes Sekarang</button>
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

export default TesMintakBakat;
