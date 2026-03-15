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
    default: "Foundation Trading | Global Commodity Trading & Logistics",
    template: "%s | Foundation Trading",
  },
  description: "Foundation Trading is a premier global commodity trading house, facilitating the flow of essential products with integrity and precision. Specializing in Energy, Metals, and Agri-products.",
  keywords: ["commodity trading", "energy trading", "metals trading", "global logistics", "sustainability", "Foundation Trading", "Nairobi trading"],
  authors: [{ name: "Foundation Trading" }],
  creator: "Foundation Trading",
  publisher: "Foundation Trading",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Foundation Trading | Global Commodity Trading & Logistics",
    description: "Empowering the Global Economy through responsible and efficient commodity trading.",
    url: "https://foundation-trading.com",
    siteName: "Foundation Trading",
    images: [
      {
        url: "https://foundation-trading.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Foundation Trading Global Network",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foundation Trading | Global Commodity Trading & Logistics",
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
