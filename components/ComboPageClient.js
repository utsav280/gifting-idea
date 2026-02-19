'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import ComboLoader from '@/components/ComboLoader';
import ExperienceSection from '@/src/components/combo/ExperienceSection';
import PackagingSection from '@/src/components/combo/PackagingSection';
import WhyBetterSection from '@/src/components/combo/WhyBetterSection';
import OccasionBlocks from '@/src/components/combo/OccasionBlocks';
import TrustStrip from '@/src/components/combo/TrustStrip';
import ComboFAQ from '@/src/components/combo/ComboFAQ';
import ExploreOtherCombos from '@/src/components/combo/ExploreOtherCombos';

export default function ComboPageClient({ combo }) {
  const [showLoader, setShowLoader] = useState(true);
  const platformLabel = combo.purchaseUrl.includes('meesho') ? 'Available on Meesho' : 'Available on Amazon';

  useEffect(() => {
    const timer = window.setTimeout(() => setShowLoader(false), 1800);
    return () => window.clearTimeout(timer);
  }, [combo.slug]);

  return (
    <>
      <AnimatePresence>{showLoader && <ComboLoader title={combo.title} />}</AnimatePresence>

      <motion.article
        className="space-y-14 pb-12"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: showLoader ? 0 : 1, y: showLoader ? 10 : 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <section className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-black/5 shadow-soft">
            <Image
              src={combo.featuredImage}
              alt={`${combo.title} hero image`}
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">Signature Combo</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">{combo.title}</h1>
            <p className="max-w-lg text-lg text-[color:var(--muted)]">{combo.tagline}</p>
            <p className="text-3xl font-semibold text-[color:var(--accent)]">{combo.price}</p>
            <a
              href={combo.purchaseUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-[color:var(--button-text)]"
            >
              {platformLabel}
            </a>
          </div>
        </section>

        <section aria-labelledby="inside-heading" className="space-y-5">
          <h2 id="inside-heading" className="text-2xl font-semibold">
            What&apos;s inside
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {combo.items.map((item, index) => (
              <motion.figure
                key={item.name}
                className="overflow-hidden rounded-2xl border border-black/5 bg-[color:var(--surface)]"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: showLoader ? 0 : 1, y: showLoader ? 8 : 0 }}
                transition={{ duration: 0.35, delay: showLoader ? 0 : 0.05 * index }}
              >
                <div className="relative h-44">
                  <Image
                    src={item.image}
                    alt={`${item.name} from ${combo.title}`}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-4 text-sm font-medium">{item.name}</figcaption>
              </motion.figure>
            ))}
          </div>
        </section>

        <section aria-labelledby="ideal-for-heading" className="rounded-3xl border border-black/5 bg-[color:var(--surface)] p-7">
          <h2 id="ideal-for-heading" className="text-2xl font-semibold">
            Ideal for
          </h2>
          <p className="mt-3 max-w-3xl text-[color:var(--muted)]">{combo.idealFor}</p>
        </section>

        <ExperienceSection combo={combo} />
        <PackagingSection combo={combo} />
        <WhyBetterSection combo={combo} />
        <OccasionBlocks combo={combo} />
        <TrustStrip combo={combo} />

        <section className="rounded-3xl border border-black/5 bg-[color:var(--surface)] p-7 text-center md:p-9">
          <h2 className="text-2xl font-semibold">Ready to gift with confidence?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[color:var(--muted)]">
            Order now from a trusted marketplace and turn your next gifting moment into something memorable.
          </p>
          <a
            href={combo.purchaseUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-[color:var(--accent)] px-7 py-3 text-sm font-semibold text-[color:var(--button-text)]"
          >
            {platformLabel}
          </a>
        </section>

        <ComboFAQ combo={combo} />
        <ExploreOtherCombos combo={combo} />
      </motion.article>
    </>
  );
}
