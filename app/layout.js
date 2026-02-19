import './globals.css';
import ThemeController from '@/components/ThemeController';

const siteUrl = 'https://giftlypremium.example.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Giftly Premium | Curated Gifting Combos',
    template: '%s | Giftly Premium'
  },
  description:
    'Premium gifting combos for comfort, romance, birthdays, and desk upgrades. Discover curated experiences and shop instantly via trusted marketplaces.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Giftly Premium',
    description: 'Curated gifting combos designed for memorable moments.',
    type: 'website',
    url: siteUrl
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Giftly Premium',
    description: 'Curated gifting combos designed for memorable moments.'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="default">
      <body>
        <ThemeController />
        {children}
      </body>
    </html>
  );
}
