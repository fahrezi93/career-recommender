import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Questionnaire from './components/Questionnaire';
import Results from './components/Results';
import About from './components/About';
import Services from './components/Services';
import DetailedServices from './components/DetailedServices';
import TesMintakBakat from './components/TesMintakBakat';
import KonsultasiKarir from './components/KonsultasiKarir';
import RekomendasiJalurKarir from './components/RekomendasiJalurKarir';
import PanduanSkillDevelopment from './components/PanduanSkillDevelopment';
import CareerRoadmap from './components/CareerRoadmap';
import AnalisisPotensiDiri from './components/AnalisisPotensiDiri';
import SuccessStories from './components/SuccessStories';
import Blog from './components/Blog';

import { CAREER_PATHS, QUESTIONS, calculateSAW, MARKET_INSIGHTS } from './data/knowledgeBase';
import type { UserInput } from './data/knowledgeBase';

// Definisikan tipe untuk hasil rekomendasi agar lebih kuat
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

type View = 'home' | 'questionnaire' | 'results' | 'about' | 'services' | 'success-stories' | 'blog';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [currentView, setCurrentView] = useState<View>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to top whenever the current view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  const handleGetRecommendations = (userInput: UserInput) => {
    // 1. Gunakan algoritma SAW untuk menghitung rekomendasi
    const sawResults = calculateSAW(userInput);

    // 2. Gabungkan dengan data karir dan wawasan pasar
    const recommendations: Recommendation[] = sawResults.map(result => {
      const career = CAREER_PATHS.find(path => path.id === result.careerId);
      const marketInsight = MARKET_INSIGHTS.find(insight => insight.careerId === result.careerId);
      
      if (!career) {
        throw new Error(`Career not found: ${result.careerId}`);
      }

      return {
        id: career.id,
        name: career.name,
        description: career.description,
        score: Math.round(result.score * 100), // Convert to percentage
        justifications: result.justifications,
        marketInsight: marketInsight ? {
          trendingSkills: marketInsight.trendingSkills,
          demandLevel: marketInsight.demandLevel,
          averageSalary: marketInsight.averageSalary
        } : undefined
      };
    });

    // 3. Simpan hasil dan tampilkan halaman hasil
    setRecommendations(recommendations);
    setCurrentView('results');
  };

  const handleReset = () => {
    setCurrentView('home');
    setRecommendations([]);
    // Scroll to top when resetting
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (view: View) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
    // Navigate using React Router
    if (view === 'home') {
      navigate('/');
    } else if (view === 'questionnaire') {
      navigate('/questionnaire');
    } else if (view === 'results') {
      navigate('/results');
    } else {
      navigate(`/${view}`);
    }
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    navigate('/');
    // Scroll to top when going back to home
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Update current view based on route
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setCurrentView('home');
    } else if (path === '/questionnaire') {
      setCurrentView('questionnaire');
    } else if (path === '/results') {
      setCurrentView('results');
    } else if (path === '/about') {
      setCurrentView('about');
    } else if (path === '/services') {
      setCurrentView('services');
    } else if (path === '/success-stories') {
      setCurrentView('success-stories');
    } else if (path === '/blog') {
      setCurrentView('blog');
    }
  }, [location.pathname]);


  const handleStartQuestionnaire = () => {
    handleNavigation('questionnaire');
  };

  const handleGetRecommendationsWithNavigation = (userInput: UserInput) => {
    handleGetRecommendations(userInput);
    handleNavigation('results');
  };

  const handleResetWithNavigation = () => {
    handleReset();
    handleNavigation('home');
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
              {/* Close Button */}
              <div className="mobile-menu-header">
                <button 
                  className="mobile-menu-close"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              
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
        <Routes>
          <Route path="/" element={<Home onStart={handleStartQuestionnaire} />} />
          <Route path="/questionnaire" element={<Questionnaire questions={QUESTIONS} onSubmit={handleGetRecommendationsWithNavigation} />} />
          <Route path="/results" element={<Results sortedCareers={recommendations} onReset={handleResetWithNavigation} />} />
          <Route path="/about" element={<About onBack={handleBackToHome} />} />
          <Route path="/services" element={<Services onBack={() => handleNavigation('home')} />} />
          <Route path="/layanan-kami" element={<DetailedServices onBack={() => handleNavigation('home')} />} />
          <Route path="/tes-minat-bakat" element={<TesMintakBakat onBack={() => handleNavigation('services')} />} />
          <Route path="/konsultasi-karir" element={<KonsultasiKarir onBack={() => handleNavigation('services')} />} />
          <Route path="/rekomendasi-jalur-karir" element={<RekomendasiJalurKarir onBack={() => handleNavigation('services')} />} />
          <Route path="/panduan-skill-development" element={<PanduanSkillDevelopment onBack={() => handleNavigation('services')} />} />
          <Route path="/career-roadmap" element={<CareerRoadmap onBack={() => handleNavigation('services')} />} />
          <Route path="/analisis-potensi-diri" element={<AnalisisPotensiDiri onBack={() => handleNavigation('services')} />} />
          <Route path="/success-stories" element={<SuccessStories onBack={handleBackToHome} />} />
          <Route path="/blog" element={<Blog onBack={handleBackToHome} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;