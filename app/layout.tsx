import type { Metadata } from "next";

import { Urbanist } from "next/font/google"
import "./globals.css";


import Navbar from "@/components/navbar";
import Header from "@/components/header";


//Fuente a usar
const urbanist = Urbanist({
  subsets: ["latin"]
});

//Título de página
export const metadata: Metadata = {
  title: "💻 AkkeyDev",
  description: "¡Bienvenido a mi sitio web!.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.className}`}>
        <Navbar />
        <Header />
        {/* El Navbar es permanente al estar en el layout */}
        {children}
      </body>
    </html>
  );
}
