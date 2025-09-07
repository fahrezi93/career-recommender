
// Definisikan tipe data untuk konsistensi
export interface CareerPath {
  id: string;
  name: string;
  description: string;
  decisionMatrix: { [criteriaId: string]: number };
}

export interface Criteria {
  id: string;
  name: string;
  category: 'akademis' | 'soft_skill' | 'teknis';
  type: 'benefit' | 'cost';
}

export interface Question {
  id: string;
  text: string;
  category: 'interest' | 'skill' | 'academic';
  criteriaId?: string;
}

export interface Rule {
  questionId: string;
  careerId: string;
  score: number;
  cf_pakar: number; // Expert certainty factor (0.0 - 1.0)
}

export interface CFRule {
  criteriaId: string;
  careerId: string;
  cf_pakar: number; // Expert certainty factor
  description: string;
}

export interface MarketInsight {
  careerId: string;
  trendingSkills: string[];
  demandLevel: 'high' | 'medium' | 'low';
  averageSalary: string;
}

export interface UserInput {
  academicScores: { [subject: string]: number };
  skillRatings: { [skillId: string]: number };
  interestRatings: { [interestId: string]: number };
  criteriaWeights: {
    akademis: number;
    soft_skill: number;
    teknis: number;
  };
  // Certainty Factor additions
  academicConfidence: { [subject: string]: number }; // User certainty for academic scores
  skillConfidence: { [skillId: string]: number }; // User certainty for skills
  interestConfidence: { [interestId: string]: number }; // User certainty for interests
}

// Definisi kriteria untuk MCDM
export const CRITERIA: Criteria[] = [
  // Kriteria Akademis
  { id: "c_algoritma", name: "Algoritma & Pemrograman", category: "akademis", type: "benefit" },
  { id: "c_basis_data", name: "Basis Data", category: "akademis", type: "benefit" },
  { id: "c_jaringan", name: "Jaringan Komputer", category: "akademis", type: "benefit" },
  { id: "c_matematika", name: "Matematika & Statistik", category: "akademis", type: "benefit" },
  { id: "c_sistem_informasi", name: "Sistem Informasi", category: "akademis", type: "benefit" },
  
  // Kriteria Soft Skills & Minat
  { id: "c_kreativitas", name: "Kreativitas & Desain", category: "soft_skill", type: "benefit" },
  { id: "c_komunikasi", name: "Komunikasi & Kolaborasi", category: "soft_skill", type: "benefit" },
  { id: "c_analitis", name: "Pemikiran Analitis", category: "soft_skill", type: "benefit" },
  { id: "c_problem_solving", name: "Problem Solving", category: "soft_skill", type: "benefit" },
  { id: "c_detail_oriented", name: "Perhatian pada Detail", category: "soft_skill", type: "benefit" },
  
  // Kriteria Teknis
  { id: "c_pemrograman_web", name: "Pemrograman Web", category: "teknis", type: "benefit" },
  { id: "c_desain_ui", name: "Desain UI/UX", category: "teknis", type: "benefit" },
  { id: "c_backend_dev", name: "Backend Development", category: "teknis", type: "benefit" },
  { id: "c_data_analysis", name: "Analisis Data", category: "teknis", type: "benefit" },
  { id: "c_mobile_dev", name: "Mobile Development", category: "teknis", type: "benefit" },
  { id: "c_devops", name: "DevOps & Infrastructure", category: "teknis", type: "benefit" },
];

// Bobot default untuk kategori kriteria
export const DEFAULT_WEIGHTS = {
  akademis: 0.4,
  soft_skill: 0.3,
  teknis: 0.3
};

// Ekspor data utama dengan matriks keputusan
export const CAREER_PATHS: CareerPath[] = [
  { 
    id: "frontend", 
    name: "Frontend Developer", 
    description: "Membangun antarmuka pengguna (UI) yang interaktif dan responsif di sisi klien.",
    decisionMatrix: {
      c_algoritma: 4, c_basis_data: 2, c_jaringan: 2, c_matematika: 3, c_sistem_informasi: 3,
      c_kreativitas: 5, c_komunikasi: 4, c_analitis: 3, c_problem_solving: 4, c_detail_oriented: 4,
      c_pemrograman_web: 5, c_desain_ui: 5, c_backend_dev: 2, c_data_analysis: 2, c_mobile_dev: 3, c_devops: 2
    }
  },
  { 
    id: "backend", 
    name: "Backend Developer", 
    description: "Mengelola server, database, dan logika aplikasi di sisi server.",
    decisionMatrix: {
      c_algoritma: 5, c_basis_data: 5, c_jaringan: 4, c_matematika: 4, c_sistem_informasi: 4,
      c_kreativitas: 2, c_komunikasi: 3, c_analitis: 5, c_problem_solving: 5, c_detail_oriented: 5,
      c_pemrograman_web: 3, c_desain_ui: 1, c_backend_dev: 5, c_data_analysis: 3, c_mobile_dev: 2, c_devops: 4
    }
  },
  { 
    id: "fullstack", 
    name: "Full-Stack Developer", 
    description: "Menguasai baik frontend maupun backend, membangun aplikasi web secara menyeluruh.",
    decisionMatrix: {
      c_algoritma: 4, c_basis_data: 4, c_jaringan: 3, c_matematika: 3, c_sistem_informasi: 4,
      c_kreativitas: 4, c_komunikasi: 4, c_analitis: 4, c_problem_solving: 5, c_detail_oriented: 4,
      c_pemrograman_web: 5, c_desain_ui: 3, c_backend_dev: 4, c_data_analysis: 3, c_mobile_dev: 3, c_devops: 3
    }
  },
  { 
    id: "ui_ux", 
    name: "UI/UX Designer", 
    description: "Fokus pada desain tampilan (UI) dan pengalaman pengguna (UX) agar aplikasi mudah dan menyenangkan untuk digunakan.",
    decisionMatrix: {
      c_algoritma: 2, c_basis_data: 1, c_jaringan: 1, c_matematika: 2, c_sistem_informasi: 3,
      c_kreativitas: 5, c_komunikasi: 5, c_analitis: 4, c_problem_solving: 4, c_detail_oriented: 5,
      c_pemrograman_web: 2, c_desain_ui: 5, c_backend_dev: 1, c_data_analysis: 3, c_mobile_dev: 2, c_devops: 1
    }
  },
  { 
    id: "data_analyst", 
    name: "Data Analyst", 
    description: "Mengolah, menganalisis, dan memvisualisasikan data untuk mendapatkan wawasan bisnis.",
    decisionMatrix: {
      c_algoritma: 4, c_basis_data: 5, c_jaringan: 2, c_matematika: 5, c_sistem_informasi: 4,
      c_kreativitas: 3, c_komunikasi: 4, c_analitis: 5, c_problem_solving: 5, c_detail_oriented: 5,
      c_pemrograman_web: 2, c_desain_ui: 2, c_backend_dev: 2, c_data_analysis: 5, c_mobile_dev: 1, c_devops: 2
    }
  },
  { 
    id: "devops", 
    name: "DevOps Engineer", 
    description: "Mengotomatiskan proses pengembangan dan deployment aplikasi agar lebih cepat dan andal.",
    decisionMatrix: {
      c_algoritma: 4, c_basis_data: 3, c_jaringan: 5, c_matematika: 3, c_sistem_informasi: 4,
      c_kreativitas: 2, c_komunikasi: 4, c_analitis: 4, c_problem_solving: 5, c_detail_oriented: 5,
      c_pemrograman_web: 3, c_desain_ui: 1, c_backend_dev: 4, c_data_analysis: 2, c_mobile_dev: 2, c_devops: 5
    }
  },
  { 
    id: "mobile", 
    name: "Mobile Developer", 
    description: "Membangun aplikasi untuk perangkat mobile seperti Android dan iOS.",
    decisionMatrix: {
      c_algoritma: 4, c_basis_data: 3, c_jaringan: 3, c_matematika: 3, c_sistem_informasi: 3,
      c_kreativitas: 4, c_komunikasi: 3, c_analitis: 3, c_problem_solving: 4, c_detail_oriented: 4,
      c_pemrograman_web: 2, c_desain_ui: 4, c_backend_dev: 3, c_data_analysis: 2, c_mobile_dev: 5, c_devops: 2
    }
  },
];

// Data wawasan pasar kerja
export const MARKET_INSIGHTS: MarketInsight[] = [
  {
    careerId: "frontend",
    trendingSkills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue 3"],
    demandLevel: "high",
    averageSalary: "Rp 8-15 juta/bulan"
  },
  {
    careerId: "backend",
    trendingSkills: ["Node.js", "Python", "Go", "Microservices", "GraphQL"],
    demandLevel: "high",
    averageSalary: "Rp 9-18 juta/bulan"
  },
  {
    careerId: "fullstack",
    trendingSkills: ["MERN Stack", "T3 Stack", "Serverless", "Docker", "AWS"],
    demandLevel: "high",
    averageSalary: "Rp 10-20 juta/bulan"
  },
  {
    careerId: "ui_ux",
    trendingSkills: ["Figma", "Design Systems", "Prototyping", "User Research", "Accessibility"],
    demandLevel: "medium",
    averageSalary: "Rp 7-14 juta/bulan"
  },
  {
    careerId: "data_analyst",
    trendingSkills: ["Python", "SQL", "Tableau", "Power BI", "Machine Learning"],
    demandLevel: "high",
    averageSalary: "Rp 8-16 juta/bulan"
  },
  {
    careerId: "devops",
    trendingSkills: ["Kubernetes", "Terraform", "CI/CD", "Cloud Platforms", "Monitoring"],
    demandLevel: "high",
    averageSalary: "Rp 12-25 juta/bulan"
  },
  {
    careerId: "mobile",
    trendingSkills: ["React Native", "Flutter", "Swift", "Kotlin", "Cross-platform"],
    demandLevel: "medium",
    averageSalary: "Rp 8-16 juta/bulan"
  }
];

export const QUESTIONS: Question[] = [
  // Mata Kuliah Akademis
  { id: "academic_algoritma", text: "Algoritma & Pemrograman", category: 'academic', criteriaId: "c_algoritma" },
  { id: "academic_basis_data", text: "Basis Data", category: 'academic', criteriaId: "c_basis_data" },
  { id: "academic_jaringan", text: "Jaringan Komputer", category: 'academic', criteriaId: "c_jaringan" },
  { id: "academic_matematika", text: "Matematika & Statistik", category: 'academic', criteriaId: "c_matematika" },
  { id: "academic_sistem_informasi", text: "Sistem Informasi", category: 'academic', criteriaId: "c_sistem_informasi" },

  // Minat & Soft Skills
  { id: "interest_kreativitas", text: "Kreativitas & Desain Visual", category: 'interest', criteriaId: "c_kreativitas" },
  { id: "interest_komunikasi", text: "Komunikasi & Kolaborasi Tim", category: 'interest', criteriaId: "c_komunikasi" },
  { id: "interest_analitis", text: "Pemikiran Analitis", category: 'interest', criteriaId: "c_analitis" },
  { id: "interest_problem_solving", text: "Problem Solving", category: 'interest', criteriaId: "c_problem_solving" },
  { id: "interest_detail", text: "Perhatian pada Detail", category: 'interest', criteriaId: "c_detail_oriented" },

  // Keterampilan Teknis
  { id: "skill_web", text: "Pemrograman Web (HTML, CSS, JavaScript)", category: 'skill', criteriaId: "c_pemrograman_web" },
  { id: "skill_ui_ux", text: "Desain UI/UX (Figma, Prototyping)", category: 'skill', criteriaId: "c_desain_ui" },
  { id: "skill_backend", text: "Backend Development (API, Database)", category: 'skill', criteriaId: "c_backend_dev" },
  { id: "skill_data", text: "Analisis Data (SQL, Python, Visualization)", category: 'skill', criteriaId: "c_data_analysis" },
  { id: "skill_mobile", text: "Mobile Development (Android, iOS)", category: 'skill', criteriaId: "c_mobile_dev" },
  { id: "skill_devops", text: "DevOps & Infrastructure (Docker, Cloud)", category: 'skill', criteriaId: "c_devops" },
];

// Certainty Factor Rules - Expert knowledge with confidence levels
export const CF_RULES: CFRule[] = [
  // Frontend Developer Rules
  { criteriaId: "c_kreativitas", careerId: "frontend", cf_pakar: 0.9, description: "Kreativitas sangat penting untuk UI/UX yang menarik" },
  { criteriaId: "c_desain_ui", careerId: "frontend", cf_pakar: 0.95, description: "Kemampuan desain UI adalah inti dari frontend development" },
  { criteriaId: "c_pemrograman_web", careerId: "frontend", cf_pakar: 0.9, description: "HTML, CSS, JavaScript adalah fondasi frontend" },
  { criteriaId: "c_detail_oriented", careerId: "frontend", cf_pakar: 0.8, description: "Perhatian detail penting untuk konsistensi UI" },
  
  // Backend Developer Rules
  { criteriaId: "c_algoritma", careerId: "backend", cf_pakar: 0.9, description: "Algoritma kuat diperlukan untuk logika server yang efisien" },
  { criteriaId: "c_basis_data", careerId: "backend", cf_pakar: 0.95, description: "Penguasaan database adalah inti backend development" },
  { criteriaId: "c_backend_dev", careerId: "backend", cf_pakar: 0.95, description: "Kemampuan backend development adalah keharusan" },
  { criteriaId: "c_problem_solving", careerId: "backend", cf_pakar: 0.85, description: "Problem solving penting untuk debugging dan optimasi" },
  { criteriaId: "c_jaringan", careerId: "backend", cf_pakar: 0.8, description: "Pemahaman jaringan penting untuk API dan komunikasi server" },
  
  // Full-Stack Developer Rules
  { criteriaId: "c_pemrograman_web", careerId: "fullstack", cf_pakar: 0.9, description: "Kemampuan web development adalah dasar fullstack" },
  { criteriaId: "c_backend_dev", careerId: "fullstack", cf_pakar: 0.85, description: "Harus menguasai backend untuk menjadi fullstack" },
  { criteriaId: "c_problem_solving", careerId: "fullstack", cf_pakar: 0.9, description: "Problem solving diperlukan di semua layer aplikasi" },
  { criteriaId: "c_komunikasi", careerId: "fullstack", cf_pakar: 0.8, description: "Komunikasi penting untuk koordinasi frontend-backend" },
  
  // UI/UX Designer Rules
  { criteriaId: "c_kreativitas", careerId: "ui_ux", cf_pakar: 0.95, description: "Kreativitas adalah inti dari desain yang inovatif" },
  { criteriaId: "c_desain_ui", careerId: "ui_ux", cf_pakar: 0.95, description: "Kemampuan desain UI/UX adalah keharusan mutlak" },
  { criteriaId: "c_komunikasi", careerId: "ui_ux", cf_pakar: 0.85, description: "Komunikasi penting untuk memahami kebutuhan user" },
  { criteriaId: "c_analitis", careerId: "ui_ux", cf_pakar: 0.8, description: "Analisis user behavior dan data penting untuk UX" },
  
  // Data Analyst Rules
  { criteriaId: "c_matematika", careerId: "data_analyst", cf_pakar: 0.9, description: "Matematika dan statistik adalah fondasi analisis data" },
  { criteriaId: "c_data_analysis", careerId: "data_analyst", cf_pakar: 0.95, description: "Kemampuan analisis data adalah inti profesi ini" },
  { criteriaId: "c_analitis", careerId: "data_analyst", cf_pakar: 0.9, description: "Pemikiran analitis diperlukan untuk insight yang akurat" },
  { criteriaId: "c_basis_data", careerId: "data_analyst", cf_pakar: 0.85, description: "Penguasaan database penting untuk ekstraksi data" },
  
  // DevOps Engineer Rules
  { criteriaId: "c_jaringan", careerId: "devops", cf_pakar: 0.9, description: "Pemahaman jaringan krusial untuk infrastruktur" },
  { criteriaId: "c_devops", careerId: "devops", cf_pakar: 0.95, description: "Kemampuan DevOps tools dan practices adalah inti" },
  { criteriaId: "c_problem_solving", careerId: "devops", cf_pakar: 0.9, description: "Problem solving penting untuk troubleshooting sistem" },
  { criteriaId: "c_detail_oriented", careerId: "devops", cf_pakar: 0.85, description: "Perhatian detail krusial untuk konfigurasi yang akurat" },
  
  // Mobile Developer Rules
  { criteriaId: "c_mobile_dev", careerId: "mobile", cf_pakar: 0.95, description: "Kemampuan mobile development adalah keharusan" },
  { criteriaId: "c_algoritma", careerId: "mobile", cf_pakar: 0.8, description: "Algoritma penting untuk aplikasi mobile yang efisien" },
  { criteriaId: "c_desain_ui", careerId: "mobile", cf_pakar: 0.8, description: "UI design penting untuk user experience mobile" },
  { criteriaId: "c_problem_solving", careerId: "mobile", cf_pakar: 0.8, description: "Problem solving diperlukan untuk debugging aplikasi mobile" }
];

// Certainty Factor Calculation Functions
export const combineCF = (cf1: number, cf2: number): number => {
  // CF combination formula: CF(A,B) = CF(A) + CF(B) * (1 - CF(A))
  return cf1 + cf2 * (1 - cf1);
};

export const calculateCFScore = (userInput: UserInput): { careerId: string; cfScore: number; activeRules: CFRule[]; justifications: string[] }[] => {
  const results: { careerId: string; cfScore: number; activeRules: CFRule[]; justifications: string[] }[] = [];
  
  // Get unique career IDs
  const careerIds = [...new Set(CF_RULES.map(rule => rule.careerId))];
  
  careerIds.forEach(careerId => {
    const careerRules = CF_RULES.filter(rule => rule.careerId === careerId);
    let combinedCF = 0;
    const activeRules: CFRule[] = [];
    const justifications: string[] = [];
    
    careerRules.forEach(rule => {
      let userScore = 0;
      let userConfidence = 0;
      
      // Get user score and confidence based on criteria category
      const criteria = CRITERIA.find(c => c.id === rule.criteriaId);
      if (!criteria) return;
      
      if (criteria.category === 'akademis') {
        const academicKey = criteria.id.replace('c_', '');
        userScore = (userInput.academicScores[academicKey] || 0) / 20; // Normalize to 0-5
        userConfidence = userInput.academicConfidence[academicKey] || 0.5;
      } else if (criteria.category === 'soft_skill') {
        userScore = (userInput.interestRatings[criteria.id] || 0) / 5; // Normalize to 0-1
        userConfidence = userInput.interestConfidence[criteria.id] || 0.5;
      } else if (criteria.category === 'teknis') {
        userScore = (userInput.skillRatings[criteria.id] || 0) / 5; // Normalize to 0-1
        userConfidence = userInput.skillConfidence[criteria.id] || 0.5;
      }
      
      // Calculate rule CF: CF_rule = cf_pakar * cf_user * user_score
      const cf_user = userConfidence;
      const ruleCF = rule.cf_pakar * cf_user * userScore;
      
      // Only consider rules with significant contribution
      if (ruleCF > 0.1) {
        activeRules.push(rule);
        justifications.push(`${criteria.name}: ${rule.description} (CF: ${(ruleCF * 100).toFixed(1)}%)`);
        
        // Combine with existing CF
        if (combinedCF === 0) {
          combinedCF = ruleCF;
        } else {
          combinedCF = combineCF(combinedCF, ruleCF);
        }
      }
    });
    
    results.push({
      careerId,
      cfScore: combinedCF,
      activeRules,
      justifications: justifications.slice(0, 4) // Top 4 justifications
    });
  });
  
  return results.sort((a, b) => b.cfScore - a.cfScore);
};

// SAW Algorithm Implementation
export const calculateSAW = (userInput: UserInput): { careerId: string; score: number; justifications: string[] }[] => {
  const results: { careerId: string; score: number; justifications: string[] }[] = [];

  CAREER_PATHS.forEach(career => {
    let totalScore = 0;
    const justifications: string[] = [];
    const categoryScores = { akademis: 0, soft_skill: 0, teknis: 0 };
    const categoryCounts = { akademis: 0, soft_skill: 0, teknis: 0 };

    CRITERIA.forEach(criteria => {
      const careerScore = career.decisionMatrix[criteria.id] || 0;
      let userScore = 0;

      // Get user score based on criteria category
      if (criteria.category === 'akademis') {
        const academicKey = criteria.id.replace('c_', '');
        userScore = userInput.academicScores[academicKey] || 0;
        userScore = userScore / 20; // Normalize from 0-100 to 0-5
      } else if (criteria.category === 'soft_skill') {
        const interestKey = criteria.id;
        userScore = userInput.interestRatings[interestKey] || 0;
      } else if (criteria.category === 'teknis') {
        const skillKey = criteria.id;
        userScore = userInput.skillRatings[skillKey] || 0;
      }

      // Normalize scores (both career and user scores are 1-5)
      const normalizedCareerScore = careerScore / 5;
      const normalizedUserScore = userScore / 5;
      
      // Calculate weighted score
      const weight = userInput.criteriaWeights[criteria.category];
      const criteriaScore = normalizedCareerScore * normalizedUserScore * weight;
      
      totalScore += criteriaScore;
      categoryScores[criteria.category] += criteriaScore;
      categoryCounts[criteria.category]++;

      // Add justification for high-contributing criteria
      if (criteriaScore > 0.15) {
        justifications.push(`${criteria.name}: Kesesuaian tinggi (${Math.round(criteriaScore * 100)}%)`);
      }
    });

    // Calculate average scores per category for justification
    Object.keys(categoryScores).forEach(category => {
      const cat = category as keyof typeof categoryScores;
      if (categoryCounts[cat] > 0) {
        categoryScores[cat] = categoryScores[cat] / categoryCounts[cat];
      }
    });

    results.push({
      careerId: career.id,
      score: totalScore,
      justifications: justifications.slice(0, 3) // Top 3 justifications
    });
  });

  return results.sort((a, b) => b.score - a.score);
};
