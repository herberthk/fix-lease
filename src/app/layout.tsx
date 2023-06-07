import "./globals.css";
import React from "react";
import { Roboto } from "next/font/google";
import Header from "@/components/Header";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Fix lease",
  description: "Your property leasing companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
