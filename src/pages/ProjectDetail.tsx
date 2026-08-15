import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Code, Layers, CheckCircle2 } from 'lucide-react';
import projects from '../data/projects';
import { caseStudies } from '../data/caseStudies';
import { GithubIcon } from '../components/SocialIcons';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const caseStudy = slug ? caseStudies[slug] : undefined;

  if (!project) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          paddingTop: '12rem',
        }}
      >
        <h1
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#F3F1EA',
            margin: 0,
          }}
        >
          Project not found.
        </h1>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.9375rem',
            color: '#C8FF3D',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </div>
    );
  }

  const githubUrl = caseStudy?.githubUrl;
  const liveUrl = project.liveUrl || caseStudy?.liveUrl;

  return (
    <div
      style={{
        minHeight: '100vh',
        paddingTop: 'max(7rem, env(safe-area-inset-top, 0px) + 7rem)',
        paddingBottom: '6rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          right: '5%',
          width: '500px',
          height: '500px',
          background: `radial-gradient(ellipse at center, ${project.accentColor}0D 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      <div className="container-site" style={{ maxWidth: '84rem' }}>

        {/* ── Back to work link ───────────────────────────────── */}
        <div style={{ marginBottom: '2.5rem' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#F3F1EA',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '0.5rem 1.15rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              transition: 'all 220ms ease',
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#C8FF3D';
              e.currentTarget.style.borderColor = 'rgba(200, 255, 61, 0.4)';
              e.currentTarget.style.background = 'rgba(200, 255, 61, 0.08)';
              e.currentTarget.style.transform = 'translateX(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#F3F1EA';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            <ArrowLeft size={16} />
            Back to work
          </Link>
        </div>

        {/* ── Project Header ─────────────────────────────────── */}
        <div style={{ marginBottom: '3rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1rem',
            }}
          >
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: project.accentColor,
                textTransform: 'uppercase',
              }}
            >
              {project.number}
            </span>
            <div style={{ height: '1px', width: '2rem', background: '#272A2C' }} />
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                color: '#9A9A94',
                textTransform: 'uppercase',
              }}
            >
              Engineering Case Study
            </span>
          </div>

          <h1
            style={{
              margin: '0 0 1rem',
              fontSize: 'clamp(2.25rem, 5.5vw, 4rem)',
              fontWeight: 900,
              letterSpacing: '-0.035em',
              textTransform: 'uppercase',
              color: '#F3F1EA',
              lineHeight: 1.05,
            }}
          >
            {project.name}
          </h1>

          <p
            style={{
              margin: '0 0 2rem',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#B5B5AD',
              lineHeight: 1.6,
              maxWidth: '48rem',
            }}
          >
            {project.tagline || project.description}
          </p>

          {/* Action CTAs (Live website & GitHub repo) */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '0.75rem 1.5rem',
                  background: '#C8FF3D',
                  color: '#08090A',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                  borderRadius: '6px',
                  boxShadow: '0 0 24px rgba(200, 255, 61, 0.3)',
                  transition: 'all 250ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#d6ff5e';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 28px rgba(200, 255, 61, 0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#C8FF3D';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0 24px rgba(200, 255, 61, 0.3)';
                }}
              >
                Visit Live Product ({liveUrl.replace('https://', '')})
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '0.75rem 1.5rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#F3F1EA',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  borderRadius: '6px',
                  transition: 'all 250ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = '#F3F1EA';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <GithubIcon size={16} />
                View Repository on GitHub
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>

          {/* Quick Highlight Cards */}
          {caseStudy?.highlights && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '3rem',
              }}
            >
              {caseStudy.highlights.map((h) => (
                <div
                  key={h.label}
                  style={{
                    padding: '1.15rem 1.35rem',
                    background: 'rgba(17, 19, 21, 0.75)',
                    border: '1px solid #272A2C',
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      color: '#9A9A94',
                      textTransform: 'uppercase',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {h.label}
                  </div>
                  <div
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 700,
                      color: '#F3F1EA',
                    }}
                  >
                    {h.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Hero Project Screenshot */}
          {(project.id === 'soon' || project.id === 'devgear') && (
            <div
              style={{
                width: '100%',
                borderRadius: '1rem',
                overflow: 'hidden',
                border: `1.5px solid ${project.accentColor}33`,
                background: '#0D0F10',
                boxShadow: `0 24px 70px rgba(0,0,0,0.8), 0 0 30px ${project.accentColor}15`,
                marginBottom: '3.5rem',
              }}
            >
              <img
                src={project.id === 'soon' ? '/projects/soon-hero.png' : '/projects/devgear-hero.png'}
                alt={`${project.name} preview`}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>
          )}
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: '#272A2C', marginBottom: '3.5rem' }} />

        {/* ── Main Content Grid ───────────────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
          }}
          className="lg:grid-cols-[1.8fr_1fr]"
        >
          {/* Main Case Study Chapters */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {caseStudy?.sections ? (
              caseStudy.sections.map((sec) => (
                <div
                  key={sec.heading}
                  style={{
                    padding: '2rem',
                    background: 'rgba(17, 19, 21, 0.5)',
                    border: '1px solid #272A2C',
                    borderRadius: '10px',
                  }}
                >
                  <h2
                    style={{
                      margin: '0 0 0.5rem',
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      letterSpacing: '-0.01em',
                      textTransform: 'uppercase',
                      color: '#F3F1EA',
                    }}
                  >
                    {sec.heading}
                  </h2>
                  {sec.subheading && (
                    <div
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: project.accentColor,
                        marginBottom: '1.25rem',
                      }}
                    >
                      {sec.subheading}
                    </div>
                  )}

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {sec.body.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        style={{
                          margin: 0,
                          fontSize: '0.9625rem',
                          color: '#B5B5AD',
                          lineHeight: 1.75,
                        }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Tech stack callout box if present */}
                  {sec.techCallout && (
                    <div
                      style={{
                        marginTop: '1.5rem',
                        padding: '1.25rem 1.5rem',
                        background: 'rgba(200, 255, 61, 0.04)',
                        border: '1px solid rgba(200, 255, 61, 0.2)',
                        borderRadius: '8px',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: '#C8FF3D',
                          marginBottom: '0.875rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                        }}
                      >
                        <Code size={15} />
                        {sec.techCallout.title}
                      </div>
                      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                        {sec.techCallout.items.map((item, iIdx) => (
                          <li key={iIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                            <CheckCircle2 size={15} style={{ color: '#C8FF3D', flexShrink: 0, marginTop: '3px' }} />
                            <span style={{ fontSize: '0.875rem', color: '#F3F1EA', lineHeight: 1.5 }}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div>
                <h2 style={{ color: '#F3F1EA', fontSize: '1.25rem', textTransform: 'uppercase' }}>
                  Architecture & Implementation
                </h2>
                <p style={{ color: '#9A9A94', lineHeight: 1.7 }}>
                  {project.description}
                </p>
              </div>
            )}
          </div>

          {/* ── Sidebar: Project Spec Sheet ────────────────────── */}
          <div>
            <div
              style={{
                background: '#0D0F11',
                border: '1px solid #272A2C',
                borderRadius: '12px',
                padding: '1.75rem',
                position: 'sticky',
                top: '7rem',
                boxShadow: '0 20px 48px rgba(0,0,0,0.6)',
              }}
            >
              <div
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#9A9A94',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Layers size={14} />
                Technical Specifications
              </div>

              {[
                ['Project', project.name],
                ['Role', caseStudy?.role || 'Frontend Engineer'],
                ['Timeline', caseStudy?.timeline || '2025 – 2026'],
                ['Status', 'Live in Production'],
              ].map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    padding: '0.875rem 0',
                    borderBottom: '1px solid #1E2124',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      color: '#6B6B64',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {k}
                  </span>
                  <span
                    style={{
                      fontSize: '0.9375rem',
                      color: '#F3F1EA',
                      fontWeight: 600,
                    }}
                  >
                    {v}
                  </span>
                </div>
              ))}

              {/* Technologies list */}
              <div style={{ paddingTop: '1.25rem' }}>
                <span
                  style={{
                    fontSize: '0.6875rem',
                    color: '#6B6B64',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    display: 'block',
                    marginBottom: '0.75rem',
                  }}
                >
                  Languages & Frameworks
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {(caseStudy?.coreLanguages || project.technologies).map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '4px 9px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '4px',
                        color: '#E0E0D8',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons in sidebar */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid #1E2124' }}>
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1rem',
                      background: 'rgba(200, 255, 61, 0.1)',
                      border: '1px solid rgba(200, 255, 61, 0.35)',
                      borderRadius: '6px',
                      color: '#C8FF3D',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                      transition: 'all 200ms ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(200, 255, 61, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(200, 255, 61, 0.1)';
                    }}
                  >
                    Open Live Demo
                    <ArrowUpRight size={14} />
                  </a>
                )}

                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1rem',
                      background: 'transparent',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '6px',
                      color: '#9A9A94',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'all 200ms ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#9A9A94';
                      e.currentTarget.style.color = '#F3F1EA';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                      e.currentTarget.style.color = '#9A9A94';
                    }}
                  >
                    <GithubIcon size={14} />
                    GitHub Source
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;
