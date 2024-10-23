import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const sen = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Crypto Next Innovation",
  description: "Crypto Next Innovation is a website for cryptocurrency enthusiasts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={sen.className}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
