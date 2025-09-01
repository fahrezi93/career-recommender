import { useState } from 'react';
import './App.css';
import { CAREER_PATHS, QUESTIONS, RULES } from './data/knowledgeBase';
import Questionnaire from './components/Questionnaire';
import Results from './components/Results';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import SuccessStories from './components/SuccessStories';
import Blog from './components/Blog';

// Definisikan tipe untuk hasil rekomendasi agar lebih kuat
interface Recommendation {
  id: string;
  name: string;
  description: string;
  score: number;
}

type View = 'home' | 'questionnaire' | 'results' | 'about' | 'services' | 'success-stories' | 'blog';

function App() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [currentView, setCurrentView] = useState<View>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const handleNavigation = (view: View) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'questionnaire':
        return <Questionnaire questions={QUESTIONS} onSubmit={handleGetRecommendations} />;
      case 'results':
        return <Results sortedCareers={recommendations} onReset={handleReset} />;
      case 'about':
        return <About onBack={handleBackToHome} />;
      case 'services':
        return <Services onBack={handleBackToHome} />;
      case 'success-stories':
        return <SuccessStories onBack={handleBackToHome} />;
      case 'blog':
        return <Blog onBack={handleBackToHome} />;
      case 'home':
      default:
        return <Home onStart={() => setCurrentView('questionnaire')} />;
    }
  };

  return (
    <div className="container">
      <header className="modern-header">
        <div className="header-content">
          <div className="logo">
            <svg className="logo-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="14" fill="#07553B" stroke="#CED46A" strokeWidth="2"/>
              <path d="M12 10h8v2h-8v-2zm0 4h8v2h-8v-2zm0 4h6v2h-6v-2z" fill="#CED46A"/>
              <circle cx="9" cy="11" r="1" fill="#CED46A"/>
              <circle cx="9" cy="15" r="1" fill="#CED46A"/>
              <circle cx="9" cy="19" r="1" fill="#CED46A"/>
            </svg>
            <span className="logo-text">TalentPath</span>
          </div>
          <nav className="nav-menu">
            <button 
              onClick={() => handleNavigation('home')} 
              className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
            >
              Beranda
            </button>
            <button 
              onClick={() => handleNavigation('about')} 
              className={`nav-link ${currentView === 'about' ? 'active' : ''}`}
            >
              Tentang
            </button>
            <button 
              onClick={() => handleNavigation('services')} 
              className={`nav-link ${currentView === 'services' ? 'active' : ''}`}
            >
              Layanan
            </button>
            <button 
              onClick={() => handleNavigation('success-stories')} 
              className={`nav-link ${currentView === 'success-stories' ? 'active' : ''}`}
            >
              Kisah Sukses
            </button>
            <button 
              onClick={() => handleNavigation('blog')} 
              className={`nav-link ${currentView === 'blog' ? 'active' : ''}`}
            >
              Blog
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}>
            <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => handleNavigation('home')} 
                className={`mobile-nav-link ${currentView === 'home' ? 'active' : ''}`}
              >
                Beranda
              </button>
              <button 
                onClick={() => handleNavigation('about')} 
                className={`mobile-nav-link ${currentView === 'about' ? 'active' : ''}`}
              >
                Tentang
              </button>
              <button 
                onClick={() => handleNavigation('services')} 
                className={`mobile-nav-link ${currentView === 'services' ? 'active' : ''}`}
              >
                Layanan
              </button>
              <button 
                onClick={() => handleNavigation('success-stories')} 
                className={`mobile-nav-link ${currentView === 'success-stories' ? 'active' : ''}`}
              >
                Kisah Sukses
              </button>
              <button 
                onClick={() => handleNavigation('blog')} 
                className={`mobile-nav-link ${currentView === 'blog' ? 'active' : ''}`}
              >
                Blog
              </button>
            </nav>
          </div>
        )}
      </header>
      <main>
        {renderContent()}
      </main>
    </div>
  );
}

export default App;