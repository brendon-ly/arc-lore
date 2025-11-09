import type { Metadata } from "next";
import { Barlow } from 'next/font/google';
import "./globals.css";


const barlow = Barlow({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page Description',
}

export default function RootLayout({ children }) {
  return (
    <html className={`${barlow.variable}`}>
      <body>{children}</body>
    </html>
  )
}

