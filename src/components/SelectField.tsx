import React from 'react';
import './SelectField.css';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  id?: string;
  name?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder = "Pilih opsi...",
  disabled = false,
  required = false,
  className = "",
  id,
  name
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`select-field-container ${className}`}>
      {label && (
        <label htmlFor={selectId} className="select-field-label">
          {label}
          {required && <span className="required-asterisk">*</span>}
        </label>
      )}
      <div className="select-field-wrapper">
        <select
          id={selectId}
          name={name}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          className="select-field"
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectField;
