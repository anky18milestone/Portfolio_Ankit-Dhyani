import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Palette, Lightbulb, Users, Sparkles } from 'lucide-react';

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Crafting intuitive and beautiful user interfaces with a focus on accessibility',
    },
    {
      icon: Lightbulb,
      title: 'Product Strategy',
      description: 'Defining product vision and roadmap aligned with user needs and business goals',
    },
    {
      icon: Users,
      title: 'User Research',
      description: 'Understanding user behavior through research and testing to inform design decisions',
    },
    {
      icon: Sparkles,
      title: '3D & Motion',
      description: 'Creating engaging experiences with 3D design and micro-interactions',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl tracking-tight mb-8">About Me</h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl leading-relaxed">
            I'm a product designer passionate about creating meaningful digital experiences that make
            a difference. With expertise in UI/UX, branding, and 3D design, I help bring ideas to
            life through thoughtful and innovative design solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 border border-neutral-200 rounded-2xl hover:border-neutral-300 transition-colors group"
            >
              <skill.icon className="w-10 h-10 mb-6 text-neutral-900 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl mb-3">{skill.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
