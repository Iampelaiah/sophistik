import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata = {
  title: "SophiStic | Secure by Design. High-Fidelity by Nature.",
  description: "A boutique software engineering studio specialized in building secure, high-fidelity digital products.",
  keywords: ["fullstack development", "secure by design", "high-fidelity", "React", "Node.js", "API design", "software studio", "Cape Town"],
};

export const viewport = {
  themeColor: "#6366f1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
