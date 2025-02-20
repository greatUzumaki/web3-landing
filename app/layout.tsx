import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import '@/styles/globals.css';
import { WalletConnection } from '@/components/Wallet/WalletConnection';
import ServiceWorkerManager from '@/components/ServiceWorkerManager';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SwapMaster DEX',
  description: 'Next-generation decentralized exchange platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className='background'></div>
        <Header />
        {children}
        <Footer />

        <WalletConnection />
        <ServiceWorkerManager />
      </body>
    </html>
  );
}
