import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

interface Props {
  onBack: () => void;
}

const Services: React.FC<Props> = ({ onBack }) => {
  const navigate = useNavigate();

  const handleDetailedServices = () => {
    navigate('/layanan-kami');
  };

  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Layanan Kami</h1>
        <p>Solusi lengkap untuk pengembangan karir IT Anda</p>
      </div>
      
      <div className="services-grid">
        <div className="service-card" onClick={() => navigate('/tes-minat-bakat')} style={{ cursor: 'pointer' }}>
          <div className="service-icon">🎯</div>
          <h3>Tes Minat & Bakat</h3>
          <p>Analisis mendalam untuk menemukan passion dan bakat alami Anda di bidang teknologi.</p>
        </div>
        
        <div className="service-card" onClick={() => navigate('/konsultasi-karir')} style={{ cursor: 'pointer' }}>
          <div className="service-icon">💼</div>
          <h3>Konsultasi Karir</h3>
          <p>Sesi one-on-one dengan career counselor berpengalaman untuk merencanakan langkah karir Anda.</p>
        </div>
        
        <div className="service-card" onClick={() => navigate('/rekomendasi-jalur-karir')} style={{ cursor: 'pointer' }}>
          <div className="service-icon">🚀</div>
          <h3>Rekomendasi Jalur Karir</h3>
          <p>Panduan personal berdasarkan AI untuk menentukan jalur karir IT yang paling sesuai dengan profil Anda.</p>
        </div>
        
        <div className="service-card" onClick={() => navigate('/panduan-skill-development')} style={{ cursor: 'pointer' }}>
          <div className="service-icon">📚</div>
          <h3>Panduan Skill Development</h3>
          <p>Program pembelajaran terstruktur untuk mengembangkan keterampilan teknis dan soft skills.</p>
        </div>
        
        <div className="service-card" onClick={() => navigate('/career-roadmap')} style={{ cursor: 'pointer' }}>
          <div className="service-icon">🗺️</div>
          <h3>Career Roadmap</h3>
          <p>Peta jalan karir yang detail dengan milestone, target, dan strategi untuk mencapai posisi impian.</p>
        </div>
        
        <div className="service-card" onClick={() => navigate('/analisis-potensi-diri')} style={{ cursor: 'pointer' }}>
          <div className="service-icon">🔍</div>
          <h3>Analisis Potensi Diri</h3>
          <p>Evaluasi komprehensif terhadap kekuatan, kelemahan, dan potensi pengembangan diri.</p>
        </div>
      </div>
      
      <div style={{ marginBottom: '2rem' }}>
        <button onClick={handleDetailedServices} className="back-button" style={{ marginRight: '1rem' }}>
          Lihat Detail Layanan
        </button>
      </div>
      
      <button onClick={onBack} className="back-button">
        Kembali ke Beranda
      </button>
    </div>
  );
};

export default Services;
