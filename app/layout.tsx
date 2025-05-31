import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Owe Money to the IRS? | Settle Tax Debt for Less',
  description: 'Behind on tax payments? Owe money to the IRS? Find out if you qualify to settle your tax debt for less than you owe through the IRS Offer in Compromise program.',
  keywords: 'owe taxes, tax debt help, owe money to IRS, back taxes, tax debt relief, IRS debt forgiveness, tax debt settlement, IRS payment plan',
  openGraph: {
    title: 'Owe Money to the IRS? | Settle Tax Debt for Less',
    description: 'Behind on tax payments? Find out if you qualify to settle your tax debt for less through the IRS Offer in Compromise program.',
    type: 'website'
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
