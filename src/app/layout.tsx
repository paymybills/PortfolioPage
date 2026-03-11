import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aniruddha Roy | Systems Engineering",
  description: "Portfolio of Aniruddha Roy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased text-white bg-black`}>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
