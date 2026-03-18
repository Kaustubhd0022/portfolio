import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { AIProvider } from "@/context/AIContext";
import { AIPanel } from "@/components/ui/AIPanel";
import { ParallaxBackground } from "@/components/ui/ParallaxBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaustubh Deshmukh | Product Manager & AI Builder",
  description: "Senior Product Manager specializing in 0-to-1, AI-native systems, and consumer-focused products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0B0F19] text-foreground`}
      >
        <AIProvider>
          <Navbar />
          <ParallaxBackground>
            <main>
              {children}
            </main>
          </ParallaxBackground>
          <AIPanel />
        </AIProvider>
      </body>
    </html>
  );
}
