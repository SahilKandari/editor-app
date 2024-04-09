'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import MainBread from "@/components/MainBread";
import { RecoilRoot } from "recoil";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white p-[10px]`}>
        <RecoilRoot>
          <NavBar/>
          <MainBread/>
          {children}
        </RecoilRoot>
      </body>
    </html>
  );
}
