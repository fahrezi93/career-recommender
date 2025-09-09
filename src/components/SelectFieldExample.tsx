import React, { useState } from 'react';
import SelectField from './SelectField';

// Example usage of the SelectField component
const SelectFieldExample: React.FC = () => {
  const [sortBy, setSortBy] = useState<string>('');
  const [priorityFilter, setPriorityFilter] = useState<string>('');
  const [confidence, setConfidence] = useState<string>('');

  const sortOptions = [
    { value: 'cf', label: 'Certainty Factor' },
    { value: 'saw', label: 'SAW Score' },
    { value: 'combined', label: 'Kombinasi' }
  ];

  const priorityOptions = [
    { value: 'all', label: 'Semua Karir' },
    { value: 'design', label: 'Fokus Desain & Visual' },
    { value: 'logic', label: 'Fokus Logika & Data' }
  ];

  const confidenceOptions = [
    { value: '1.0', label: 'Sangat Yakin (100%)' },
    { value: '0.8', label: 'Yakin (80%)' },
    { value: '0.6', label: 'Cukup Yakin (60%)' },
    { value: '0.4', label: 'Tidak Yakin (40%)' },
    { value: '0.2', label: 'Sangat Tidak Yakin (20%)' }
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Contoh Penggunaan SelectField</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <SelectField
          label="Urutkan Berdasarkan"
          value={sortBy}
          onChange={setSortBy}
          options={sortOptions}
          placeholder="Pilih metode pengurutan..."
          required
        />

        <SelectField
          label="Prioritas Karir"
          value={priorityFilter}
          onChange={setPriorityFilter}
          options={priorityOptions}
          placeholder="Pilih prioritas karir..."
        />

        <SelectField
          label="Tingkat Keyakinan"
          value={confidence}
          onChange={setConfidence}
          options={confidenceOptions}
          placeholder="Pilih tingkat keyakinan..."
          disabled={false}
        />

        <SelectField
          label="Select Disabled (Contoh)"
          value=""
          onChange={() => {}}
          options={[{ value: 'disabled', label: 'Opsi Disabled' }]}
          placeholder="Field ini disabled..."
          disabled={true}
        />
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#f8fafc', borderRadius: '8px' }}>
        <h3>Nilai yang Dipilih:</h3>
        <p><strong>Sort By:</strong> {sortBy || 'Belum dipilih'}</p>
        <p><strong>Priority Filter:</strong> {priorityFilter || 'Belum dipilih'}</p>
        <p><strong>Confidence:</strong> {confidence || 'Belum dipilih'}</p>
      </div>
    </div>
  );
};

export default SelectFieldExample;
