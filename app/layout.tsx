"use client";
import Root from "@/components/Root";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" bg-slate-700 ">
          <Root>{children}</Root>
        </div>
      </body>
    </html>
  );
}
