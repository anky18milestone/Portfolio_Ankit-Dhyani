/// <reference path="../images.d.ts" />
import React from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ProjectCard } from './ProjectCard';
import bridgingTheGapsImg from '../assets/fa057b9c87c7040c383227b2e97ebb20998d678a.png';
import sustainabilityToolImg from '../assets/3d20fe57458611e45c90ff892af5553e63cd21ff.png';
import saathiImg from '../assets/bdce910595044546d5961c305a6786ed2d8d6944.png';
import zodiacImg from '../assets/1c7aaef60583846b12eeccd0f843bc0da3b911ae.png';

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      id: 1,
      title: 'Bridging the Gaps: A Unified Hiring Experience',
      description: 'A comprehensive ATS system powered by AI to streamline recruitment processes and bridge gaps in hiring',
      tags: ['UI/UX', 'SaaS', 'ATS', 'AI'],
      image: bridgingTheGapsImg,
    },
    {
      id: 2,
      title: 'Sustainability Procurement Assessment Tool',
      description: 'A platform for assessing and improving sustainable procurement practices in organizations',
      tags: ['UI/UX', 'SaaS'],
      image: sustainabilityToolImg,
    },
    {
      id: 3,
      title: 'Saathi - UMO Design Challenge',
      description: 'A mobile rescue application designed to provide emergency assistance and support',
      tags: ['Mobile App', 'Rescue', 'UI/UX'],
      image: saathiImg,
    },
    {
      id: 4,
      title: 'Redesigning Zodiac',
      description: 'A complete UI/UX redesign focusing on modern aesthetics and improved user experience',
      tags: ['UI/UX', 'Redesign'],
      image: zodiacImg,
    },
  ];

  return (
    <section id="work" ref={ref} className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl tracking-tight mb-8">Selected Work</h2>
          <p className="text-xl text-neutral-600 max-w-3xl leading-relaxed">
            A collection of projects showcasing my approach to design thinking, problem-solving, and
            creating delightful user experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <React.Fragment key={project.id}>
              <ProjectCard project={project} index={index} />
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
