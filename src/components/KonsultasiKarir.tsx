import React from 'react';
import './ServicePage.css';

interface Props {
  onBack: () => void;
}

const KonsultasiKarir: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="service-hero-content">
          <div className="service-icon-large">💼</div>
          <h1>Konsultasi Karir</h1>
          <p>Sesi one-on-one dengan career counselor berpengalaman untuk merencanakan strategi pengembangan karir yang tepat.</p>
        </div>
      </section>

      <section className="service-details">
        <div className="service-container">
          <div className="service-content">
            <div className="service-info">
              <h2>Apa yang Anda Dapatkan?</h2>
              <ul className="service-features">
                <li>Konsultasi personal dengan expert</li>
                <li>Review CV dan portfolio</li>
                <li>Strategi pencarian kerja</li>
                <li>Tips interview dan negosiasi gaji</li>
                <li>Panduan networking profesional</li>
                <li>Follow-up session gratis</li>
              </ul>
            </div>
            
            <div className="service-pricing">
              <div className="price-card">
                <h3>Paket Konsultasi Karir</h3>
                <div className="price">Rp 200.000</div>
                <div className="duration">60 menit</div>
                <button className="cta-button">Booking Sekarang</button>
              </div>
            </div>
          </div>

          <div className="service-process">
            <h2>Proses Konsultasi</h2>
            <div className="process-grid">
              <div className="process-item">
                <div className="process-number">1</div>
                <h3>Pre-Assessment</h3>
                <p>Isi form assessment awal untuk memahami situasi karir Anda</p>
              </div>
              <div className="process-item">
                <div className="process-number">2</div>
                <h3>Sesi Konsultasi</h3>
                <p>Meeting 1-on-1 dengan career counselor (60 menit)</p>
              </div>
              <div className="process-item">
                <div className="process-number">3</div>
                <h3>Action Plan</h3>
                <p>Terima rencana aksi konkret untuk pengembangan karir</p>
              </div>
              <div className="process-item">
                <div className="process-number">4</div>
                <h3>Follow-up</h3>
                <p>Sesi follow-up gratis setelah 2 minggu implementasi</p>
              </div>
            </div>
          </div>

          <div className="service-benefits">
            <h2>Mengapa Memilih Konsultasi Kami?</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <h3>👨‍💼 Expert Berpengalaman</h3>
                <p>Konselor dengan 10+ tahun pengalaman di industri IT</p>
              </div>
              <div className="benefit-item">
                <h3>🎯 Personal & Terfokus</h3>
                <p>Strategi yang disesuaikan dengan tujuan karir spesifik Anda</p>
              </div>
              <div className="benefit-item">
                <h3>📋 Action Plan Konkret</h3>
                <p>Rencana aksi yang bisa langsung diimplementasikan</p>
              </div>
              <div className="benefit-item">
                <h3>🔄 Follow-up Gratis</h3>
                <p>Monitoring progress dan penyesuaian strategi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="cta-container">
          <h2>Siap Merencanakan Karir IT Impian Anda?</h2>
          <p>Dapatkan panduan personal dari expert untuk mencapai tujuan karir Anda</p>
          <div className="cta-buttons">
            <button className="cta-primary">Booking Konsultasi</button>
            <button className="cta-secondary">Chat WhatsApp</button>
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

export default KonsultasiKarir;
