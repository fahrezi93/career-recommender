
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
    <form onSubmit={handleSubmit} className="questionnaire-form">
      <h2>Minat & Preferensi</h2>
      <p>Pilih semua yang sesuai dengan minat Anda.</p>
      <div className="question-group">
        {interestQuestions.map(question => (
          <div key={question.id} className="checkbox-container">
            <input
              type="checkbox"
              id={question.id}
              checked={selectedAnswers.has(question.id)}
              onChange={() => handleCheckboxChange(question.id)}
            />
            <label htmlFor={question.id}>{question.text}</label>
          </div>
        ))}
      </div>

      <h2>Keterampilan & Teknologi</h2>
      <p>Pilih teknologi atau keahlian yang sudah Anda miliki atau ingin pelajari.</p>
      <div className="question-group skills">
        {skillQuestions.map(question => (
          <div key={question.id} className="checkbox-container skill-tag">
            <input
              type="checkbox"
              id={question.id}
              checked={selectedAnswers.has(question.id)}
              onChange={() => handleCheckboxChange(question.id)}
            />
            <label htmlFor={question.id}>{question.text}</label>
          </div>
        ))}
      </div>

      <button type="submit" className="submit-btn">Dapatkan Rekomendasi</button>
    </form>
  );
};

export default Questionnaire;
