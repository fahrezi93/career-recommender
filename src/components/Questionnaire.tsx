
import React, { useState } from 'react';
import type { Question } from '../data/knowledgeBase';
import './Questionnaire.css';

interface Props {
  questions: Question[];
  onSubmit: (selectedIds: Set<string>) => void;
}

const Questionnaire: React.FC<Props> = ({ questions, onSubmit }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Set<string>>(new Set());

  const handleCheckboxChange = (questionId: string) => {
    const newSelectedAnswers = new Set(selectedAnswers);
    if (newSelectedAnswers.has(questionId)) {
      newSelectedAnswers.delete(questionId);
    } else {
      newSelectedAnswers.add(questionId);
    }
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(selectedAnswers);
  };

  const interestQuestions = questions.filter(q => q.category === 'interest');
  const skillQuestions = questions.filter(q => q.category === 'skill');

  return (
    <div className="questionnaire-container">
      <h1 className="questionnaire-title">Temukan Karir IT Impian Anda</h1>
      <p className="questionnaire-description">Jawab pertanyaan berikut untuk mendapatkan rekomendasi karir yang paling sesuai dengan profil Anda</p>

      <form onSubmit={handleSubmit}>
        <div className="section">
          <h2 className="section-title">Minat & Preferensi</h2>
          <p className="section-description">Pilih semua area yang menarik minat Anda di bidang teknologi</p>
          <div className="question-group">
            {interestQuestions.map(question => (
              <div 
                key={question.id} 
                className={`checkbox-container ${selectedAnswers.has(question.id) ? 'checked' : ''}`}
                onClick={() => handleCheckboxChange(question.id)}
              >
                <input
                  type="checkbox"
                  id={question.id}
                  checked={selectedAnswers.has(question.id)}
                  onChange={() => {}}
                  readOnly
                />
                <label 
                  htmlFor={question.id} 
                  className="checkbox-label"
                >
                  {question.text}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Keterampilan & Teknologi</h2>
          <p className="section-description">Pilih teknologi atau keahlian yang sudah Anda miliki atau tertarik untuk dipelajari</p>
          <div className="question-group skills">
            {skillQuestions.map(question => (
              <div 
                key={question.id} 
                className={`skill-tag ${selectedAnswers.has(question.id) ? 'checked' : ''}`}
                onClick={() => handleCheckboxChange(question.id)}
              >
                <input
                  type="checkbox"
                  id={question.id}
                  checked={selectedAnswers.has(question.id)}
                  onChange={() => {}}
                  readOnly
                />
                <label 
                  htmlFor={question.id} 
                  className="checkbox-label"
                >
                  {question.text}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="submit-section">
          <button type="submit" className="submit-button">
            Dapatkan Rekomendasi Karir
          </button>
        </div>
      </form>
    </div>
  );
};

export default Questionnaire;
