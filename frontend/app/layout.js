"use client";

import Nav from "@components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@components/Footer";
import { usePathname } from "next/navigation";
import { metadata } from "@metadata";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
    <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </head>
      <body className={inter.className}>
        {pathname !== "/auth" && <Nav />}

        {children}
        {/* <ProgressBar height="4px" color="#FFFF00" options={{showSpinner:false}} shallowRouting/> */}
        {pathname !== "/auth" && <Footer />}
        
      </body>
    </html>
  );
}
