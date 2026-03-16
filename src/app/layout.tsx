import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "FOUNDATION TRADING COMPANY | Global Commodity Trading & Logistics",
    template: "%s | FOUNDATION TRADING COMPANY",
  },
  description: "FOUNDATION TRADING COMPANY is a premier global commodity trading house, facilitating the flow of essential products with integrity and precision. Specializing in Energy, Metals, and Agri-products.",
  keywords: ["commodity trading", "energy trading", "metals trading", "global logistics", "sustainability", "FOUNDATION TRADING COMPANY", "Nairobi trading"],
  authors: [{ name: "FOUNDATION TRADING COMPANY" }],
  creator: "FOUNDATION TRADING COMPANY",
  publisher: "FOUNDATION TRADING COMPANY",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "FOUNDATION TRADING COMPANY | Global Commodity Trading & Logistics",
    description: "Empowering the Global Economy through responsible and efficient commodity trading.",
    url: "https://foundation-trading.com",
    siteName: "FOUNDATION TRADING COMPANY",
    images: [
      {
        url: "https://foundation-trading.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "FOUNDATION TRADING COMPANY Global Network",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FOUNDATION TRADING COMPANY | Global Commodity Trading & Logistics",
    description: "Empowering the Global Economy through responsible and efficient commodity trading.",
    images: ["https://foundation-trading.com/og-image.png"],
    creator: "@foundationtrading",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
