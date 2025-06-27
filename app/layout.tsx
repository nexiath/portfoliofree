import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alex Chen - Web3 Fullstack Developer',
  description: 'Expert Web3, AI, and fullstack developer specializing in DeFi, smart contracts, and innovative tech solutions. Available for freelance projects.',
  keywords: 'Web3 developer, blockchain developer, DeFi, smart contracts, React, Next.js, AI integration, fullstack developer',
  authors: [{ name: 'Alex Chen' }],
  creator: 'Alex Chen',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexchen.dev',
    title: 'Alex Chen - Web3 Fullstack Developer',
    description: 'Expert Web3, AI, and fullstack developer specializing in DeFi, smart contracts, and innovative tech solutions.',
    siteName: 'Alex Chen Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Chen - Web3 Fullstack Developer',
    description: 'Expert Web3, AI, and fullstack developer specializing in DeFi, smart contracts, and innovative tech solutions.',
    creator: '@alexchen_dev',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}