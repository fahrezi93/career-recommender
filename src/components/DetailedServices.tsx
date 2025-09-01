import React from 'react';
import './DetailedServices.css';

interface Props {
  onBack: () => void;
}

const DetailedServices: React.FC<Props> = ({ onBack }) => {
  const services = [
    {
      id: 1,
      icon: '🎯',
      title: 'Tes Minat & Bakat',
      description: 'Analisis mendalam untuk menemukan passion dan bakat alami Anda di bidang teknologi menggunakan metode psikometri modern.',
      features: [
        'Assessment berbasis AI dengan 50+ parameter',
        'Analisis kepribadian dan preferensi kerja',
        'Laporan detail dengan visualisasi interaktif',
        'Rekomendasi bidang spesialisasi'
      ],
      duration: '45-60 menit',
      price: 'Rp 150.000'
    },
    {
      id: 2,
      icon: '💼',
      title: 'Konsultasi Karir',
      description: 'Sesi one-on-one dengan career counselor berpengalaman untuk merencanakan strategi pengembangan karir yang tepat.',
      features: [
        'Konsultasi personal dengan expert',
        'Review CV dan portfolio',
        'Strategi pencarian kerja',
        'Tips interview dan negosiasi gaji'
      ],
      duration: '60 menit',
      price: 'Rp 200.000'
    },
    {
      id: 3,
      icon: '🛤️',
      title: 'Rekomendasi Jalur Karir',
      description: 'Panduan komprehensif berdasarkan AI untuk menentukan jalur karir IT yang paling sesuai dengan profil dan tujuan Anda.',
      features: [
        'Roadmap karir 3-5 tahun ke depan',
        'Skill gap analysis',
        'Rekomendasi sertifikasi dan training',
        'Target posisi dan timeline'
      ],
      duration: '30 menit',
      price: 'Rp 100.000'
    },
    {
      id: 4,
      icon: '📚',
      title: 'Panduan Skill Development',
      description: 'Program pembelajaran terstruktur untuk mengembangkan keterampilan teknis dan soft skills yang dibutuhkan industri.',
      features: [
        'Kurikulum disesuaikan dengan tren industri',
        'Learning path yang dipersonalisasi',
        'Project-based learning',
        'Mentoring dari praktisi berpengalaman'
      ],
      duration: '3-6 bulan',
      price: 'Rp 500.000'
    },
    {
      id: 5,
      icon: '🗺️',
      title: 'Career Roadmap',
      description: 'Peta jalan karir yang detail dengan milestone, target, dan strategi untuk mencapai posisi impian Anda di industri IT.',
      features: [
        'Roadmap visual yang mudah dipahami',
        'Milestone dan target yang terukur',
        'Strategi networking dan personal branding',
        'Update berkala sesuai perkembangan industri'
      ],
      duration: '90 menit',
      price: 'Rp 250.000'
    },
    {
      id: 6,
      icon: '🔍',
      title: 'Analisis Potensi Diri',
      description: 'Evaluasi komprehensif terhadap kekuatan, kelemahan, dan potensi pengembangan diri dalam konteks karir IT.',
      features: [
        'Assessment 360 derajat',
        'Analisis SWOT personal',
        'Identifikasi area pengembangan',
        'Action plan untuk improvement'
      ],
      duration: '120 menit',
      price: 'Rp 300.000'
    }
  ];

  return (
    <div className="detailed-services-page">
      <section className="detailed-services-hero">
        <div className="detailed-services-hero-content">
          <h1>Layanan Kami</h1>
          <p>Solusi lengkap untuk pengembangan karir IT Anda dengan pendekatan yang personal dan berbasis data</p>
        </div>
      </section>

      <section className="main-detailed-services-section">
        <div className="main-detailed-services-container">
          <div className="detailed-services-grid">
            {services.map((service, index) => (
              <div key={service.id} className={`detailed-service-card ${index === 1 ? 'featured' : ''}`}>
                {index === 1 && <div className="featured-badge">Paling Populer</div>}
                <div className="detailed-service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="detailed-service-description">{service.description}</p>
                <ul className="detailed-service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="detailed-service-price">
                  <span className="price">{service.price}</span>
                  <span className="duration"> / {service.duration}</span>
                </div>
                <button className="detailed-service-cta">Pilih Layanan</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="process-container">
          <h2>Bagaimana Proses Layanan Kami?</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Konsultasi Awal</h3>
              <p>Diskusi mendalam tentang tujuan karir dan situasi Anda saat ini</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Assessment</h3>
              <p>Evaluasi komprehensif menggunakan tools dan metode terpercaya</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Analisis & Rekomendasi</h3>
              <p>Penyusunan strategi dan roadmap yang disesuaikan dengan profil Anda</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Follow-up</h3>
              <p>Monitoring progress dan penyesuaian strategi sesuai perkembangan</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-container">
          <h2>Pertanyaan Umum</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Berapa lama proses konsultasi?</h3>
              <p>Proses konsultasi bervariasi tergantung paket yang dipilih, mulai dari 30 menit hingga 6 bulan untuk program lengkap.</p>
            </div>
            <div className="faq-item">
              <h3>Apakah ada garansi hasil?</h3>
              <p>Kami memberikan garansi kepuasan 100%. Jika tidak puas, Anda bisa mengulang sesi atau mendapat refund.</p>
            </div>
            <div className="faq-item">
              <h3>Bagaimana cara pembayaran?</h3>
              <p>Pembayaran dapat dilakukan melalui transfer bank, e-wallet, atau cicilan 0% untuk paket tertentu.</p>
            </div>
            <div className="faq-item">
              <h3>Apakah bisa konsultasi online?</h3>
              <p>Ya, semua layanan kami tersedia secara online melalui video call atau bisa tatap muka di kantor kami.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="detailed-services-cta-section">
        <div className="detailed-services-cta-container">
          <h2>Siap Memulai Perjalanan Karir Anda?</h2>
          <p>Dapatkan konsultasi gratis 15 menit untuk menentukan layanan yang paling sesuai dengan kebutuhan Anda</p>
          <div className="cta-buttons">
            <button className="cta-primary">Konsultasi Gratis</button>
            <button className="cta-secondary">Chat WhatsApp</button>
          </div>
        </div>
      </section>

      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <button onClick={onBack} className="btn-secondary">
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
};

export default DetailedServices;
