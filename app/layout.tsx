import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/componenets/layout/Footer";
import Header from "@/componenets/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Car Gallery",
  description:
    "Next.js 15 + Tailwind CSS 3 + TypeScript. Author: Hien Thuy, Tran Nguyen -TH.Julia",
  icons: {
    icon: "/car.ico",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <Header />

          {/* Main Content / Body  {children} from page.tsx file */}
          <main className="flex-grow p-6">{children}</main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
