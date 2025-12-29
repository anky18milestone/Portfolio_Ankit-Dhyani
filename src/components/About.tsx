import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Palette, Lightbulb, Users, Sparkles } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Crafting rich, intuitive and beautiful experiences for the with focus on users, business, and technology goals',
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
      title: 'Leveraging AI',
      description: 'Creating engaging experiences using latest AI tools for quick results',
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
          <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl leading-relaxed mb-8">
          As a designer, I bring inclusiveness, minimalism and future-oriented user experience to people in need. 
          Over 6 and half years of experience crafting solutions for multiple domains and clients. I am passionate about 
          designing digital experiences that are both visually stunning and intuitive and always strive to create designs 
          that delight and engage users.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="more" className="border-0">
                <AccordionTrigger className="text-xl md:text-2xl text-neutral-600 hover:no-underline py-4 px-0 font-normal tracking-tight [&>svg]:text-neutral-500 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:transition-transform [&>svg]:duration-[800ms] [&>svg]:ease-[cubic-bezier(0.22,1,0.36,1)]">
                  More
                </AccordionTrigger>
                <AccordionContent className="text-xl md:text-2xl text-neutral-600 leading-relaxed pt-4 pb-0 px-0">
                  <p className="mb-4">
                    Hi there! I'm a <strong>UX Designer</strong> with over <strong>6 years of experience</strong> shaping digital experiences across diverse industries — including <strong>Healthcare, Energy, Sustainability, SaaS, ATS</strong>, and internal enterprise systems.
                  </p>
                  <p className="mb-4">
                    My design process blends <strong>empathy, strategy, and structure</strong>. I'm deeply passionate about understanding users through <strong>research</strong>, crafting clean <strong>user flows</strong>, and translating insights into <strong>intuitive wireframes and prototypes</strong>. Whether it's organizing information into a meaningful <strong>IA</strong>, running <strong>usability tests</strong>, or co-creating through <strong>ideation workshops</strong>, I aim to bring clarity and impact to every interaction.
                  </p>
                  <p className="mb-4">
                    I'm fluent in tools like <strong>Figma</strong>, <strong>Framer</strong>, <strong>UX Pilot</strong>, <strong>Miro</strong>, <strong>MS Visio</strong>, and <strong>Adobe XD</strong>, and lean on frameworks like the <strong>Double Diamond</strong>, <strong>Human-Centered Design</strong>, and <strong>Design Thinking</strong> to guide my approach.
                  </p>
                  <p className="mb-4">
                    What sets me apart? A <strong>detail-oriented mindset</strong>, <strong>collaborative spirit</strong>, and an ability to translate business needs into elegant, user-centered solutions. Outside of work, you'll often find me exploring new operating systems, experimenting with tools, or vibing to rock music 🎸.
                  </p>
                  <p>
                    I'm currently open to exciting design challenges where I can contribute my skills to build meaningful and usable experiences. Let's connect!
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
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
