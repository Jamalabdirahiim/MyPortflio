import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import personal from '../data/personal';

const Footer: React.FC = () => (
  <footer
    style={{
      borderTop: '1px solid #272A2C',
      padding: '1.5rem 0',
    }}
    aria-label="Footer"
  >
    <div className="container-site">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1rem',
          alignItems: 'center',
        }}
        className="md:grid-cols-3"
      >
        {/* Left */}
        <div>
          <span
            style={{
              fontSize: '0.75rem',
              color: '#9A9A94',
              fontWeight: 500,
            }}
          >
            {personal.name} © 2026
          </span>
        </div>

        {/* Center */}
        <div style={{ textAlign: 'center' }}>
          <span
            style={{
              fontSize: '0.625rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              color: '#4a4d50',
              textTransform: 'uppercase',
            }}
          >
            Frontend Engineer
          </span>
        </div>

        {/* Right */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            justifyContent: 'flex-start',
          }}
          className="md:justify-end"
        >
          <span
            style={{
              fontSize: '0.6875rem',
              color: '#4a4d50',
              fontWeight: 400,
            }}
          >
            Built with React + TypeScript
          </span>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {[
              { icon: GithubIcon, href: personal.github, label: 'GitHub' },
              { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                aria-label={label}
                style={{
                  color: '#4a4d50',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#9A9A94')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#4a4d50')}
              >
                <Icon size={14} strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
