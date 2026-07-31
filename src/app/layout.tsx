import type { Metadata } from "next";
import { Inter, Poppins, Manrope } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../components/providers/ThemeProvider";
import ThemeToggle from "@/components/ui/ThemeToggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "GRACED HOMES AND SERVICES",

  description:
    "Professional residential, commercial and industrial cleaning services.",

  icons: {
    icon: [
      { url: "/icons/favicon.ico" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],

    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],

    shortcut: "/icons/favicon.ico",
  },

  manifest: "/icons/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body
            className={`${inter.variable} ${poppins.variable} ${manrope.variable}`}
        >
            <ThemeProvider>
                {children}
                <ThemeToggle />
            </ThemeProvider>
        </body>
    </html>
  );
}

