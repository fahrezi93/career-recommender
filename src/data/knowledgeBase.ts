
// Definisikan tipe data untuk konsistensi
export interface CareerPath {
  id: string;
  name: string;
  description: string;
}

export interface Question {
  id: string;
  text: string;
  category: 'interest' | 'skill';
}

export interface Rule {
  questionId: string;
  careerId: string;
  score: number;
}

// Ekspor data utama
export const CAREER_PATHS: CareerPath[] = [
  { id: "frontend", name: "Frontend Developer", description: "Membangun antarmuka pengguna (UI) yang interaktif dan responsif di sisi klien." },
  { id: "backend", name: "Backend Developer", description: "Mengelola server, database, dan logika aplikasi di sisi server." },
  { id: "fullstack", name: "Full-Stack Developer", description: "Menguasai baik frontend maupun backend, membangun aplikasi web secara menyeluruh." },
  { id: "ui_ux", name: "UI/UX Designer", description: "Fokus pada desain tampilan (UI) dan pengalaman pengguna (UX) agar aplikasi mudah dan menyenangkan untuk digunakan." },
  { id: "data_analyst", name: "Data Analyst", description: "Mengolah, menganalisis, dan memvisualisasikan data untuk mendapatkan wawasan bisnis." },
  { id: "devops", name: "DevOps Engineer", description: "Mengotomatiskan proses pengembangan dan deployment aplikasi agar lebih cepat dan andal." },
  { id: "mobile", name: "Mobile Developer", description: "Membangun aplikasi untuk perangkat mobile seperti Android dan iOS." },
];

export const QUESTIONS: Question[] = [
  // Minat
  { id: "q_visual", text: "Saya sangat peduli dengan tampilan visual dan estetika sebuah produk.", category: 'interest' },
  { id: "q_logic", text: "Saya menikmati memecahkan masalah kompleks dengan logika dan algoritma.", category: 'interest' },
  { id: "q_data", text: "Saya senang bekerja dengan angka, menemukan pola, dan menarik kesimpulan dari data.", category: 'interest' },
  { id: "q_structure", text: "Saya suka merancang sistem dan arsitektur yang efisien dan terstruktur.", category: 'interest' },
  { id: "q_automation", text: "Saya tertarik untuk mengotomatiskan tugas-tugas yang berulang.", category: 'interest' },
  { id: "q_user_experience", text: "Saya ingin memastikan pengguna memiliki pengalaman terbaik saat menggunakan aplikasi.", category: 'interest' },
  { id: "q_mobile_first", text: "Saya lebih tertarik mengembangkan aplikasi untuk smartphone daripada untuk web.", category: 'interest' },

  // Skill
  { id: "s_html_css", text: "HTML & CSS", category: 'skill' },
  { id: "s_javascript", text: "JavaScript / TypeScript", category: 'skill' },
  { id: "s_react_vue", text: "React / Vue / Angular", category: 'skill' },
  { id: "s_figma", text: "Figma / Sketch / Adobe XD", category: 'skill' },
  { id: "s_sql", text: "SQL / NoSQL", category: 'skill' },
  { id: "s_python_node", text: "Python / Node.js / Java / Go", category: 'skill' },
  { id: "s_docker", text: "Docker / Kubernetes", category: 'skill' },
  { id: "s_ci_cd", text: "CI/CD (Jenkins, GitLab CI)", category: 'skill' },
  { id: "s_kotlin_swift", text: "Kotlin / Swift / React Native", category: 'skill' },
];

export const RULES: Rule[] = [
  // Frontend
  { questionId: "q_visual", careerId: "frontend", score: 2 },
  { questionId: "q_user_experience", careerId: "frontend", score: 2 },
  { questionId: "s_html_css", careerId: "frontend", score: 1 },
  { questionId: "s_javascript", careerId: "frontend", score: 1 },
  { questionId: "s_react_vue", careerId: "frontend", score: 1 },

  // Backend
  { questionId: "q_logic", careerId: "backend", score: 2 },
  { questionId: "q_structure", careerId: "backend", score: 2 },
  { questionId: "s_python_node", careerId: "backend", score: 1 },
  { questionId: "s_sql", careerId: "backend", score: 1 },

  // Full-Stack (mendapat skor dari keduanya)
  { questionId: "q_visual", careerId: "fullstack", score: 1 },
  { questionId: "q_logic", careerId: "fullstack", score: 1 },
  { questionId: "q_structure", careerId: "fullstack", score: 1 },
  { questionId: "s_html_css", careerId: "fullstack", score: 1 },
  { questionId: "s_javascript", careerId: "fullstack", score: 1 },
  { questionId: "s_react_vue", careerId: "fullstack", score: 1 },
  { questionId: "s_python_node", careerId: "fullstack", score: 1 },
  { questionId: "s_sql", careerId: "fullstack", score: 1 },

  // UI/UX Designer
  { questionId: "q_visual", careerId: "ui_ux", score: 2 },
  { questionId: "q_user_experience", careerId: "ui_ux", score: 2 },
  { questionId: "s_figma", careerId: "ui_ux", score: 1 },

  // Data Analyst
  { questionId: "q_data", careerId: "data_analyst", score: 2 },
  { questionId: "q_logic", careerId: "data_analyst", score: 1 },
  { questionId: "s_sql", careerId: "data_analyst", score: 1 },

  // DevOps
  { questionId: "q_automation", careerId: "devops", score: 2 },
  { questionId: "q_structure", careerId: "devops", score: 2 },
  { questionId: "s_docker", careerId: "devops", score: 1 },
  { questionId: "s_ci_cd", careerId: "devops", score: 1 },
  { questionId: "s_python_node", careerId: "devops", score: 1 },

  // Mobile
  { questionId: "q_mobile_first", careerId: "mobile", score: 2 },
  { questionId: "q_user_experience", careerId: "mobile", score: 1 },
  { questionId: "s_kotlin_swift", careerId: "mobile", score: 1 },
];
