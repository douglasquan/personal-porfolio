import type { Metadata } from "next";
import { Salsa } from "next/font/google";
// import { Montserrat } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });
const salsa = Salsa({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-salsa"
});

export const metadata = {
  title: "Douglas Quan Portfolio App",
  description: "My portfolio page"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      {/* <body data-theme="dracula" className={`${montserrat.variable} font-mont`}> */}
      <body className={`${salsa.variable} font-salsa text-primary`}>
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
