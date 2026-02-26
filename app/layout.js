import "./globals.css";
import ThemeController from "@/components/ThemeController";

const siteUrl = "https://giftlypremium.example.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AROHA | Curated Gifting Combos",
    template: "%s | AROHA",
  },
  description:
    "Premium gifting combos for comfort, romance, birthdays, and desk upgrades. Discover curated experiences and shop instantly via trusted marketplaces.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AROHA",
    description: "Curated gifting combos designed for memorable moments.",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "AROHA",
    description: "Curated gifting combos designed for memorable moments.",
  },
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
