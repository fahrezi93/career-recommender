
import React, { useState } from 'react';
import './Results.css';
import { CFRule } from '../data/knowledgeBase';

interface Recommendation {
  id: string;
  name: string;
  description: string;
  score: number;
  cfScore: number;
  justifications: string[];
  activeRules: CFRule[];
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
  const [showExplanation, setShowExplanation] = useState<string | null>(null);
  const [filterMinScore, setFilterMinScore] = useState<number>(0);
  const [sortBy, setSortBy] = useState<'cf' | 'saw' | 'combined'>('cf');
  const [priorityFilter, setPriorityFilter] = useState<'all' | 'design' | 'logic'>('all');
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

  const renderScoreVisualization = (career: Recommendation) => {
    const cfPercentage = Math.min(career.cfScore, 100);
    const sawPercentage = Math.min(career.score, 100);
    
    return (
      <div className="score-visualization-dual">
        <div className="score-item">
          <label className="score-label">CF Score</label>
          <div className="score-bar">
            <div 
              className="score-fill cf-score" 
              style={{ width: `${cfPercentage}%` }}
            ></div>
          </div>
          <span className="score-text">{career.cfScore}%</span>
        </div>
        <div className="score-item">
          <label className="score-label">SAW Score</label>
          <div className="score-bar">
            <div 
              className="score-fill saw-score" 
              style={{ width: `${sawPercentage}%` }}
            ></div>
          </div>
          <span className="score-text">{career.score}%</span>
        </div>
      </div>
    );
  };

  const handleShowExplanation = (careerId: string) => {
    setShowExplanation(showExplanation === careerId ? null : careerId);
  };

  const getFilteredAndSortedCareers = () => {
    let filtered = sortedCareers.filter(career => {
      if (career.cfScore < filterMinScore) return false;
      
      if (priorityFilter === 'design') {
        return career.activeRules.some(rule => 
          rule.criteriaId.includes('kreativitas') || 
          rule.criteriaId.includes('desain_ui')
        );
      } else if (priorityFilter === 'logic') {
        return career.activeRules.some(rule => 
          rule.criteriaId.includes('algoritma') || 
          rule.criteriaId.includes('analitis') || 
          rule.criteriaId.includes('data_analysis')
        );
      }
      
      return true;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'cf':
          return b.cfScore - a.cfScore;
        case 'saw':
          return b.score - a.score;
        case 'combined':
        default:
          return (b.cfScore + b.score) - (a.cfScore + a.score);
      }
    });
  };

  const filteredCareers = getFilteredAndSortedCareers();

  return (
    <div className="results-container">
      <div className="results-header">
        <h1>Rekomendasi Karir IT Untuk Anda</h1>
        <p>Hasil analisis menggunakan metode Certainty Factor (CF) dan MCDM dengan algoritma SAW</p>
        <div className="methodology-note">
          <span className="methodology-icon">🧠</span>
          <span>Sistem pakar telah menganalisis profil Anda dengan tingkat keyakinan yang dapat dijelaskan</span>
        </div>
      </div>
      
      {/* Feature 3: What-If Analysis Controls */}
      <div className="analysis-controls">
        <h3>🔍 Analisis Interaktif</h3>
        <div className="controls-grid">
          <div className="control-group">
            <label>Filter Skor Minimum:</label>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={filterMinScore}
              onChange={(e) => setFilterMinScore(parseInt(e.target.value))}
              className="filter-slider"
            />
            <span>{filterMinScore}%</span>
          </div>
          
          <div className="control-group">
            <label>Urutkan Berdasarkan:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)} className="sort-select">
              <option value="cf">Certainty Factor</option>
              <option value="saw">SAW Score</option>
              <option value="combined">Kombinasi</option>
            </select>
          </div>
          
          <div className="control-group">
            <label>Prioritas Karir:</label>
            <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value as any)} className="priority-select">
              <option value="all">Semua Karir</option>
              <option value="design">Fokus Desain & Visual</option>
              <option value="logic">Fokus Logika & Data</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="results-list">
        {filteredCareers.map((career, index) => (
          <div key={career.id} className={`recommendation-card ${index === 0 ? 'top-recommendation' : ''}`}>
            <div className="card-header">
              <div className="rank-section">
                <div className={`rank ${index === 0 ? 'rank-1' : ''}`}>{index + 1}</div>
                {index === 0 && <span className="best-match">Terbaik</span>}
              </div>
              <div className="score-section">
                {renderScoreVisualization(career)}
              </div>
            </div>
            
            <div className="card-content">
              <h3 className="career-title">{career.name}</h3>
              <p className="career-description">{career.description}</p>
              
              {/* Feature 2: Explanation Facility */}
              <div className="explanation-section">
                <button 
                  className="explanation-toggle"
                  onClick={() => handleShowExplanation(career.id)}
                >
                  <span className="explanation-icon">🔍</span>
                  {showExplanation === career.id ? 'Sembunyikan Penjelasan' : 'Lihat Alasan Rekomendasi'}
                </button>
                
                {showExplanation === career.id && (
                  <div className="explanation-details">
                    <h4 className="explanation-title">
                      <span className="explanation-icon">💡</span>
                      Mengapa {career.name} Direkomendasikan?
                    </h4>
                    
                    <div className="active-rules">
                      <h5>Aturan Pakar yang Aktif:</h5>
                      <ul className="rules-list">
                        {career.activeRules.map((rule, idx) => (
                          <li key={idx} className="rule-item">
                            <strong>CF: {(rule.cf_pakar * 100).toFixed(0)}%</strong> - {rule.description}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="justification-summary">
                      <h5>Ringkasan Kesesuaian:</h5>
                      <ul className="justification-list">
                        {career.justifications.map((justification, idx) => (
                          <li key={idx} className="justification-item">
                            {justification}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
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
