import React from 'react';

interface SectionLabelProps {
  number: string;
  label: string;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ number, label }) => (
  <div className="flex items-center gap-4 mb-8">
    <span
      style={{
        fontSize: '0.625rem',
        fontWeight: 600,
        letterSpacing: '0.18em',
        color: '#9A9A94',
        textTransform: 'uppercase',
        fontVariantNumeric: 'tabular-nums',
      }}
    >
      {number}
    </span>
    <div style={{ width: '1.5rem', height: '1px', background: '#272A2C' }} />
    <span
      style={{
        fontSize: '0.625rem',
        fontWeight: 600,
        letterSpacing: '0.18em',
        color: '#9A9A94',
        textTransform: 'uppercase',
      }}
    >
      {label}
    </span>
  </div>
);

export default SectionLabel;
