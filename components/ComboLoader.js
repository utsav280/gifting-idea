'use client';

import { motion } from 'framer-motion';

export default function ComboLoader({ title }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-[color:var(--bg)]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35, ease: 'easeInOut' } }}
    >
      <div className="relative h-48 w-52 [perspective:900px]">
        <motion.div
          className="absolute inset-x-0 bottom-0 h-28 rounded-b-2xl border border-black/10 bg-[color:var(--surface)] shadow-soft"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          className="absolute inset-x-2 bottom-12 h-20 rounded-b-2xl rounded-t-xl bg-[color:var(--accent)]/15 blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.65, 0.2] }}
          transition={{ duration: 1.3, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute inset-x-0 top-6 h-14 origin-bottom rounded-2xl border border-black/10 bg-[color:var(--surface)]"
          initial={{ rotateX: 0, y: 0 }}
          animate={{ rotateX: -118, y: -14 }}
          transition={{ duration: 1.05, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
          style={{ transformStyle: 'preserve-3d' }}
        />
      </div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.85, ease: 'easeOut' }}
      >
        <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">{title}</p>
        <p className="mt-3 text-lg font-medium">Opening surprises for you…</p>
      </motion.div>
    </motion.div>
  );
}
