"use client";

import "./globals.css";
import { ThemeProvider } from "@/ui/ThemeProvider";
import { Instrument_Serif, Inter, Mochiy_Pop_One } from "next/font/google";
import { Header, Footer } from "@/components";
import { ErrorProvider } from "@/hooks/useError";

const instrumentSerif = Instrument_Serif({
  preload: true,
  subsets: ["latin"],
  style: "italic",
  variable: "--font-instrument-serif",
  weight: "400",
});

const inter = Inter({
  preload: true,
  subsets: ["latin"],
  style: "normal",
  variable: "--font-inter",
});

const mochiyPopOne = Mochiy_Pop_One({
  preload: true,
  subsets: ["latin"],
  variable: "--font-mochiy-pop-one",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instrumentSerif} ${inter} ${mochiyPopOne} antialiased`}
      >
        <ErrorProvider>
          <ThemeProvider
            defaultTheme="system"
            attribute="class"
            enableSystem
            disableTransitionOnChange
            themes={["light", "dark"]}
          >
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </ErrorProvider>
      </body>
    </html>
  );
}
