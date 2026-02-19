'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { comboBySlug } from '@/data/combos';

export default function ThemeController() {
  const pathname = usePathname();

  useEffect(() => {
    const slugMatch = pathname.match(/^\/combos\/([^/]+)/);
    const slug = slugMatch?.[1];
    const theme = slug && comboBySlug[slug] ? comboBySlug[slug].theme : 'default';

    document.documentElement.setAttribute('data-theme', theme);
  }, [pathname]);

  return null;
}
