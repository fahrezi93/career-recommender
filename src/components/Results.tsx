
import React from 'react';
import { CareerPath } from '../data/knowledgeBase';
import './Results.css';

interface Recommendation extends CareerPath {
  score: number;
}

interface Props {
  sortedCareers: Recommendation[];
  onReset: () => void;
}

const Results: React.FC<Props> = ({ sortedCareers, onReset }) => {
  return (
    <div className="results-container">
      <div className="results-header">
        <h1>Rekomendasi Karir IT Untuk Anda</h1>
        <p>Berikut adalah jalur karir yang paling sesuai berdasarkan analisis profil dan preferensi Anda</p>
      </div>
      
      <div className="results-list">
        {sortedCareers.map((career, index) => (
          <div key={career.id} className="result-card">
            <div className="rank">{index + 1}</div>
            <div className="card-content">
              <h3>{career.name}</h3>
              <p>{career.description}</p>
            </div>
            <div className="score-badge">Skor: {career.score}</div>
          </div>
        ))}
      </div>
      
      <div className="results-actions">
        <button onClick={onReset} className="reset-btn">
          Ulangi Tes
        </button>
        <button className="share-btn">
          Bagikan Hasil
        </button>
      </div>
    </div>
  );
};

export default Results;
