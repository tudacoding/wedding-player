import type { Metadata } from "next";
import { Inter, EB_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import "./styles/fonts.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-eb-garamond",
});
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Phương Thịnh Wedding",
  description: "Save the date",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${manrope.variable}`}>
      <body className={inter.className}>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
