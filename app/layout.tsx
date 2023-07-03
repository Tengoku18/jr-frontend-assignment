"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Music Sansar",
  description: "Sansar for music lovers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" bg-slate-700 ">
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </div>
      </body>
    </html>
  );
}
