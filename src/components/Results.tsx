
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
      <h2>Rekomendasi Karir Untuk Anda</h2>
      <p>Berikut adalah jalur karir yang paling sesuai berdasarkan jawaban Anda.</p>
      <div className="results-list">
        {sortedCareers.map((career, index) => (
          <div key={career.id} className="result-card">
            <span className="rank">#{index + 1}</span>
            <div className="card-content">
              <h3>{career.name}</h3>
              <p>{career.description}</p>
            </div>
            <div className="score-badge">Skor: {career.score}</div>
          </div>
        ))}
      </div>
      <button onClick={onReset} className="reset-btn">Ulangi Kuis</button>
    </div>
  );
};

export default Results;
