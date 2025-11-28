import type { Metadata } from "next";
import { Barlow } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import Header from "./components/header";


const barlow = Barlow({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'ARC Lore',
  description: 'The entire lore of ARC Raiders, right at your fingertips.',
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html className={`${barlow.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

