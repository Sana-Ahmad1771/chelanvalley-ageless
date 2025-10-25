import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Chelan Valley Ageless - Skincare & Wellness Spa",
    template: "%s | Chelan Valley Ageless",
  },
  description:
    "Chelan Valley Ageless offers rejuvenating skincare, spa therapies, and holistic wellness treatments designed to restore balance and timeless beauty.",
  openGraph: {
    siteName: "Chelan Valley Ageless",
    type: "website",
    url: "https://chelanvalley-ageless.vercel.app",
    images: [{ url: "/images/hero.jpg" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
