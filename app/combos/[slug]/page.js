import { notFound } from 'next/navigation';
import LayoutShell from '@/components/LayoutShell';
import ComboPageClient from '@/components/ComboPageClient';
import { comboBySlug, combos } from '@/data/combos';

export function generateStaticParams() {
  return combos.map((combo) => ({ slug: combo.slug }));
}

export function generateMetadata({ params }) {
  const combo = comboBySlug[params.slug];

  if (!combo) {
    return {
      title: 'Combo not found'
    };
  }

  return {
    title: combo.title,
    description: `${combo.tagline} Shop the ${combo.title} for ${combo.price}.`,
    alternates: {
      canonical: `/combos/${combo.slug}`
    },
    openGraph: {
      title: combo.title,
      description: combo.tagline,
      url: `/combos/${combo.slug}`,
      images: [
        {
          url: combo.featuredImage,
          alt: `${combo.title} hero preview`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: combo.title,
      description: combo.tagline,
      images: [combo.featuredImage]
    }
  };
}

export default function ComboDetailPage({ params }) {
  const combo = comboBySlug[params.slug];

  if (!combo) {
    notFound();
  }

  return (
    <LayoutShell>
      <ComboPageClient combo={combo} />
    </LayoutShell>
  );
}
