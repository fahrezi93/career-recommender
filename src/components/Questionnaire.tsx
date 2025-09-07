import React, { useState } from 'react';
import './Questionnaire.css';

interface Question {
  id: string;
  text: string;
  category: string;
  criteriaId?: string;
}

interface UserInput {
  academicScores: { [key: string]: number };
  interestRatings: { [key: string]: number };
  skillRatings: { [key: string]: number };
  criteriaWeights: {
    akademis: number;
    soft_skill: number;
    teknis: number;
  };
  academicConfidence: { [key: string]: number };
  interestConfidence: { [key: string]: number };
  skillConfidence: { [key: string]: number };
}

interface Props {
  questions: Question[];
  onSubmit: (userInput: UserInput) => void;
}

const Questionnaire: React.FC<Props> = ({ questions, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [academicScores, setAcademicScores] = useState<{ [key: string]: number }>({});
  const [interestRatings, setInterestRatings] = useState<{ [key: string]: number }>({});
  const [skillRatings, setSkillRatings] = useState<{ [key: string]: number }>({});
  const [criteriaWeights, setCriteriaWeights] = useState({
    akademis: 40,
    soft_skill: 30,
    teknis: 30
  });
  // Certainty Factor states
  const [academicConfidence, setAcademicConfidence] = useState<{ [key: string]: number }>({});
  const [interestConfidence, setInterestConfidence] = useState<{ [key: string]: number }>({});
  const [skillConfidence, setSkillConfidence] = useState<{ [key: string]: number }>({});

  const academicQuestions = questions.filter(q => q.category === 'academic');
  const interestQuestions = questions.filter(q => q.category === 'interest');
  const skillQuestions = questions.filter(q => q.category === 'skill');

  const handleAcademicScoreChange = (questionId: string, score: number) => {
    const criteriaId = questions.find(q => q.id === questionId)?.criteriaId;
    if (criteriaId) {
      const key = criteriaId.replace('c_', '');
      setAcademicScores(prev => ({ ...prev, [key]: score }));
    }
  };

  const handleAcademicConfidenceChange = (questionId: string, confidence: number) => {
    const criteriaId = questions.find(q => q.id === questionId)?.criteriaId;
    if (criteriaId) {
      const key = criteriaId.replace('c_', '');
      setAcademicConfidence(prev => ({ ...prev, [key]: confidence }));
    }
  };

  const handleRatingChange = (questionId: string, rating: number, type: 'interest' | 'skill') => {
    const criteriaId = questions.find(q => q.id === questionId)?.criteriaId;
    if (criteriaId) {
      if (type === 'interest') {
        setInterestRatings(prev => ({ ...prev, [criteriaId]: rating }));
      } else {
        setSkillRatings(prev => ({ ...prev, [criteriaId]: rating }));
      }
    }
  };

  const handleConfidenceChange = (questionId: string, confidence: number, type: 'interest' | 'skill') => {
    const criteriaId = questions.find(q => q.id === questionId)?.criteriaId;
    if (criteriaId) {
      if (type === 'interest') {
        setInterestConfidence(prev => ({ ...prev, [criteriaId]: confidence }));
      } else {
        setSkillConfidence(prev => ({ ...prev, [criteriaId]: confidence }));
      }
    }
  };

  const handleWeightChange = (category: keyof typeof criteriaWeights, value: number) => {
    setCriteriaWeights(prev => ({ ...prev, [category]: value }));
  };

  const normalizeWeights = () => {
    const total = criteriaWeights.akademis + criteriaWeights.soft_skill + criteriaWeights.teknis;
    return {
      akademis: criteriaWeights.akademis / total,
      soft_skill: criteriaWeights.soft_skill / total,
      teknis: criteriaWeights.teknis / total
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userInput: UserInput = {
      academicScores,
      interestRatings,
      skillRatings,
      criteriaWeights: normalizeWeights(),
      academicConfidence,
      interestConfidence,
      skillConfidence
    };
    onSubmit(userInput);
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const renderStepIndicator = () => (
    <div className="step-indicator">
      {[1, 2, 3].map(step => (
        <div key={step} className={`step ${currentStep >= step ? 'active' : ''}`}>
          <div className="step-number">{step}</div>
          <div className="step-label">
            {step === 1 && 'Nilai Akademis'}
            {step === 2 && 'Minat & Keterampilan'}
            {step === 3 && 'Prioritas Anda'}
          </div>
        </div>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div className="step-content">
      <h2 className="section-title">Langkah 1: Input Nilai Akademis</h2>
      <p className="section-description">Masukkan nilai Anda (0-100) dan tingkat keyakinan untuk mata kuliah berikut:</p>
      <div className="academic-scores">
        {academicQuestions.map(question => (
          <div key={question.id} className="academic-input-cf">
            <label htmlFor={question.id} className="academic-label">
              {question.text}
            </label>
            <div className="input-group">
              <input
                type="number"
                id={question.id}
                min="0"
                max="100"
                value={academicScores[question.criteriaId?.replace('c_', '') || ''] || ''}
                onChange={(e) => handleAcademicScoreChange(question.id, parseInt(e.target.value) || 0)}
                className="academic-score-input"
                placeholder="0-100"
              />
              <select
                value={academicConfidence[question.criteriaId?.replace('c_', '') || ''] || 0.8}
                onChange={(e) => handleAcademicConfidenceChange(question.id, parseFloat(e.target.value))}
                className="confidence-select"
              >
                <option value={1.0}>Sangat Yakin (100%)</option>
                <option value={0.8}>Yakin (80%)</option>
                <option value={0.6}>Cukup Yakin (60%)</option>
                <option value={0.4}>Tidak Yakin (40%)</option>
                <option value={0.2}>Sangat Tidak Yakin (20%)</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="step-content">
      <h2 className="section-title">Langkah 2: Penilaian Diri</h2>
      
      <div className="subsection">
        <h3 className="subsection-title">Minat & Soft Skills</h3>
        <p className="section-description">Beri rating 1-5 dan tingkat keyakinan Anda di area berikut:</p>
        <div className="rating-group">
          {interestQuestions.map(question => (
            <div key={question.id} className="rating-item-cf">
              <label className="rating-label">{question.text}</label>
              <div className="rating-confidence-group">
                <div className="rating-scale">
                  {[1, 2, 3, 4, 5].map(rating => (
                    <button
                      key={rating}
                      type="button"
                      className={`rating-button ${interestRatings[question.criteriaId || ''] === rating ? 'active' : ''}`}
                      onClick={() => handleRatingChange(question.id, rating, 'interest')}
                    >
                      {rating}
                    </button>
                  ))}
                </div>
                <select
                  value={interestConfidence[question.criteriaId || ''] || 0.8}
                  onChange={(e) => handleConfidenceChange(question.id, parseFloat(e.target.value), 'interest')}
                  className="confidence-select-small"
                >
                  <option value={1.0}>Sangat Yakin (100%)</option>
                  <option value={0.8}>Yakin (80%)</option>
                  <option value={0.6}>Cukup Yakin (60%)</option>
                  <option value={0.4}>Tidak Yakin (40%)</option>
                  <option value={0.2}>Sangat Tidak Yakin (20%)</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="subsection">
        <h3 className="subsection-title">Keterampilan Teknis</h3>
        <p className="section-description">Beri rating 1-5 tingkat kemampuan dan keyakinan Anda:</p>
        <div className="rating-group">
          {skillQuestions.map(question => (
            <div key={question.id} className="rating-item-cf">
              <label className="rating-label">{question.text}</label>
              <div className="rating-confidence-group">
                <div className="rating-scale">
                  {[1, 2, 3, 4, 5].map(rating => (
                    <button
                      key={rating}
                      type="button"
                      className={`rating-button ${skillRatings[question.criteriaId || ''] === rating ? 'active' : ''}`}
                      onClick={() => handleRatingChange(question.id, rating, 'skill')}
                    >
                      {rating}
                    </button>
                  ))}
                </div>
                <select
                  value={skillConfidence[question.criteriaId || ''] || 0.8}
                  onChange={(e) => handleConfidenceChange(question.id, parseFloat(e.target.value), 'skill')}
                  className="confidence-select-small"
                >
                  <option value={1.0}>Sangat Yakin (100%)</option>
                  <option value={0.8}>Yakin (80%)</option>
                  <option value={0.6}>Cukup Yakin (60%)</option>
                  <option value={0.4}>Tidak Yakin (40%)</option>
                  <option value={0.2}>Sangat Tidak Yakin (20%)</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="step-content">
      <h2 className="section-title">Langkah 3: Tentukan Prioritas Anda</h2>
      <p className="section-description">Seberapa penting setiap kategori bagi Anda? (Total harus 100%)</p>
      
      <div className="weight-inputs">
        <div className="weight-item">
          <label className="weight-label">
            Nilai Akademis ({criteriaWeights.akademis}%)
          </label>
          <input
            type="range"
            min="10"
            max="70"
            value={criteriaWeights.akademis}
            onChange={(e) => handleWeightChange('akademis', parseInt(e.target.value))}
            className="weight-slider"
          />
        </div>
        
        <div className="weight-item">
          <label className="weight-label">
            Minat & Soft Skills ({criteriaWeights.soft_skill}%)
          </label>
          <input
            type="range"
            min="10"
            max="70"
            value={criteriaWeights.soft_skill}
            onChange={(e) => handleWeightChange('soft_skill', parseInt(e.target.value))}
            className="weight-slider"
          />
        </div>
        
        <div className="weight-item">
          <label className="weight-label">
            Keterampilan Teknis ({criteriaWeights.teknis}%)
          </label>
          <input
            type="range"
            min="10"
            max="70"
            value={criteriaWeights.teknis}
            onChange={(e) => handleWeightChange('teknis', parseInt(e.target.value))}
            className="weight-slider"
          />
        </div>
      </div>
      
      <div className="weight-total">
        Total: {criteriaWeights.akademis + criteriaWeights.soft_skill + criteriaWeights.teknis}%
      </div>
    </div>
  );

  return (
    <div className="questionnaire-container">
      <h1 className="questionnaire-title">Temukan Karir IT Impian Anda</h1>
      <p className="questionnaire-description">Sistem rekomendasi berbasis AI dengan metode MCDM untuk hasil yang lebih personal</p>

      {renderStepIndicator()}

      <form onSubmit={handleSubmit}>
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}

        <div className="navigation-buttons">
          {currentStep > 1 && (
            <button type="button" onClick={prevStep} className="nav-button prev-button">
              ← Sebelumnya
            </button>
          )}
          
          {currentStep < 3 ? (
            <button type="button" onClick={nextStep} className="nav-button next-button">
              Selanjutnya →
            </button>
          ) : (
            <button type="submit" className="submit-button">
              Dapatkan Rekomendasi Karir
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Questionnaire;
