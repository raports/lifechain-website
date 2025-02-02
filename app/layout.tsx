import type { Metadata } from "next";
import { Open_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/context/Theme";

const openSans = Open_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lifecha.in",
  description: "News about blockchain and Decentralized Science",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${openSans.className} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="gradient" />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
