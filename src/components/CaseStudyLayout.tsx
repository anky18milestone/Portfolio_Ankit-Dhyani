import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CaseStudyLayoutProps {
  title: string;
  tags: string[];
  overview: string;
  role: string;
  duration: string;
  tools: string[];
  heroImage: string;
  children?: ReactNode;
  nextProject?: {
    id: string;
    title: string;
  };
  prevProject?: {
    id: string;
    title: string;
  };
}

export function CaseStudyLayout({
  title,
  tags,
  overview,
  role,
  duration,
  tools,
  heroImage,
  children,
  nextProject,
  prevProject,
}: CaseStudyLayoutProps) {
  return (
    <div className="bg-white">
      {/* Header Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200"
      >
        <div className="max-w-2xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
          <Link
            to="/#work"
            className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Work</span>
          </Link>
          <Link to="/" className="tracking-tight hover:opacity-70 transition-opacity">
            Ankit Dhyani
          </Link>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pt-32 pb-20 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 bg-neutral-100 text-neutral-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8 max-w-5xl">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl leading-relaxed">
              {overview}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <div>
              <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">Role</h3>
              <p className="text-lg text-neutral-900">{role}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">Duration</h3>
              <p className="text-lg text-neutral-900">{duration}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-3">Tools</h3>
              <p className="text-lg text-neutral-900">{tools.join(', ')}</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="px-6 md:px-12 pb-20"
      >
        <div className="max-w-7xl mx-auto">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-[500px] md:h-[700px] object-cover rounded-2xl"
          />
        </div>
      </motion.div>

      {/* Case Study Content */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 pb-32">{children}</div>

      {/* Project Navigation */}
      {(prevProject || nextProject) && (
        <div className="border-t border-neutral-200 py-20">
          <div className="max-w-2xl mx-auto px-6 md:px-12">
            <div className="flex justify-between items-center">
              {prevProject ? (
                <Link
                  to={`/case-study/${prevProject.id}`}
                  className="flex items-center gap-3 text-neutral-600 hover:text-neutral-900 transition-colors group"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <div className="text-sm text-neutral-500 mb-1">Previous Project</div>
                    <div className="text-lg">{prevProject.title}</div>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {nextProject ? (
                <Link
                  to={`/case-study/${nextProject.id}`}
                  className="flex items-center gap-3 text-neutral-600 hover:text-neutral-900 transition-colors group text-right"
                >
                  <div>
                    <div className="text-sm text-neutral-500 mb-1">Next Project</div>
                    <div className="text-lg">{nextProject.title}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
