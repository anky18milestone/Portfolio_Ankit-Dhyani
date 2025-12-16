import { motion, useInView } from 'motion/react';
import { useRef, ReactNode } from 'react';

interface CaseStudySectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function CaseStudySection({ title, children, className = '' }: CaseStudySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-24 ${className}`}
    >
      <h2 className="text-3xl md:text-5xl tracking-tight mb-8">{title}</h2>
      <div className="text-lg text-neutral-700 leading-relaxed space-y-6">{children}</div>
    </motion.section>
  );
}

interface ImageGridProps {
  images: string[];
  columns?: 1 | 2 | 3;
}

export function ImageGrid({ images, columns = 2 }: ImageGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`grid gap-6 mb-24 ${
        columns === 1
          ? 'grid-cols-1'
          : columns === 2
            ? 'grid-cols-1 md:grid-cols-2'
            : 'grid-cols-1 md:grid-cols-3'
      }`}
    >
      {images.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-xl">
          <img src={image} alt={`Design ${index + 1}`} className="w-full h-auto object-cover" />
        </div>
      ))}
    </motion.div>
  );
}

interface FullWidthImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export function FullWidthImage({ src, alt, caption }: FullWidthImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="mb-24"
    >
      <div className="overflow-hidden rounded-xl">
        <img src={src} alt={alt} className="w-full h-auto object-cover" />
      </div>
      {caption && <p className="text-sm text-neutral-500 text-center mt-4">{caption}</p>}
    </motion.div>
  );
}
