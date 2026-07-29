import type { Metadata } from "next";
import { Inter, Poppins, Manrope } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../components/providers/ThemeProvider";

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

export const metadata: Metadata = {
  title: "GRACED HOMES AND SERVICES",
  description:
    "Professional residential, commercial and industrial cleaning services.",
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
            </ThemeProvider>
        </body>
    </html>
  );
}

