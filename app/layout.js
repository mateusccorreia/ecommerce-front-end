"use client";
import { Inter } from "next/font/google";
import { createGlobalStyle } from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const GlobalStyles = createGlobalStyle`
body{
  padding: 0;
}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
