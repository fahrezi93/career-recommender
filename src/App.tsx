import { useState } from 'react';
import './App.css';
import { CAREER_PATHS, QUESTIONS, RULES } from './data/knowledgeBase';
import Questionnaire from './components/Questionnaire';
import Results from './components/Results';
import Home from './components/Home';

// Definisikan tipe untuk hasil rekomendasi agar lebih kuat
interface Recommendation {
  id: string;
  name: string;
  description: string;
  score: number;
}

type View = 'home' | 'questionnaire' | 'results';

function App() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [currentView, setCurrentView] = useState<View>('home');

  const handleGetRecommendations = (selectedIds: Set<string>) => {
    // 1. Inisialisasi skor untuk setiap karir
    const scores: { [key: string]: number } = {};
    CAREER_PATHS.forEach(path => {
      scores[path.id] = 0;
    });

    // 2. Hitung skor berdasarkan jawaban
    selectedIds.forEach(questionId => {
      RULES.forEach(rule => {
        if (rule.questionId === questionId) {
          scores[rule.careerId] += rule.score;
        }
      });
    });

    // 3. Ubah objek skor menjadi array dan gabungkan dengan data karir
    const calculatedCareers = CAREER_PATHS.map(path => ({
      ...path,
      score: scores[path.id],
    }));

    // 4. Urutkan karir berdasarkan skor dari tertinggi ke terendah
    const sortedCareers = calculatedCareers.sort((a, b) => b.score - a.score);

    // 5. Simpan hasil dan tampilkan halaman hasil
    setRecommendations(sortedCareers);
    setCurrentView('results');
  };

  const handleReset = () => {
    setCurrentView('home');
    setRecommendations([]);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'questionnaire':
        return <Questionnaire questions={QUESTIONS} onSubmit={handleGetRecommendations} />;
      case 'results':
        return <Results sortedCareers={recommendations} onReset={handleReset} />;
      case 'home':
      default:
        return <Home onStart={() => setCurrentView('questionnaire')} />;
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Sistem Pakar Rekomendasi Karir IT</h1>
      </header>
      <main>
        {renderContent()}
      </main>
      <footer>
        <p>Dibangun dengan React, TypeScript, dan Vite.</p>
      </footer>
    </div>
  );
}

export default App;