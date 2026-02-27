import Image from 'next/image';
import FadeInSection from '@/src/components/combo/FadeInSection';
import { getPackagingImages } from '@/src/components/combo/content';

export default function PackagingSection({ combo }) {
  const images = getPackagingImages(combo.slug);

  return (
    <FadeInSection>
      <div className="space-y-5">
        <h2 className="text-2xl font-semibold md:text-3xl">It feels premium before it&apos;s even opened.</h2>
        <p className="max-w-3xl text-[color:var(--muted)]">
          Magnetic rigid structure, careful layering, and clean finishing create an unboxing flow that feels intentional
          from first touch to final reveal.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {images.map((image, index) => (
            <figure key={image} className="group overflow-hidden rounded-[var(--radius-card)] border border-black/5 bg-[color:var(--surface)] shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-0.5">
              <div className="relative h-48">
                <Image
                  src={image}
                  alt={`${combo.title} packaging detail ${index + 1}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
