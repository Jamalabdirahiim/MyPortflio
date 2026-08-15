import React from 'react';
import { motion, useInView } from 'framer-motion';
import SectionLabel from './SectionLabel';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

const Projects: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

  return (
    <section id="projects" className="section" aria-label="Selected Work">
      <div className="container-site">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel number="02" label="Selected Work" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 items-end">
            <motion.h2
              className="text-headline md:col-span-7 lg:col-span-8"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ margin: 0, color: '#F3F1EA' }}
            >
              SELECTED WORK
            </motion.h2>

            <motion.p
              className="md:col-span-5 lg:col-span-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{
                fontSize: '0.875rem',
                color: '#9A9A94',
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              A selection of interfaces and digital products I've designed and built.
            </motion.p>
          </div>

          {/* Divider */}
          <div className="divider" style={{ marginBottom: '2rem' }} />

          {/* Projects grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
              gap: '1.25rem',
            }}
            className="lg:grid-cols-3"
          >
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
