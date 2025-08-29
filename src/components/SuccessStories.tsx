import React from 'react';
import './SuccessStories.css';

interface Props {
  onBack: () => void;
}

const SuccessStories: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="success-stories-page">
      {/* Hero Section */}
      <section className="stories-hero">
        <div className="stories-hero-content">
          <h1>Kisah Sukses</h1>
          <p>Inspirasi dari para profesional yang telah mengubah hidup mereka melalui CareerGuide</p>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="featured-story-section">
        <div className="featured-story-container">
          <div className="featured-story">
            <div className="story-content">
              <div className="story-quote">"</div>
              <h2>Dari Fresh Graduate ke Senior Developer dalam 2 Tahun</h2>
              <p className="story-text">
                "Setelah lulus kuliah, saya bingung harus mulai dari mana. CareerGuide membantu saya menemukan passion di bidang web development dan memberikan roadmap yang jelas. Dalam 2 tahun, saya berhasil naik dari junior menjadi senior developer dengan gaji 3x lipat!"
              </p>
              <div className="story-author">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" 
                  alt="Rizki Pratama" 
                  className="author-photo"
                />
                <div className="author-info">
                  <h3>Rizki Pratama</h3>
                  <p>Senior Full Stack Developer di Tokopedia</p>
                  <div className="story-stats">
                    <span>Gaji: Rp 25jt/bulan</span>
                    <span>Waktu: 2 tahun</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=400&fit=crop" 
                alt="Success story" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="stories-grid-section">
        <div className="stories-grid-container">
          <h2>Lebih Banyak Kisah Inspiratif</h2>
          
          <div className="stories-grid">
            <div className="story-card">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=200&fit=crop" 
                alt="Sarah Putri" 
                className="story-image"
              />
              <div className="story-card-content">
                <h3>Career Switch dari Marketing ke Data Science</h3>
                <p>"Dengan panduan CareerGuide, saya berhasil beralih karir dari marketing ke data science. Sekarang bekerja sebagai Data Scientist di Gojek dengan passion yang tinggi!"</p>
                <div className="story-author-mini">
                  <strong>Sarah Putri</strong>
                  <span>Data Scientist - Gojek</span>
                </div>
                <div className="story-achievement">
                  <span className="achievement-tag">Career Switch</span>
                  <span className="achievement-tag">Gaji 2x Lipat</span>
                </div>
              </div>
            </div>

            <div className="story-card">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=200&fit=crop" 
                alt="Budi Santoso" 
                className="story-image"
              />
              <div className="story-card-content">
                <h3>Dari Freelancer ke Tech Lead</h3>
                <p>"CareerGuide membantu saya memahami skill apa yang perlu dikembangkan. Dari freelancer, sekarang saya menjadi Tech Lead di startup unicorn!"</p>
                <div className="story-author-mini">
                  <strong>Budi Santoso</strong>
                  <span>Tech Lead - Bukalapak</span>
                </div>
                <div className="story-achievement">
                  <span className="achievement-tag">Leadership Role</span>
                  <span className="achievement-tag">Startup Unicorn</span>
                </div>
              </div>
            </div>

            <div className="story-card">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" 
                alt="Ahmad Fauzi" 
                className="story-image"
              />
              <div className="story-card-content">
                <h3>Membangun Startup Sendiri</h3>
                <p>"Setelah konsultasi dengan CareerGuide, saya memutuskan untuk membangun startup sendiri. Sekarang perusahaan saya sudah mendapat funding Series A!"</p>
                <div className="story-author-mini">
                  <strong>Ahmad Fauzi</strong>
                  <span>CEO & Founder - TechStart</span>
                </div>
                <div className="story-achievement">
                  <span className="achievement-tag">Entrepreneur</span>
                  <span className="achievement-tag">Series A</span>
                </div>
              </div>
            </div>

            <div className="story-card">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=200&fit=crop" 
                alt="Siti Nurhaliza" 
                className="story-image"
              />
              <div className="story-card-content">
                <h3>Remote Work di Perusahaan Global</h3>
                <p>"Dengan strategi LinkedIn yang diajarkan CareerGuide, saya berhasil mendapat pekerjaan remote di perusahaan Silicon Valley!"</p>
                <div className="story-author-mini">
                  <strong>Siti Nurhaliza</strong>
                  <span>Software Engineer - Google</span>
                </div>
                <div className="story-achievement">
                  <span className="achievement-tag">Remote Work</span>
                  <span className="achievement-tag">Silicon Valley</span>
                </div>
              </div>
            </div>

            <div className="story-card">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=200&fit=crop" 
                alt="Dedi Kurniawan" 
                className="story-image"
              />
              <div className="story-card-content">
                <h3>Naik Jabatan dalam 6 Bulan</h3>
                <p>"Roadmap karir yang dibuat CareerGuide sangat jelas dan actionable. Dalam 6 bulan saya berhasil naik dari Junior ke Senior Developer!"</p>
                <div className="story-author-mini">
                  <strong>Dedi Kurniawan</strong>
                  <span>Senior Developer - Traveloka</span>
                </div>
                <div className="story-achievement">
                  <span className="achievement-tag">Fast Track</span>
                  <span className="achievement-tag">6 Bulan</span>
                </div>
              </div>
            </div>

            <div className="story-card">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" 
                alt="Andi Wijaya" 
                className="story-image"
              />
              <div className="story-card-content">
                <h3>Masuk Big Tech Company</h3>
                <p>"Persiapan interview yang diberikan CareerGuide sangat membantu. Akhirnya saya diterima di Microsoft sebagai Cloud Architect!"</p>
                <div className="story-author-mini">
                  <strong>Andi Wijaya</strong>
                  <span>Cloud Architect - Microsoft</span>
                </div>
                <div className="story-achievement">
                  <span className="achievement-tag">Big Tech</span>
                  <span className="achievement-tag">Cloud Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="success-stats-section">
        <div className="success-stats-container">
          <h2>Pencapaian Klien Kami</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Klien Mendapat Pekerjaan Baru</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3.2x</div>
              <div className="stat-label">Rata-rata Kenaikan Gaji</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6 Bulan</div>
              <div className="stat-label">Rata-rata Waktu Career Switch</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Profesional Terbantu</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="stories-cta-section">
        <div className="stories-cta-container">
          <h2>Siap Menjadi Success Story Berikutnya?</h2>
          <p>Bergabunglah dengan ratusan profesional yang telah mengubah hidup mereka</p>
          <button onClick={onBack} className="cta-button">
            Mulai Perjalanan Anda
          </button>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
