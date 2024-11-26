import type { Metadata } from "next";
import localFont from "next/font/local";
import { Urbanist } from "next/font/google"
import "./globals.css";

//Fuente a usar
const urbanist = Urbanist({
  subsets: ["latin"]
});

//Título de página
export const metadata: Metadata = {
  title: "💻 AkkeyDev",
  description: "Landing page hecha por Akkey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.className}`}
      >
        {children}
      </body>
    </html>
  );
}
