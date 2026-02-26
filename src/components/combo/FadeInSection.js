'use client';

import { motion } from 'framer-motion';

export default function FadeInSection({ children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}
