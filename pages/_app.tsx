// pages/_app.tsx
import "./globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/theme-provider";
import { Montserrat, Salsa } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });
const salsa = Salsa({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-salsa"
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <AnimatePresence mode="wait">
        <div data-theme="dracula" className={`${salsa.variable} font-salsa`}>
          <Component {...pageProps} />
        </div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
