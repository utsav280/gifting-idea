import './globals.css';
import ThemeController from '@/components/ThemeController';

export const metadata = {
  metadataBase: new URL('https://giftlypremium.example.com'),
  title: {
    default: 'Giftly Premium | Curated Gifting Combos',
    template: '%s | Giftly Premium'
  },
  description:
    'Premium gifting combos for comfort, romance, birthdays, and desk upgrades. Discover curated experiences and shop instantly via trusted marketplaces.',
  openGraph: {
    title: 'Giftly Premium',
    description: 'Curated gifting combos designed for memorable moments.',
    type: 'website'
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
