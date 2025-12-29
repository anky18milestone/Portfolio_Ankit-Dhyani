import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Mail, Phone, LinkedinIcon } from 'lucide-react';

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'anky18milestone@outlook.com',
      href: 'mailto:anky18milestone@outlook.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(+91) 7253971871',
      href: 'tel:+917253971871',
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/ankit-dhyani-47ba84134/',
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl tracking-tight mb-8">Let's Work Together</h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 border border-neutral-200 rounded-2xl hover:border-neutral-300 transition-all hover:shadow-lg group"
            >
              <method.icon className="w-10 h-10 mb-6 text-neutral-900 group-hover:scale-110 transition-transform" />
              <div className="text-sm text-neutral-500 mb-2">{method.label}</div>
              <div className="text-lg group-hover:text-neutral-600 transition-colors">
                {method.value}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-12 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-500 text-sm"
        >
          <div>©2025 Ankit Dhyani. All Rights Reserved</div>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/ankit-dhyani-47ba84134/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 transition-colors"
            >
              LinkedIn
            </a>
            <a href="mailto:anky18milestone@outlook.com" className="hover:text-neutral-900 transition-colors">
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
