import "./globals.css";
import ThemeController from "@/components/ThemeController";

const siteUrl = "https://aroha.in";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AROHA | Premium Curated Gifting Combos",
    template: "%s | AROHA",
  },
  description:
    "AROHA crafts premium gifting combos for comfort, romance, birthdays, and desk upgrades. Shop securely on trusted marketplaces.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AROHA",
    description: "Premium curated gifting boxes designed around real emotions.",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "AROHA",
    description: "Premium curated gifting boxes designed around real emotions.",
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
