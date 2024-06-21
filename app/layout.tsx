import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from '@/components/Navbar.js'
import Footer from '@/components/Footer.js'
import "./globals.css";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trizo Creatives",
  description: "Transforming Ideas Into Stunning Designs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      {children}
      <Footer/>
      </body>

    </html>
  );
}
