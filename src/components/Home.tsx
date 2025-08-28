import React from 'react';
import './Home.css';

interface Props {
  onStart: () => void;
}

const Home: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Cari Jalur Karir IT yang Paling Cocok untuk Anda</h1>
        <p>Jawab beberapa pertanyaan singkat dan temukan peran di bidang teknologi yang sesuai dengan minat dan keahlian Anda.</p>
        <button onClick={onStart} className="start-btn">
          Mulai Tes Sekarang
        </button>
      </div>

      <div className="features-section">
        <h2>Kenapa Menggunakan Platform Ini?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Analisis Celah Skill</h3>
            <p>Ketahui skill yang perlu Anda tingkatkan untuk peran impian.</p>
          </div>
          <div className="feature-card">
            <h3>Roadmap Belajar Pribadi</h3>
            <p>Dapatkan panduan belajar langkah demi langkah yang dipersonalisasi.</p>
          </div>
          <div className="feature-card">
            <h3>Wawasan Gaji Regional</h3>
            <p>Lihat estimasi rentang gaji berdasarkan lokasi dan pengalaman.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
