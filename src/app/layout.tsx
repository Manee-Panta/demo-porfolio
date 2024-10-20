import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./Component/Header";
import Footer from "./Component/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default:
      "Manita Panta | Creative UI/UX Designer & SEO-Savvy Frontend Developer",
    template: "%s | Manita Panta",
  },
  description:
    "Hi, I'm Manita Panta, a UI/UX designer and frontend developer. I create intuitive, user-friendly websites with a focus on design, usability, and SEO.",
  keywords: [
    "Manita Panta",
    "UI/UX designer",
    "frontend developer",
    "web design",
    "SEO",
  ],
  publisher: "Manita Panta",
  robots: "index, follow",
  alternates: {
    canonical: "http://localhost:3000/",
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
        className={`${geistSans.variable} bg-white ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
