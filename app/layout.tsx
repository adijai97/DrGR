import type { Metadata } from "next";
import { Noto_Sans, Noto_Serif, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QAWidget from "@/components/QAWidget";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-noto-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Gauri Rokkam – Holistic Health",
  description: "Holistic health coaching rooted in whole-food nutrition and ancient Indian wisdom.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${notoSans.variable} ${notoSerif.variable} ${inter.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <QAWidget />
      </body>
    </html>
  );
}
