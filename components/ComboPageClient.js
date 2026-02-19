'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import ComboLoader from '@/components/ComboLoader';
import { combos } from '@/data/combos';

function FadeBlock({ children, delay = 0 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}

export default function ComboPageClient({ combo }) {
  const [showLoader, setShowLoader] = useState(true);

  const platformLabel = combo.purchaseUrl.includes('meesho') ? 'Available on Meesho' : 'Available on Amazon';

  const otherCombos = useMemo(() => combos.filter((entry) => entry.slug !== combo.slug).slice(0, 3), [combo.slug]);

  const occasionScenarios = useMemo(
    () => [
      {
        title: 'Last-minute but meaningful',
        description: `When time is short, ${combo.title} gives you a premium, ready-to-gift experience without feeling rushed.`
      },
      {
        title: 'Long-distance connection',
        description: 'A curated box helps you send presence and thoughtfulness, even when you cannot celebrate in person.'
      },
      {
        title: 'Small moment, big impact',
        description: 'Perfect for everyday milestones, personal wins, and quiet celebrations that still deserve intention.'
      }
    ],
    [combo.title]
  );

  const miniFaqs = useMemo(
    () => [
      {
        question: `Is ${combo.title} suitable for first-time gifting?`,
        answer: 'Yes. The curation and premium presentation make it easy to gift confidently even if you are unsure what to pick.'
      },
      {
        question: 'Will the box look premium on arrival?',
        answer: 'Yes. We prioritize rigid packaging, neat arrangement, and quality checks so the first impression feels elevated.'
      },
      {
        question: 'Can I trust checkout and delivery?',
        answer: 'Absolutely. Orders are completed on trusted marketplaces with secure payment options and buyer-friendly support.'
      }
    ],
    [combo.title]
  );

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

        <FadeBlock>
          <div className="rounded-3xl border border-black/5 bg-[color:var(--surface)] p-7 md:p-9">
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">The Experience</p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">More than products — this is how you make someone feel seen.</h2>
            <p className="mt-4 max-w-3xl text-[color:var(--muted)]">
              {combo.title} is curated to create a complete emotional moment: visual delight, tactile quality, and useful
              items that continue to be enjoyed after the first unboxing. It feels personal without requiring hours of
              searching, comparing, and second-guessing.
            </p>
          </div>
        </FadeBlock>

        <FadeBlock>
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold md:text-3xl">Unboxing and packaging experience</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {combo.items.slice(0, 3).map((item) => (
                <figure key={item.name} className="overflow-hidden rounded-2xl border border-black/5 bg-[color:var(--surface)]">
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={`${item.name} styled for the ${combo.title} unboxing experience`}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="p-4 text-sm text-[color:var(--muted)]">Thoughtful placement and premium finishing for every reveal.</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </FadeBlock>

        <FadeBlock>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-black/5 bg-[color:var(--surface)] p-6">
              <h3 className="text-lg font-semibold">Typical gift purchase</h3>
              <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted)]">
                <li>• Random item combinations</li>
                <li>• Inconsistent packaging and quality</li>
                <li>• Higher effort, lower emotional impact</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-[color:var(--accent)]/40 bg-[color:var(--surface)] p-6">
              <h3 className="text-lg font-semibold">Why this makes a better gift</h3>
              <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted)]">
                <li>• Curated around one clear mood</li>
                <li>• Premium presentation that feels intentional</li>
                <li>• A complete experience, ready to give</li>
              </ul>
            </article>
          </div>
        </FadeBlock>

        <FadeBlock>
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold md:text-3xl">Perfect occasion scenarios</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {occasionScenarios.map((scenario) => (
                <article key={scenario.title} className="rounded-2xl border border-black/5 bg-[color:var(--surface)] p-6">
                  <h3 className="text-lg font-semibold">{scenario.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">{scenario.description}</p>
                </article>
              ))}
            </div>
          </div>
        </FadeBlock>

        <FadeBlock>
          <div className="rounded-2xl border border-black/5 bg-[color:var(--surface)] px-6 py-5">
            <ul className="grid gap-2 text-sm text-[color:var(--muted)] md:grid-cols-4">
              <li>✓ Quality-checked curated items</li>
              <li>✓ Premium magnetic rigid packaging</li>
              <li>✓ Secure Amazon / Meesho checkout</li>
              <li>✓ Reliable delivery expectations</li>
            </ul>
          </div>
        </FadeBlock>

        <FadeBlock>
          <div className="rounded-3xl border border-black/5 bg-[color:var(--surface)] p-7 text-center md:p-9">
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
          </div>
        </FadeBlock>

        <FadeBlock>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold md:text-3xl">Mini FAQ</h2>
            <div className="space-y-3">
              {miniFaqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-black/5 bg-[color:var(--surface)] p-5">
                  <h3 className="font-semibold">{faq.question}</h3>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </FadeBlock>

        <FadeBlock>
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold md:text-3xl">Explore other combos</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {otherCombos.map((otherCombo) => (
                <article key={otherCombo.slug} className="overflow-hidden rounded-2xl border border-black/5 bg-[color:var(--surface)]">
                  <div className="relative h-40">
                    <Image
                      src={otherCombo.featuredImage}
                      alt={`${otherCombo.title} preview`}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-3 p-5">
                    <h3 className="text-lg font-semibold">{otherCombo.title}</h3>
                    <p className="text-sm text-[color:var(--muted)]">{otherCombo.tagline}</p>
                    <Link
                      href={`/combos/${otherCombo.slug}`}
                      className="inline-flex rounded-full border border-[color:var(--accent)] px-4 py-2 text-sm font-medium"
                    >
                      View combo
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </FadeBlock>
      </motion.article>
    </>
  );
}
