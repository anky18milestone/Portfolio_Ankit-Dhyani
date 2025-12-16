import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const projectLinks: Record<number, string> = {
  1: '/case-study/bridging-the-gaps',
  2: '/case-study/sustainability-tool',
  3: '/case-study/saathi',
  4: '/case-study/redesigning-zodiac',
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={projectLinks[project.id] || '/'}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group cursor-pointer"
      >
        <div className="relative overflow-hidden rounded-2xl bg-neutral-200 aspect-[4/3] mb-6">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-neutral-900/20 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-16 h-16 rounded-full bg-white flex items-center justify-center"
            >
              <ArrowUpRight className="w-8 h-8 text-neutral-900" />
            </motion.div>
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white text-xs text-neutral-600 rounded-full border border-neutral-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl mb-2 group-hover:text-neutral-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-neutral-600 leading-relaxed">{project.description}</p>
      </motion.div>
    </Link>
  );
}