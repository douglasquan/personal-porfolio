import type { Metadata } from "next";
import { Salsa } from "next/font/google";
// import { Montserrat } from "next/font/google";
import { Lato } from "next/font/google";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });
const salsa = Salsa({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-salsa"
});

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lato"
});

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata = {
  title: "Douglas Quan",
  description: "Douglas Quan's portfolio Website",
  Image:
    "https://i.ibb.co/FDDsVDs/DALL-E-2024-05-17-19-17-20-A-modern-and-sleek-logo-featuring-the-letters-DQ-in-a-bold-stylish-font-w.webp"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      {/* <body data-theme="dracula" className={`${montserrat.variable} font-mont`}> */}
      {/* <body className={`${lato.variable} font-lato text-primary`}> */}
      {/* <body className={`${salsa.variable} font-salsa text-primary`}> */}
      <body className={`${inter.variable} font-inter text-primary themetransition`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
