
import React from 'react';
import './Results.css';

interface Recommendation {
  id: string;
  name: string;
  description: string;
  score: number;
  justifications: string[];
  marketInsight?: {
    trendingSkills: string[];
    demandLevel: 'high' | 'medium' | 'low';
    averageSalary: string;
  };
}

interface Props {
  sortedCareers: Recommendation[];
  onReset: () => void;
}

const Results: React.FC<Props> = ({ sortedCareers, onReset }) => {
  const getDemandColor = (level: 'high' | 'medium' | 'low') => {
    switch (level) {
      case 'high': return '#10b981';
      case 'medium': return '#f59e0b';
      case 'low': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getDemandText = (level: 'high' | 'medium' | 'low') => {
    switch (level) {
      case 'high': return 'Tinggi';
      case 'medium': return 'Sedang';
      case 'low': return 'Rendah';
      default: return 'Unknown';
    }
  };

  const renderScoreVisualization = (score: number) => {
    const percentage = Math.min(score, 100);
    return (
      <div className="score-visualization">
        <div className="score-bar">
          <div 
            className="score-fill" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <span className="score-text">{score}%</span>
      </div>
    );
  };

  return (
    <div className="results-container">
      <div className="results-header">
        <h1>Rekomendasi Karir IT Untuk Anda</h1>
        <p>Hasil analisis menggunakan metode MCDM (Multi-Criteria Decision Making) dengan algoritma SAW</p>
        <div className="methodology-note">
          <span className="methodology-icon">🧠</span>
          <span>Sistem AI telah menganalisis profil Anda berdasarkan nilai akademis, minat, keterampilan, dan prioritas personal</span>
        </div>
      </div>
      
      <div className="results-list">
        {sortedCareers.map((career, index) => (
          <div key={career.id} className={`recommendation-card ${index === 0 ? 'top-recommendation' : ''}`}>
            <div className="card-header">
              <div className="rank-section">
                <div className={`rank ${index === 0 ? 'rank-1' : ''}`}>{index + 1}</div>
                {index === 0 && <span className="best-match">Terbaik</span>}
              </div>
              <div className="score-section">
                {renderScoreVisualization(career.score)}
              </div>
            </div>
            
            <div className="card-content">
              <h3 className="career-title">{career.name}</h3>
              <p className="career-description">{career.description}</p>
              
              {/* Explainable AI Section */}
              <div className="justification-section">
                <h4 className="justification-title">
                  <span className="justification-icon">💡</span>
                  Mengapa Ini Cocok Untuk Anda?
                </h4>
                <ul className="justification-list">
                  {career.justifications.map((justification, idx) => (
                    <li key={idx} className="justification-item">
                      {justification}
                    </li>
                  ))}
                  {career.justifications.length === 0 && (
                    <li className="justification-item">
                      Profil Anda menunjukkan kesesuaian dasar dengan jalur karir ini
                    </li>
                  )}
                </ul>
              </div>

              {/* Market Insights Section */}
              {career.marketInsight && (
                <div className="market-insights">
                  <h4 className="insights-title">
                    <span className="insights-icon">📈</span>
                    Wawasan Pasar Kerja
                  </h4>
                  
                  <div className="insights-grid">
                    <div className="insight-item">
                      <span className="insight-label">Permintaan Pasar:</span>
                      <span 
                        className="demand-badge"
                        style={{ backgroundColor: getDemandColor(career.marketInsight.demandLevel) }}
                      >
                        {getDemandText(career.marketInsight.demandLevel)}
                      </span>
                    </div>
                    
                    <div className="insight-item">
                      <span className="insight-label">Rata-rata Gaji:</span>
                      <span className="salary-text">{career.marketInsight.averageSalary}</span>
                    </div>
                  </div>
                  
                  <div className="trending-skills">
                    <span className="trending-label">Keterampilan Populer:</span>
                    <div className="skills-tags">
                      {career.marketInsight.trendingSkills.map((skill, idx) => (
                        <span key={idx} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="results-actions">
        <button onClick={onReset} className="reset-btn">
          <span className="button-icon">🔄</span>
          Ulangi Tes
        </button>
        <button className="share-btn">
          <span className="button-icon">📤</span>
          Bagikan Hasil
        </button>
        <button className="download-btn">
          <span className="button-icon">📄</span>
          Unduh Laporan
        </button>
      </div>
    </div>
  );
};

export default Results;
